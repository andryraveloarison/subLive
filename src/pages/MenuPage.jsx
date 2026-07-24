import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGameCtx } from '../context/GameContext.js'

// Accueil cinématique (style écran-titre console) : le monde 3D défile en fond,
// logo en haut, liste verticale d'options navigable au clavier (↑ ↓ Entrée).
export default function MenuPage() {
  const { best, cam, camMsg, enableCam, disableCam, goSetup } = useGameCtx()
  const navigate = useNavigate()
  const [sel, setSel] = useState(0)

  const items = [
    { key: 'solo',  label: 'Solo',   hint: 'Course en solo',        action: () => goSetup(false) },
    { key: 'match', label: 'Match',  hint: "Jusqu'à 4 joueurs",     action: () => goSetup(true) },
    cam === 'on'
      ? { key: 'cam', label: 'Désactiver la webcam', hint: 'Arrête la détection de corps', action: disableCam }
      : { key: 'cam', label: cam === 'loading' ? 'Chargement…' : 'Activer la webcam', hint: 'Joue avec ton corps', action: enableCam, disabled: cam === 'loading' },
    { key: 'quit', label: 'Quitter', hint: 'Retour à la sélection des jeux', action: () => navigate('/') },
  ]

  const selRef = useRef(sel)
  selRef.current = sel

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => (s + 1) % items.length) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setSel(s => (s - 1 + items.length) % items.length) }
      else if (e.key === 'Enter') {
        const it = items[selRef.current]
        if (it && !it.disabled) it.action()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="zelda">
      <div className="zelda__scrim" />

      <header className="zelda__top">
        <img src="/logo.png" className="zelda__logo" alt="Dashikara" />
      </header>

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

      <footer className="zelda__foot">
        <span className="zelda__best">{best > 0 ? `Meilleur : ${best.toLocaleString('fr-FR')}` : 'by nananjy'}</span>
        <span className="zelda__keys">↑ ↓ choisir · Entrée valider</span>
        {camMsg ? <span className="zelda__cammsg">{camMsg}</span> : <span />}
      </footer>
    </div>
  )
}
