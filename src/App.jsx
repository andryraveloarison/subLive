import { useEffect, useRef, useState } from 'react'
import { Game } from './engine.js'
import { PoseController } from './webcam.js'

// Personnages sélectionnables (apparence = couleurs passées au moteur).
const CHARACTERS = [
  { id: 'lila', name: 'Lila', colors: { skin: '#d9a06b', shirt: '#a855f7', pants: '#4c1d95', cap: '#fde047' } },
  { id: 'sam', name: 'Sam', colors: { skin: '#c68642', shirt: '#22c55e', pants: '#14532d', cap: '#ffffff' } },
]

export default function App() {
  const canvasRef = useRef(null)
  const gameRef = useRef(null)
  const videoRef = useRef(null)
  const poseRef = useRef(null)
  const endRunRef = useRef(null)

  const [state, setState] = useState('menu')       // menu | setup | ready | playing | ranking | over
  const [score, setScore] = useState(0)
  const [coins, setCoins] = useState(0)
  const [best, setBest] = useState(() => Number(localStorage.getItem('sublive_best') || 0))
  const [power, setPower] = useState({ magnet: false, boots: false })
  const [cam, setCam] = useState('off')            // off | loading | on | error
  const [camMsg, setCamMsg] = useState('')

  // match / personnages
  const [isMatch, setIsMatch] = useState(false)
  const [numPlayers, setNumPlayers] = useState(1)
  const [picks, setPicks] = useState([0, 1, 0, 1]) // index de personnage par joueur
  const [names, setNames] = useState(['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4'])
  const [turnIdx, setTurnIdx] = useState(0)
  const [round, setRound] = useState(1)
  const [totals, setTotals] = useState([0])        // total de PIÈCES cumulé par joueur
  const [lastCoins, setLastCoins] = useState([null]) // pièces de la dernière manche

  useEffect(() => {
    const game = new Game(canvasRef.current, {
      onScore: (s, c) => { setScore(s); setCoins(c) },
      onPower: (m, b) => setPower({ magnet: m > 0, boots: b > 0 }),
      onGameOver: (s, c) => endRunRef.current?.(s, c),
    })
    gameRef.current = game

    const onKey = (e) => {
      const g = gameRef.current
      if (!g) return
      switch (e.key) {
        case 'ArrowLeft': case 'a': case 'q': g.moveLeft(); break
        case 'ArrowRight': case 'd': g.moveRight(); break
        case 'ArrowUp': case 'w': case 'z': case ' ': e.preventDefault(); g.jump(); break
        case 'ArrowDown': case 's': g.roll(); break
        default: return
      }
    }
    window.addEventListener('keydown', onKey)

    // gestes tactiles
    let sx = 0, sy = 0, st = 0
    const cv = canvasRef.current
    const onStart = (e) => { const t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; st = Date.now() }
    const onEnd = (e) => {
      const g = gameRef.current; if (!g) return
      const t = e.changedTouches[0]
      const dx = t.clientX - sx, dy = t.clientY - sy
      if (Math.abs(dx) < 25 && Math.abs(dy) < 25 && Date.now() - st < 250) { g.jump(); return }
      if (Math.abs(dx) > Math.abs(dy)) { dx > 0 ? g.moveRight() : g.moveLeft() }
      else { dy > 0 ? g.roll() : g.jump() }
    }
    cv.addEventListener('touchstart', onStart, { passive: true })
    cv.addEventListener('touchend', onEnd, { passive: true })

    return () => {
      window.removeEventListener('keydown', onKey)
      cv.removeEventListener('touchstart', onStart)
      cv.removeEventListener('touchend', onEnd)
      poseRef.current?.stop()
      game.destroy()
    }
  }, []) // eslint-disable-line

  // Fin d'un run : mise à jour du solo (meilleur score) ou du match (tours + classement).
  // Réassigné à chaque rendu -> capture toujours l'état courant (pas de closure périmée).
  endRunRef.current = (finalScore, finalCoins) => {
    if (!isMatch) {
      if (finalScore > best) { setBest(finalScore); localStorage.setItem('sublive_best', String(finalScore)) }
      setState('over')
      return
    }
    // classement basé sur le total de PIÈCES ramassées
    const nt = totals.slice(); nt[turnIdx] = (nt[turnIdx] || 0) + finalCoins
    const nl = lastCoins.slice(); nl[turnIdx] = finalCoins
    setTotals(nt); setLastCoins(nl)
    if (turnIdx + 1 < numPlayers) { setTurnIdx(turnIdx + 1); setState('ready') }
    else { setState('ranking') }                   // manche terminée -> classement
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
    try {
      await pose.start()
      setCam('on')
    } catch (err) {
      console.error(err)
      setCam('error')
      setCamMsg(err?.message || 'Caméra indisponible')
    }
  }

  const goSetup = (match) => {
    setIsMatch(match)
    setNumPlayers(match ? 3 : 1)
    setState('setup')
  }

  const startTurn = (idx) => {
    const ch = CHARACTERS[picks[idx]] || CHARACTERS[0]
    gameRef.current.setCharacter(ch.colors)
    setScore(0); setCoins(0); setPower({ magnet: false, boots: false })
    setState('playing')
    gameRef.current.start()
  }

  const beginMatch = () => {
    setTotals(Array(numPlayers).fill(0))
    setLastCoins(Array(numPlayers).fill(null))
    setTurnIdx(0); setRound(1)
    if (isMatch) setState('ready')
    else startTurn(0)
  }

  const nextRound = () => {
    setLastCoins(Array(numPlayers).fill(null))
    setTurnIdx(0); setRound(round + 1)
    setState('ready')
  }

  const pName = (i) => names[i] || `Joueur ${i + 1}`
  const ranking = totals.map((t, i) => ({ i, t })).sort((a, b) => b.t - a.t)

  const CharSwatch = ({ ci, selected, onClick }) => (
    <button
      onClick={onClick}
      title={CHARACTERS[ci].name}
      style={{
        width: 46, height: 46, borderRadius: 12, cursor: 'pointer',
        background: CHARACTERS[ci].colors.shirt,
        border: selected ? '3px solid #fff' : '3px solid transparent',
        boxShadow: selected ? '0 0 0 2px #22d3ee' : 'none',
        display: 'grid', placeItems: 'center', padding: 0,
      }}
    >
      <span style={{
        width: 16, height: 16, borderRadius: '50%',
        background: CHARACTERS[ci].colors.cap, border: '2px solid rgba(0,0,0,.25)',
      }} />
    </button>
  )

  return (
    <div className="app">
      <canvas ref={canvasRef} />

      {/* aperçu webcam (miroir) */}
      <div className={`cam ${cam === 'on' ? 'live' : ''}`}>
        <video ref={videoRef} playsInline muted />
        {cam === 'on' && <span className="cam-badge">● LIVE</span>}
      </div>

      {state === 'playing' && (
        <div className="hud">
          <div className="pill score">{score.toLocaleString('fr-FR')}</div>
          <div className="pill coins">🪙 {coins}</div>
          {power.magnet && <div className="pill power">🧲</div>}
          {power.boots && <div className="pill power">👢</div>}
          {isMatch && <div className="pill power">👤 {pName(turnIdx)} · M{round}</div>}
        </div>
      )}

      {state === 'menu' && (
        <div className="overlay">
          <h1>subLive</h1>
          <p>Cours le plus loin possible, esquive les obstacles et ramasse les pièces. La vitesse augmente sans cesse !</p>

          <div className="cam-ctrl">
            <button className="btn ghost" onClick={enableCam} disabled={cam === 'on' || cam === 'loading'}>
              {cam === 'on' ? '📷 Caméra active' : cam === 'loading' ? '⏳ …' : '📷 Activer la webcam'}
            </button>
            {camMsg && <span className="cam-msg">{camMsg}</span>}
          </div>

          <div className="keys">
            {cam === 'on' ? (
              <span>🕺 <b>Saute</b> pour sauter · <b>baisse-toi</b> pour glisser · <b>déplace-toi</b> à gauche/droite</span>
            ) : (
              <span><kbd>←</kbd><kbd>→</kbd> voie · <kbd>↑</kbd>/<kbd>Espace</kbd> sauter · <kbd>↓</kbd> glisser</span>
            )}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn" onClick={() => goSetup(false)}>Solo ▶</button>
            <button className="btn ghost" onClick={() => goSetup(true)}>Match 👥</button>
          </div>
          {best > 0 && <p className="final">Meilleur score : {best.toLocaleString('fr-FR')}</p>}
        </div>
      )}

      {state === 'setup' && (
        <div className="overlay">
          <h2>{isMatch ? 'Match — joueurs & personnages' : 'Choisis ton personnage'}</h2>

          {isMatch && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center' }}>
              <span>Joueurs :</span>
              {[2, 3, 4].map((n) => (
                <button key={n} className={`btn ${numPlayers === n ? '' : 'ghost'}`}
                  style={{ padding: '6px 14px' }} onClick={() => setNumPlayers(n)}>{n}</button>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '14px 0' }}>
            {Array.from({ length: numPlayers }).map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
                <input
                  value={names[i] || ''}
                  maxLength={14}
                  placeholder={`Joueur ${i + 1}`}
                  onChange={(e) => setNames((n) => { const c = n.slice(); c[i] = e.target.value; return c })}
                  style={{
                    width: 120, padding: '6px 10px', borderRadius: 8, textAlign: 'right',
                    border: '1px solid rgba(255,255,255,.25)', background: 'rgba(255,255,255,.08)',
                    color: '#fff', font: 'inherit',
                  }}
                />
                {CHARACTERS.map((_, ci) => (
                  <CharSwatch key={ci} ci={ci} selected={picks[i] === ci}
                    onClick={() => setPicks((p) => { const n = p.slice(); n[i] = ci; return n })} />
                ))}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn" onClick={beginMatch}>{isMatch ? 'Commencer le match ▶' : 'Jouer ▶'}</button>
            <button className="btn ghost" onClick={() => setState('menu')}>← Menu</button>
          </div>
        </div>
      )}

      {state === 'ready' && (
        <div className="overlay">
          <h2>Manche {round}</h2>
          <p className="final">Au tour de <b>{pName(turnIdx)}</b></p>
          <div style={{ display: 'grid', placeItems: 'center', margin: '6px 0 14px' }}>
            <span style={{
              width: 60, height: 60, borderRadius: 16, background: CHARACTERS[picks[turnIdx]].colors.shirt,
              display: 'grid', placeItems: 'center',
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: CHARACTERS[picks[turnIdx]].colors.cap, border: '2px solid rgba(0,0,0,.25)',
              }} />
            </span>
          </div>
          <button className="btn" onClick={() => startTurn(turnIdx)}>Jouer ▶</button>
        </div>
      )}

      {state === 'ranking' && (
        <div className="overlay">
          <h2>Classement — fin de la manche {round}</h2>
          <table style={{ borderCollapse: 'collapse', margin: '8px auto 16px', minWidth: 280 }}>
            <thead>
              <tr style={{ opacity: 0.7 }}>
                <th style={{ padding: '4px 10px', textAlign: 'left' }}>#</th>
                <th style={{ padding: '4px 10px', textAlign: 'left' }}>Joueur</th>
                <th style={{ padding: '4px 10px', textAlign: 'right' }}>Manche 🪙</th>
                <th style={{ padding: '4px 10px', textAlign: 'right' }}>Total 🪙</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((r, rank) => (
                <tr key={r.i} style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
                  <td style={{ padding: '6px 10px' }}>{rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : rank + 1}</td>
                  <td style={{ padding: '6px 10px' }}>{pName(r.i)}</td>
                  <td style={{ padding: '6px 10px', textAlign: 'right', opacity: 0.8 }}>
                    {lastCoins[r.i] != null ? lastCoins[r.i].toLocaleString('fr-FR') : '—'}
                  </td>
                  <td style={{ padding: '6px 10px', textAlign: 'right', fontWeight: 700 }}>{r.t.toLocaleString('fr-FR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn" onClick={nextRound}>Manche {round + 1} ▶</button>
            <button className="btn ghost" onClick={() => setState('menu')}>Terminer</button>
          </div>
        </div>
      )}

      {state === 'over' && (
        <div className="overlay">
          <h2>Perdu !</h2>
          <p className="final">Score : {score.toLocaleString('fr-FR')} · 🪙 {coins}</p>
          <p className="final">Meilleur : {best.toLocaleString('fr-FR')}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn" onClick={() => startTurn(0)}>Rejouer ↻</button>
            <button className="btn ghost" onClick={() => setState('menu')}>Menu</button>
          </div>
        </div>
      )}
    </div>
  )
}
