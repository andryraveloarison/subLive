import { useEffect, useRef, useState } from 'react'
import { Game } from './engine.js'
import { PoseController } from './webcam.js'

export default function App() {
  const canvasRef = useRef(null)
  const gameRef = useRef(null)
  const videoRef = useRef(null)
  const poseRef = useRef(null)
  const [state, setState] = useState('menu')      // menu | playing | over
  const [score, setScore] = useState(0)
  const [coins, setCoins] = useState(0)
  const [best, setBest] = useState(() => Number(localStorage.getItem('sublive_best') || 0))
  const [power, setPower] = useState({ magnet: false, boots: false })
  const [cam, setCam] = useState('off')           // off | loading | on | error
  const [camMsg, setCamMsg] = useState('')

  useEffect(() => {
    const game = new Game(canvasRef.current, {
      onScore: (s, c) => { setScore(s); setCoins(c) },
      onPower: (m, b) => setPower({ magnet: m > 0, boots: b > 0 }),
      onGameOver: (s) => {
        setState('over')
        if (s > best) {
          setBest(s)
          localStorage.setItem('sublive_best', String(s))
        }
      },
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

  const play = () => {
    setScore(0); setCoins(0)
    setState('playing')
    gameRef.current.start()
  }

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

          <button className="btn" onClick={play}>Jouer ▶</button>
          {best > 0 && <p className="final">Meilleur score : {best.toLocaleString('fr-FR')}</p>}
        </div>
      )}

      {state === 'over' && (
        <div className="overlay">
          <h2>Perdu !</h2>
          <p className="final">Score : {score.toLocaleString('fr-FR')} · 🪙 {coins}</p>
          <p className="final">Meilleur : {best.toLocaleString('fr-FR')}</p>
          <button className="btn" onClick={play}>Rejouer ↻</button>
        </div>
      )}
    </div>
  )
}
