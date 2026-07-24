import { useEffect, useRef, useState } from 'react'
import { CHARACTERS } from '../../data/characters.js'
import CharPortrait3D from '../CharPortrait3D.jsx'

// Configuration solo/match : choix du nombre de joueurs, sélection de personnage
// (flèches ‹ ›) et saisie des noms. Style manette PlayStation.
export default function SetupScreen({
  isMatch, numPlayers, setNumPlayers,
  picks, setPicks, names, setNames,
  onBegin, onBack,
}) {
  const [currentPlayer, setCurrentPlayer] = useState(0)
  const selRefIdx = useRef(0)

  const cyclePick = (i, delta) => setPicks(p => {
    const n = p.slice()
    const ci = n[i] % CHARACTERS.length
    n[i] = (ci + delta + CHARACTERS.length) % CHARACTERS.length
    return n
  })

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); cyclePick(selRefIdx.current, -1) }
      else if (e.key === 'ArrowRight') { e.preventDefault(); cyclePick(selRefIdx.current, 1) }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setCurrentPlayer(i => Math.max(0, i - 1)); selRefIdx.current = Math.max(0, selRefIdx.current - 1) }
      else if (e.key === 'ArrowDown') { e.preventDefault(); setCurrentPlayer(i => Math.min(numPlayers - 1, i + 1)); selRefIdx.current = Math.min(numPlayers - 1, selRefIdx.current + 1) }
      else if (e.key === 'Enter') { e.preventDefault(); onBegin() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
            {[2, 3, 4].map(n => (
              <button
                key={n}
                className={`ps4-count__btn${numPlayers === n ? ' ps4-count__btn--active' : ''}`}
                onClick={() => setNumPlayers(n)}
              >{n}</button>
            ))}
          </div>
        )}
      </div>

      {/* Grille de joueurs */}
      <div className="ps4-players" style={{ gridTemplateColumns: `repeat(${numPlayers}, 1fr)` }}>
        {Array.from({ length: numPlayers }).map((_, i) => {
          const ci = picks[i] % CHARACTERS.length
          const char = CHARACTERS[ci]
          const pSize = numPlayers <= 2 ? 220 : numPlayers === 3 ? 160 : 130
          const isSelected = currentPlayer === i
          return (
            <div key={i} className={`ps4-player-card${isSelected ? ' ps4-player-card--selected' : ''}`} style={{ borderColor: `${char.colors.shirt}35` }}>
              <div className="ps4-player-badge">P{i + 1}</div>

              {/* Sélecteur de personnage */}
              <div className="ps4-char-row">
                <button className="ps4-arrow" onClick={() => cyclePick(i, -1)}>‹</button>

                <div style={{ position: 'relative' }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(ellipse at 50% 110%, ${char.colors.shirt}40 0%, transparent 65%)`,
                    pointerEvents: 'none',
                  }} />
                  <CharPortrait3D key={`${i}-av${char.avatar ?? 1}`} char={char} size={pSize} modelPath={char.avatar === 2 ? '/modelAvatar2.glb' : '/modeleAvatar.glb'} />
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
          )
        })}
      </div>

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
