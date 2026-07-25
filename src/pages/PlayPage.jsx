import { useEffect, useRef, useState } from 'react'
import Hud from '../components/Hud.jsx'
import { useGameCtx } from '../context/GameContext.js'

// Décalage de départ : la musique commence à la 3e seconde (et y revient à
// chaque boucle, on saute donc l'intro).
const MUSIC_START = 3
const MUTE_KEY = 'dashikara_music_muted'

export default function PlayPage() {
  const { score, coins, power, isMatch, pName, turnIdx, round } = useGameCtx()
  const audioRef = useRef(null)
  const [muted, setMuted] = useState(() => localStorage.getItem(MUTE_KEY) === '1')

  // Musique de fond pendant la partie : démarre à 3 s, boucle, s'arrête au
  // démontage (fin de run / retour menu).
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.55
    const seekStart = () => { try { audio.currentTime = MUSIC_START } catch { /* pas encore seekable */ } }
    const startPlay = () => { seekStart(); audio.play().catch(() => { /* autoplay bloqué */ }) }
    const onEnded = () => { seekStart(); audio.play().catch(() => {}) }

    audio.addEventListener('ended', onEnded)
    if (audio.readyState >= 1) startPlay()               // métadonnées déjà là
    else audio.addEventListener('canplay', startPlay, { once: true })

    return () => {
      audio.removeEventListener('ended', onEnded)
      audio.pause()
    }
  }, [])

  // Applique et mémorise l'état muet.
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted
    localStorage.setItem(MUTE_KEY, muted ? '1' : '0')
  }, [muted])

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" preload="auto" muted={muted} />

      <button
        className="music-btn"
        onClick={() => setMuted(m => !m)}
        title={muted ? 'Activer la musique' : 'Couper la musique'}
        aria-label={muted ? 'Activer la musique' : 'Couper la musique'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
          {muted ? (
            <>
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </>
          ) : (
            <>
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </>
          )}
        </svg>
      </button>

      <Hud
        score={score} coins={coins} power={power}
        isMatch={isMatch} playerName={pName(turnIdx)} round={round}
      />
    </>
  )
}
