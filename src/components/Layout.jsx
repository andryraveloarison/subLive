import { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { PoseController } from '../webcam.js'
import { submitScore, recordPlay } from '../lib/supabase.js'
import { getDevice } from '../lib/profile.js'
import { useGame } from '../hooks/useGame.js'
import { CHARACTERS } from '../data/characters.js'
import { GameContext } from '../context/GameContext.js'
import WebcamPreview from './WebcamPreview.jsx'
import ProfileMenu from './ProfileMenu.jsx'

// Ossature persistante : le canvas 3D et le moteur vivent ici et NE sont jamais
// démontés lors des changements de page (contrairement à l'Outlet). Fournit le
// contexte du jeu et rend chaque page routée dans une scène pivotante.
export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const videoRef = useRef(null)
  const poseRef = useRef(null)
  const endRunRef = useRef(null)
  const transitRef = useRef(false)
  const pendingIdxRef = useRef(0)

  const [transit, setTransit] = useState(null)    // null | 'out' | 'in'
  const [score, setScore] = useState(0)
  const [coins, setCoins] = useState(0)
  // Meilleur = meilleures PIÈCES gagnées en une partie (aligné sur le classement
  // en ligne). Nouvelle clé : l'ancienne (dashikara_best) était en score-distance.
  const [best, setBest] = useState(() => Number(localStorage.getItem('dashikara_best_coins') || 0))
  const [power, setPower] = useState({ magnet: false, boots: false })
  const [cam, setCam] = useState('off')
  const [camMsg, setCamMsg] = useState('')
  const [camHidden, setCamHidden] = useState(false)   // aperçu masqué en jeu (mobile)

  // Sur MOBILE : masque l'aperçu webcam 2 s après le début de la partie
  // (il prend trop de place à l'écran) — le flux reste actif pour les gestes.
  useEffect(() => {
    const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 820
    if (location.pathname === '/play' && mobile) {
      const t = setTimeout(() => setCamHidden(true), 2000)
      return () => clearTimeout(t)
    }
    setCamHidden(false)
  }, [location.pathname])

  // match / personnages
  const [isMatch, setIsMatch] = useState(false)
  const [numPlayers, setNumPlayers] = useState(1)
  const [picks, setPicks] = useState([0, 1, 2, 3])
  const [names, setNames] = useState(['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4'])
  const [turnIdx, setTurnIdx] = useState(0)
  const [round, setRound] = useState(1)
  const [totals, setTotals] = useState([0])
  const [lastCoins, setLastCoins] = useState([null])

  const { canvasRef, gameRef } = useGame({
    onScore: (s, c) => { setScore(s); setCoins(c) },
    onPower: (m, b) => setPower({ magnet: m > 0, boots: b > 0 }),
    onGameOver: (s, c) => endRunRef.current?.(s, c),
  })

  useEffect(() => () => poseRef.current?.stop(), [])

  // Reset scene + modèle décor quand on arrive sur /menu
  useEffect(() => {
    if (location.pathname === '/menu' && gameRef.current) {
      gameRef.current.reset()
    }
  }, [location.pathname])

  // Navigation avec rotation de page. `onMid` s'exécute quand l'écran est retourné
  // (à mi-transition), avant l'affichage de la nouvelle page.
  const goMenu = () => {
    // Lance le chargement de perso.glb AVANT la transition pour que le décor
    // soit prêt quand la page menu s'affiche.
    gameRef.current?._loadPlayerModel('/perso.glb')
    go('/menu')
  }

  const go = (to, onMid) => {
    if (transitRef.current) return
    transitRef.current = true
    setTransit('out')
    setTimeout(() => {
      onMid?.()
      if (to) navigate(to)
      setTransit('in')
    }, 300)
    setTimeout(() => { setTransit(null); transitRef.current = false }, 620)
  }

  // Fin d'un run : solo (meilleur score) ou match (tours + classement).
  endRunRef.current = (finalScore, finalCoins) => {
    // Classement Supabase : meilleures PIÈCES gagnées en une partie
    // par (pseudo du jeu, appareil) — pas le score de distance.
    submitScore(names[turnIdx] || `Joueur ${turnIdx + 1}`, getDevice(), finalCoins)
    if (!isMatch) {
      if (finalCoins > best) { setBest(finalCoins); localStorage.setItem('dashikara_best_coins', String(finalCoins)) }
      go('/over')
      return
    }
    const nt = totals.slice(); nt[turnIdx] = (nt[turnIdx] || 0) + finalCoins
    const nl = lastCoins.slice(); nl[turnIdx] = finalCoins
    setTotals(nt); setLastCoins(nl)
    if (turnIdx + 1 < numPlayers) { setTurnIdx(turnIdx + 1); go('/ready') }
    else { go('/ranking') }
  }

  const enableCam = async () => {
    if (cam === 'on' || cam === 'loading') return
    setCam('loading')
    const pose = new PoseController(videoRef.current, {
      onStatus: (m) => setCamMsg(m),
      onJump: () => gameRef.current?.jump(),
      onCrouch: () => gameRef.current?.roll(),
      onLane: (i) => gameRef.current?.setLane(i),
    })
    poseRef.current = pose
    try { await pose.start(); setCam('on') }
    catch (err) { console.error(err); setCam('error'); setCamMsg(err?.message || 'Caméra indisponible') }
  }

  const disableCam = () => {
    poseRef.current?.stop()
    poseRef.current = null
    setCam('off')
    setCamMsg('')
  }

  const goSetup = (match) => {
    setIsMatch(match)
    setNumPlayers(match ? 3 : 1)
    go('/setup')
  }

  // Le tour passe d'abord par la page de chargement (préchargement des modèles
  // course/saut, ~150 Mo), qui appellera ensuite launchPlay().
  const startTurn = (idx) => {
    pendingIdxRef.current = idx
    go('/loading')
  }

  const preloadModels = (onProgress) =>
    gameRef.current?.preloadGameModels(onProgress) ?? Promise.resolve()

  // Lance réellement la partie une fois les modèles chargés (pas de flip ici
  // pour éviter toute course avec la transition de la page de chargement).
  const launchPlay = () => {
    const idx = pendingIdxRef.current
    const ch = CHARACTERS[picks[idx]] || CHARACTERS[0]
    gameRef.current.setCharacter(ch.colors, ch.avatar || 1)
    setScore(0); setCoins(0); setPower({ magnet: false, boots: false })
    // Journalise la partie (une par run lancé) pour les stats /datax.
    recordPlay('dashikara', names[idx] || `Joueur ${idx + 1}`, getDevice())
    gameRef.current.start()
    navigate('/play')
  }

  const beginMatch = () => {
    setTotals(Array(numPlayers).fill(0))
    setLastCoins(Array(numPlayers).fill(null))
    setTurnIdx(0); setRound(1)
    if (isMatch) go('/ready')
    else startTurn(0)
  }

  const nextRound = () => {
    setLastCoins(Array(numPlayers).fill(null))
    setTurnIdx(0); setRound(round + 1)
    go('/ready')
  }

  const pName = (i) => names[i] || `Joueur ${i + 1}`
  const ranking = totals.map((t, i) => ({ i, t })).sort((a, b) => b.t - a.t)

  const value = {
    score, coins, best, power, cam, camMsg,
    isMatch, numPlayers, setNumPlayers, picks, setPicks, names, setNames,
    turnIdx, round, totals, lastCoins,
    pName, ranking,
    enableCam, disableCam, go, goMenu, goSetup, startTurn, beginMatch, nextRound,
    preloadModels, launchPlay,
  }

  const showHome = !['/menu', '/'].includes(location.pathname)

  return (
    <GameContext.Provider value={value}>
      <div className="app">
        <canvas ref={canvasRef} />
        <WebcamPreview cam={cam} videoRef={videoRef} hidden={camHidden} />
        {/* Pas sur /setup : chevauche le sélecteur « Joueurs » du match */}
        {location.pathname !== '/setup' && <ProfileMenu edge={!showHome} />}
        {showHome && (
          <button className="home-btn" onClick={goMenu} title="Retour au menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </button>
        )}
        <div className={`page-stage${transit ? ` page-stage--${transit}` : ''}`}>
          <Outlet />
        </div>
      </div>
    </GameContext.Provider>
  )
}
