import { useEffect, useRef, useState } from 'react'
import { CHARACTERS } from '../../data/characters.js'
import CharPortrait3D from '../CharPortrait3D.jsx'

// Configuration solo/match : choix du nombre de joueurs, puis réglage d'un
// joueur à la fois (personnage ‹ › + nom) en carrousel. Style manette PlayStation.
export default function SetupScreen({
  isMatch, numPlayers, setNumPlayers,
  picks, setPicks, names, setNames,
  onBegin, onBack,
}) {
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const curRef = useRef(0)
  useEffect(() => { curRef.current = currentPlayer }, [currentPlayer])

  // Si le nombre de joueurs baisse en dessous du joueur affiché, on recadre.
  useEffect(() => {
    if (currentPlayer > numPlayers - 1) setCurrentPlayer(numPlayers - 1)
  }, [numPlayers]) // eslint-disable-line react-hooks/exhaustive-deps

  const cyclePick = (i, delta) => setPicks(p => {
    const n = p.slice()
    const ci = n[i] % CHARACTERS.length
    n[i] = (ci + delta + CHARACTERS.length) % CHARACTERS.length
    return n
  })

  const gotoPlayer = (delta) =>
    setCurrentPlayer(i => Math.min(numPlayers - 1, Math.max(0, i + delta)))

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); cyclePick(curRef.current, -1) }
      else if (e.key === 'ArrowRight') { e.preventDefault(); cyclePick(curRef.current, 1) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); gotoPlayer(-1) }
      else if (e.key === 'ArrowDown') { e.preventDefault(); gotoPlayer(1) }
      else if (e.key === 'Enter') { e.preventDefault(); onBegin() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const i    = Math.min(currentPlayer, numPlayers - 1)
  const ci   = picks[i] % CHARACTERS.length
  const char = CHARACTERS[ci]
  const atFirst = i <= 0
  const atLast  = i >= numPlayers - 1

  return (
    <div className="ps4-setup">
      {/* Header */}
      <div className="ps4-setup__header">
        <div className="ps4-setup__title">
          {isMatch ? 'Configuration du match' : 'Choisir le personnage'}
        </div>
        {isMatch && (
          <div className="ps4-count">
            <span className="ps4-count__label">Joueurs</span>
            {[2, 3, 4, 5, 6, 7, 8].map(n => (
              <button
                key={n}
                className={`ps4-count__btn${numPlayers === n ? ' ps4-count__btn--active' : ''}`}
                onClick={() => setNumPlayers(n)}
              >{n}</button>
            ))}
          </div>
        )}
      </div>

      {/* Carrousel : un seul joueur réglé à la fois */}
      <div className="ps4-solo">
        {isMatch && (
          <button
            className="ps4-nav ps4-nav--prev"
            onClick={() => gotoPlayer(-1)}
            disabled={atFirst}
            aria-label="Joueur précédent"
          >‹</button>
        )}

        <div
          key={i}
          className="ps4-player-card ps4-player-card--selected ps4-player-card--solo"
          style={{ borderColor: `${char.colors.shirt}35` }}
        >
          <div className="ps4-player-badge">{isMatch ? `Joueur ${i + 1} / ${numPlayers}` : `P${i + 1}`}</div>

          {/* Sélecteur de personnage */}
          <div className="ps4-char-row">
            <button className="ps4-arrow" onClick={() => cyclePick(i, -1)}>‹</button>

            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 50% 110%, ${char.colors.shirt}40 0%, transparent 65%)`,
                pointerEvents: 'none',
              }} />
              <CharPortrait3D key={`${i}-av${char.avatar ?? 1}`} char={char} size={240} modelPath={char.avatar === 2 ? '/modelAvatar2.glb' : '/modeleAvatar.glb'} />
            </div>

            <button className="ps4-arrow" onClick={() => cyclePick(i, 1)}>›</button>
          </div>

          <div>
            <div className="ps4-char-name">{char.name}</div>
            <div className="ps4-char-role">{char.role}</div>
          </div>

          <input
            className="ps4-name-input"
            value={names[i] || ''}
            maxLength={14}
            placeholder={`Joueur ${i + 1}`}
            onChange={e => setNames(n => { const c = n.slice(); c[i] = e.target.value; return c })}
          />
        </div>

        {isMatch && (
          <button
            className="ps4-nav ps4-nav--next"
            onClick={() => gotoPlayer(1)}
            disabled={atLast}
            aria-label="Joueur suivant"
          >›</button>
        )}
      </div>

      {/* Points de progression entre joueurs */}
      {isMatch && numPlayers > 1 && (
        <div className="ps4-dots">
          {Array.from({ length: numPlayers }).map((_, d) => (
            <button
              key={d}
              className={`ps4-dot${d === i ? ' ps4-dot--active' : ''}`}
              onClick={() => setCurrentPlayer(d)}
              aria-label={`Joueur ${d + 1}`}
            />
          ))}
        </div>
      )}

      {/* Boutons d'action style PS */}
      <div className="ps4-actions">
        <button className="ps4-action" onClick={onBack}>
          <div className="ps4-btn-icon ps4-btn-icon--o">○</div>
          <span>Retour</span>
        </button>
        <button className="ps4-action" onClick={onBegin}>
          <div className="ps4-btn-icon ps4-btn-icon--x">✕</div>
          <span>{isMatch ? 'Commencer le match' : 'Jouer'}</span>
        </button>
      </div>
    </div>
  )
}
