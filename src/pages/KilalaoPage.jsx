import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const GAMES = [
  {
    id: 'dashikara',
    title: 'Dashikara',
    subtitle: 'Runner sans fin',
    desc: 'Cours, saute, esquive les obstacles sur les rails de Madagascar',
    emoji: '🏃',
    color: '#f5a623',
    path: '/intro',
  },
  {
    id: 'penopeno',
    title: 'Penopeno',
    subtitle: 'Tirs au but',
    desc: 'Tire avec ton corps — la webcam copie tes mouvements en temps réel',
    emoji: '⚽',
    color: '#4caf50',
    path: '/penopeno',
  },
  {
    id: 'rallye',
    title: '2Rally',
    subtitle: 'Course de voitures',
    desc: 'Dépasse tes adversaires sur un circuit ovale en 3 tours — clavier ou tactile',
    emoji: '🏎️',
    color: '#e53935',
    path: '/rallye',
  },
]

export default function KilalaoPage() {
  const navigate = useNavigate()
  const [sel, setSel] = useState(0)
  const selRef = useRef(0)
  selRef.current = sel

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp')   { e.preventDefault(); setSel(s => (s - 1 + GAMES.length) % GAMES.length) }
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setSel(s => (s + 1) % GAMES.length) }
      else if (e.key === 'Enter') navigate(GAMES[selRef.current].path)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="kilalao">
      <div className="kilalao__bg" />

      <header className="kilalao__header">
        <h1 className="kilalao__title">KILALAO</h1>
        <p className="kilalao__tagline">Choisis ton jeu</p>
      </header>

      <div className="kilalao__cards">
        {GAMES.map((g, i) => (
          <button
            key={g.id}
            className={`kilalao__card${i === sel ? ' kilalao__card--sel' : ''}`}
            style={{ '--accent': g.color }}
            onMouseEnter={() => setSel(i)}
            onClick={() => navigate(g.path)}
          >
            <span className="kilalao__emoji">{g.emoji}</span>
            <span className="kilalao__gname">{g.title}</span>
            <span className="kilalao__gsub">{g.subtitle}</span>
            <span className="kilalao__gdesc">{g.desc}</span>
            <span className="kilalao__cta">Jouer →</span>
          </button>
        ))}
      </div>

      <p className="kilalao__hint">← → choisir · Entrée lancer</p>
    </div>
  )
}
