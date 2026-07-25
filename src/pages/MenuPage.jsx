import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameCtx } from '../context/GameContext.js'
import Leaderboard from '../components/Leaderboard.jsx'

// Accueil cinématique (style écran-titre console) : le monde 3D défile en fond,
// logo en haut, liste verticale d'options navigable au clavier (↑ ↓ Entrée).
export default function MenuPage() {
  const { best, cam, camMsg, enableCam, disableCam, goSetup } = useGameCtx()
  const navigate = useNavigate()
  const [sel, setSel] = useState(0)
  const [showLb, setShowLb] = useState(false)

  // Sur mobile le panneau latéral du classement est masqué : on le propose
  // à la place comme entrée de menu (overlay plein écran).
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 820px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    const onChange = (e) => { setMobile(e.matches); setSel(0) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Dashikara : la webcam est OBLIGATOIRE pour jouer (solo comme match).
  const camOn = cam === 'on'
  const items = [
    { key: 'solo',  label: 'Solo',   hint: camOn ? 'Course en solo'    : '⚠ Active la webcam pour jouer', action: () => goSetup(false), disabled: !camOn },
    { key: 'match', label: 'Match',  hint: camOn ? "Jusqu'à 4 joueurs" : '⚠ Active la webcam pour jouer', action: () => goSetup(true),  disabled: !camOn },
    camOn
      ? { key: 'cam', label: 'Désactiver la webcam', hint: 'Arrête la détection de corps', action: disableCam }
      : { key: 'cam', label: cam === 'loading' ? 'Chargement…' : 'Activer la webcam (obligatoire)', hint: 'Joue avec ton corps', action: enableCam, disabled: cam === 'loading' },
    ...(mobile ? [{ key: 'lb', label: 'Classement', hint: 'Top 10 des joueurs', action: () => setShowLb(true) }] : []),
    { key: 'quit', label: 'Quitter', hint: 'Retour à la sélection des jeux', action: () => navigate('/') },
  ]

  const selRef = useRef(sel)
  selRef.current = sel
  const itemsRef = useRef(items)
  itemsRef.current = items
  const showLbRef = useRef(showLb)
  showLbRef.current = showLb

  useEffect(() => {
    const onKey = (e) => {
      if (showLbRef.current) {
        if (e.key === 'Escape' || e.key === 'Enter') { e.preventDefault(); setShowLb(false) }
        return
      }
      const its = itemsRef.current
      if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => (s + 1) % its.length) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => (s - 1 + its.length) % its.length) }
      else if (e.key === 'Enter') {
        const it = its[selRef.current]
        if (it && !it.disabled) it.action()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="zelda">
      <div className="zelda__scrim" />

      <header className="zelda__top">
        <img src="/logo.png" className="zelda__logo" alt="Dashikara" />
      </header>

      <aside className="zelda__leaderboard">
        <Leaderboard limit={10} />
      </aside>

      <nav className="zelda__menu">
        {items.map((it, i) => (
          <button
            key={it.key}
            className={`zelda__item${i === sel ? ' is-active' : ''}`}
            disabled={it.disabled}
            onMouseEnter={() => setSel(i)}
            onClick={() => !it.disabled && it.action()}
          >
            <span className="zelda__marker">◆</span>
            <span className="zelda__label">{it.label}</span>
            <span className="zelda__hint">{it.hint}</span>
          </button>
        ))}
      </nav>

      {showLb && (
        <div className="zelda__lb-overlay" onClick={() => setShowLb(false)}>
          <div className="zelda__lb-panel" onClick={(e) => e.stopPropagation()}>
            <Leaderboard limit={10} />
            <button className="zelda__lb-close" onClick={() => setShowLb(false)}>Fermer</button>
          </div>
        </div>
      )}

      <footer className="zelda__foot">
        <span className="zelda__best">{best > 0 ? `Meilleur : 🪙 ${best.toLocaleString('fr-FR')}` : 'by nananjy'}</span>
        <span className="zelda__keys">↑ ↓ choisir · Entrée valider</span>
        {camMsg ? <span className="zelda__cammsg">{camMsg}</span> : <span />}
      </footer>
    </div>
  )
}
