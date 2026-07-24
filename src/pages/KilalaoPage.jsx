import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDevice } from '../lib/profile.js'

const GAMES = [
  {
    id: 'dashikara',
    title: 'Dashikara',
    subtitle: 'Runner sans fin',
    desc: 'Cours, saute et esquive les obstacles sur les rails de Madagascar. Attrape les pièces, sème la police et grimpe au classement.',
    emoji: '🏃',
    color: '#f5a623',
    image: '/modele.png',
    path: '/intro',
  },
  {
    id: 'penopeno',
    title: 'Penopeno',
    subtitle: 'Tirs au but',
    desc: 'Tire avec ton corps — la webcam copie tes mouvements en temps réel pour marquer des buts.',
    emoji: '⚽',
    color: '#4caf50',
    image: null,
    path: '/penopeno',
  },
  {
    id: 'rallye',
    title: '2Rally',
    subtitle: 'Course de voitures',
    desc: 'Dépasse tes adversaires sur un circuit en 3 tours. Boost, tir sur les voitures et multijoueur au téléphone.',
    emoji: '🏎️',
    color: '#e53935',
    image: '/voiture.png',
    path: '/rallye',
  },
]

export default function KilalaoPage() {
  const navigate = useNavigate()
  const [sel, setSel] = useState(0)
  const selRef = useRef(0)
  selRef.current = sel
  const device = getDevice()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp')        { e.preventDefault(); setSel(s => (s - 1 + GAMES.length) % GAMES.length) }
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setSel(s => (s + 1) % GAMES.length) }
      else if (e.key === 'Enter')                               { e.preventDefault(); navigate(GAMES[selRef.current].path) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const g = GAMES[sel]

  return (
    <div className="kila" style={{ '--accent': g.color }}>
      <div className="kila__ambient" />

      {/* Barre du haut */}
      <header className="kila__nav">
        <span className="kila__brand">KILALAO</span>
        <span className="kila__nav-links">
          <span className="kila__nav-link is-active">Jeux</span>
        </span>
        {device && <span className="kila__user">👤 {device}</span>}
      </header>

      {/* Héros du jeu sélectionné */}
      <section className="kila__hero" key={g.id}>
        <div
          className={`kila__hero-art${g.image ? '' : ' kila__hero-art--emoji'}`}
          style={g.image ? { backgroundImage: `url(${g.image})` } : undefined}
        >
          {!g.image && <span>{g.emoji}</span>}
        </div>
        <div className="kila__hero-scrim" />
        <div className="kila__hero-content">
          <span className="kila__kicker">{g.emoji} {g.subtitle}</span>
          <h1 className="kila__hero-title">{g.title}</h1>
          <p className="kila__hero-desc">{g.desc}</p>
          <div className="kila__hero-actions">
            <button className="kila__play" onClick={() => navigate(g.path)}>▶ Jouer</button>
          </div>
        </div>
      </section>

      {/* Carrousel des jeux */}
      <section className="kila__row">
        <div className="kila__row-title">Tes jeux</div>
        <div className="kila__carousel">
          {GAMES.map((game, i) => (
            <button
              key={game.id}
              className={`kila__poster${i === sel ? ' kila__poster--sel' : ''}`}
              style={{ '--accent': game.color }}
              onMouseEnter={() => setSel(i)}
              onClick={() => (i === sel ? navigate(game.path) : setSel(i))}
            >
              <div
                className={`kila__poster-art${game.image ? '' : ' kila__poster-art--emoji'}`}
                style={game.image ? { backgroundImage: `url(${game.image})` } : undefined}
              >
                {!game.image && <span>{game.emoji}</span>}
              </div>
              <div className="kila__poster-cap">
                <span className="kila__poster-name">{game.title}</span>
                <span className="kila__poster-sub">{game.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <p className="kila__hint">← → choisir · Entrée / clic pour lancer</p>
    </div>
  )
}
