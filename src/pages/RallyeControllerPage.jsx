import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { createController } from '../net/rallyeNet.js'

// Disposition par défaut des boutons (position + taille en % de l'écran de jeu)
const DEFAULT_LAYOUT = {
  left:  { x: 4,  y: 50, w: 20, h: 42 },
  right: { x: 26, y: 50, w: 20, h: 42 },
  brake: { x: 55, y: 14, w: 18, h: 30 },
  gas:   { x: 75, y: 42, w: 21, h: 52 },
  fireF: { x: 49, y: 50, w: 22, h: 21 },
  fireB: { x: 49, y: 73, w: 22, h: 21 },
}
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

function loadLayout() {
  try {
    const saved = JSON.parse(localStorage.getItem('rallye.layout') || '{}')
    const out = {}
    for (const k of Object.keys(DEFAULT_LAYOUT)) out[k] = { ...DEFAULT_LAYOUT[k], ...(saved[k] || {}) }
    return out
  } catch (_) { return { ...DEFAULT_LAYOUT } }
}

export default function RallyeControllerPage() {
  const { code: codeParam } = useParams()
  const navigate = useNavigate()

  const [codeInput, setCodeInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [status,    setStatus]    = useState('form') // form|connecting|connected|error|full|closed
  const [me,        setMe]        = useState({ color: '#888', name: '', num: 0 })
  const [phase,     setPhase]     = useState('lobby')
  const [hud,       setHud]       = useState({ pos: 0, lap: 1, speed: 0, boost: false, total: 0 })
  const [result,    setResult]    = useState(null)

  // Réglages manette (mémorisés)
  const [tilt,         setTilt]         = useState(() => localStorage.getItem('rallye.tilt') === '1')
  const [layout,       setLayout]       = useState(loadLayout)
  const [showSettings, setShowSettings] = useState(false)
  const [editMode,     setEditMode]     = useState(false)
  useEffect(() => { localStorage.setItem('rallye.tilt', tilt ? '1' : '0') }, [tilt])
  useEffect(() => { localStorage.setItem('rallye.layout', JSON.stringify(layout)) }, [layout])

  const ctrlRef    = useRef(null)
  const inputRef   = useRef({ steer: 0, gas: false, brake: false, fireF: false, fireB: false })
  const padRef     = useRef(null)
  const dragRef    = useRef(null)
  const tiltBase   = useRef(null)   // angle neutre (calibrage)

  const connect = (code, name) => {
    setStatus('connecting')
    const ctrl = createController(code, name, {
      onOpen:    () => setStatus('connected'),
      onClose:   () => setStatus('closed'),
      onError:   ()  => setStatus('error'),
      onMessage: (msg) => {
        if (!msg) return
        switch (msg.type) {
          case 'welcome': setMe({ color: msg.color, name: msg.name, num: msg.num }); break
          case 'full':    setStatus('full'); break
          case 'phase':   setPhase(msg.phase); if (msg.phase !== 'finished') setResult(null); break
          case 'hud':     setHud({ pos: msg.pos, lap: msg.lap, speed: msg.speed, boost: msg.boost, total: msg.total }); break
          case 'result':  setResult({ pos: msg.pos, points: msg.points, manche: msg.manche }); setPhase('finished'); break
          case 'buzz':    navigator.vibrate?.(60); break
          default: break
        }
      },
    })
    ctrlRef.current = ctrl
  }

  useEffect(() => () => ctrlRef.current?.destroy?.(), [])

  const doJoin = () => {
    const code = (codeParam || codeInput).trim()
    const name = nameInput.trim()
    if (code.length < 3 || !name) return
    connect(code, name)
  }

  // Envoi de l'input uniquement quand il change
  const sendInput = () => ctrlRef.current?.send?.({ ...inputRef.current })
  const setSteer = (v) => { if (inputRef.current.steer !== v) { inputRef.current.steer = v; sendInput() } }
  const setGas   = (v) => { if (inputRef.current.gas !== v)   { inputRef.current.gas   = v; sendInput() } }
  const setBrake = (v) => { if (inputRef.current.brake !== v) { inputRef.current.brake = v; sendInput() } }
  const setFireF = (v) => { if (inputRef.current.fireF !== v) { inputRef.current.fireF = v; sendInput() } }
  const setFireB = (v) => { if (inputRef.current.fireB !== v) { inputRef.current.fireB = v; sendInput() } }

  const hold = (setter, val, rest = 0) => ({
    onPointerDown: (e) => { e.preventDefault(); e.currentTarget.setPointerCapture?.(e.pointerId); setter(val) },
    onPointerUp:   (e) => { e.preventDefault(); setter(rest) },
    onPointerCancel: () => setter(rest),
    onPointerLeave:  () => setter(rest),
  })

  // ── Direction par inclinaison du téléphone (gyroscope) ──
  // gamma (portrait) / beta (paysage) → valeur de direction analogique -1..1
  useEffect(() => {
    if (!tilt) return
    tiltBase.current = null
    const handler = (e) => {
      const landscape = window.innerWidth >= window.innerHeight
      let a = landscape ? e.beta : e.gamma
      if (a == null) return
      if (landscape && screen.orientation?.angle === 270) a = -a
      if (tiltBase.current == null) tiltBase.current = a   // calibrage : position tenue à l'activation
      const d = a - tiltBase.current
      const dead = 4, max = 26
      let s = 0
      if (Math.abs(d) > dead) s = clamp((Math.abs(d) - dead) / (max - dead), 0, 1) * Math.sign(d)
      setSteer(Math.round(s * 10) / 10)   // pas de 0,1 pour limiter les envois
    }
    window.addEventListener('deviceorientation', handler)
    return () => { window.removeEventListener('deviceorientation', handler); setSteer(0) }
  }, [tilt]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggleTilt = async () => {
    if (tilt) { setTilt(false); return }
    const DOE = window.DeviceOrientationEvent
    // iOS ≥13 exige une autorisation, déclenchée par ce geste utilisateur
    if (DOE && typeof DOE.requestPermission === 'function') {
      try { if (await DOE.requestPermission() !== 'granted') return } catch (_) { return }
    }
    setTilt(true)
  }

  // ── Édition de la disposition : déplacer / redimensionner chaque bouton ──
  // Convertit un point écran en % dans le repère de la zone de jeu
  const toLocalPct = (cx, cy) => {
    const r = padRef.current.getBoundingClientRect()
    return { x: ((cx - r.left) / r.width) * 100, y: ((cy - r.top) / r.height) * 100 }
  }
  const beginDrag = (id, mode) => (e) => {
    e.preventDefault(); e.stopPropagation()
    padRef.current?.setPointerCapture?.(e.pointerId)
    dragRef.current = { id, mode, start: toLocalPct(e.clientX, e.clientY), orig: { ...layout[id] } }
  }
  const onPadMove = (e) => {
    const d = dragRef.current
    if (!d) return
    const p = toLocalPct(e.clientX, e.clientY)
    const dx = p.x - d.start.x, dy = p.y - d.start.y
    setLayout(l => {
      const b = { ...l[d.id] }
      if (d.mode === 'move') {
        b.x = clamp(d.orig.x + dx, 0, 100 - b.w)
        b.y = clamp(d.orig.y + dy, 0, 100 - b.h)
      } else {
        b.w = clamp(d.orig.w + dx, 8, 70)
        b.h = clamp(d.orig.h + dy, 8, 88)
      }
      return { ...l, [d.id]: b }
    })
  }
  const onPadUp = () => { dragRef.current = null }

  const BUTTONS = [
    { id: 'left',  cls: 'rctrl__b--dir',   label: '◀',     act: () => hold(setSteer, -1) },
    { id: 'right', cls: 'rctrl__b--dir',   label: '▶',     act: () => hold(setSteer,  1) },
    { id: 'brake', cls: 'rctrl__b--brake', label: 'FREIN', act: () => hold(setBrake, true, false) },
    { id: 'gas',   cls: 'rctrl__b--gas',   label: 'GAZ',   act: () => hold(setGas,   true, false) },
    { id: 'fireF', cls: 'rctrl__b--fire',  label: '🎯 AVANT',  act: () => hold(setFireF, true, false) },
    { id: 'fireB', cls: 'rctrl__b--fire',  label: '🎯 ARRIÈRE', act: () => hold(setFireB, true, false) },
  ]

  // ── Écran de saisie (nom + code) ──
  if (status === 'form') {
    return (
      <div className="rctrl rctrl--form">
        <h1 className="rctrl__logo">🏎️ 2Rally</h1>
        <p className="rctrl__hint">Entre ton nom {codeParam ? '' : 'et le code affiché sur l\'écran'}</p>
        <input
          className="rctrl__input rctrl__input--name"
          value={nameInput}
          onChange={e => setNameInput(e.target.value.slice(0, 12))}
          placeholder="TON NOM"
          autoCorrect="off"
        />
        {!codeParam && (
          <input
            className="rctrl__input"
            value={codeInput}
            onChange={e => setCodeInput(e.target.value.toUpperCase().slice(0, 6))}
            placeholder="CODE"
            autoCapitalize="characters"
            autoCorrect="off"
          />
        )}
        <button
          className="rctrl__connect"
          disabled={!nameInput.trim() || (!codeParam && codeInput.length < 3)}
          onClick={doJoin}
        >
          REJOINDRE
        </button>
        <button className="rctrl__leave" onClick={() => navigate('/')}>Retour</button>
      </div>
    )
  }

  // ── États de connexion ──
  if (status !== 'connected') {
    const msg = {
      connecting: 'Connexion à la course…',
      error:      'Connexion impossible. Vérifie le code et le réseau.',
      full:       'La course est complète.',
      closed:     'Déconnecté de la course.',
    }[status]
    return (
      <div className="rctrl rctrl--form">
        <h1 className="rctrl__logo">🏎️ 2Rally</h1>
        <p className="rctrl__hint">{msg}</p>
        <button className="rctrl__connect" onClick={() => setStatus('form')}>Réessayer</button>
        <button className="rctrl__leave" onClick={() => navigate('/')}>Retour</button>
      </div>
    )
  }

  // ── Manette connectée ──
  const visibleButtons = tilt ? BUTTONS.filter(b => b.id !== 'left' && b.id !== 'right') : BUTTONS
  return (
    <div className={`rctrl${editMode ? ' rctrl--edit' : ''}`} style={{ '--me': me.color }}>
      <div className="rctrl__stage">
        <div className="rctrl__top">
          <span className="rctrl__badge" style={{ background: me.color }}>{me.name || '…'}</span>
          {phase === 'racing' && !editMode && (
            <>
              <span className="rctrl__stat"><b>{hud.pos}</b><i>/{hud.total}</i></span>
              <span className="rctrl__stat">T{hud.lap}</span>
              <span className={`rctrl__stat rctrl__stat--spd${hud.boost ? ' rctrl__stat--boost' : ''}`}>{hud.speed}<i>km/h</i></span>
            </>
          )}
          {!editMode && <button className="rctrl__gear" onClick={() => setShowSettings(s => !s)} aria-label="Réglages">⚙</button>}
        </div>

        {phase !== 'racing' && !editMode && (
          <div className="rctrl__banner">
            {phase === 'lobby'     && 'Prêt ! En attente du départ…'}
            {phase === 'countdown' && 'Ça démarre !'}
            {phase === 'finished'  && (result
              ? `Manche ${result.manche ?? ''} — ${result.pos}${result.pos === 1 ? 'er' : 'e'} 🏁${result.points != null ? ` · ${result.points} pts au total` : ''}`
              : 'Course terminée')}
          </div>
        )}

        <div
          className="rctrl__pad" ref={padRef}
          onPointerMove={editMode ? onPadMove : undefined}
          onPointerUp={editMode ? onPadUp : undefined}
          onPointerCancel={editMode ? onPadUp : undefined}
        >
          {tilt && !editMode && <div className="rctrl__tilt-hint">↔ Incline le téléphone pour tourner</div>}
          {(editMode ? BUTTONS : visibleButtons).map(b => {
            const rect = layout[b.id]
            const style = { left: `${rect.x}%`, top: `${rect.y}%`, width: `${rect.w}%`, height: `${rect.h}%` }
            return (
              <button
                key={b.id}
                className={`rctrl__b ${b.cls}`}
                style={style}
                {...(editMode ? { onPointerDown: beginDrag(b.id, 'move') } : b.act())}
              >
                {b.label}
                {editMode && (
                  <span className="rctrl__resize" onPointerDown={beginDrag(b.id, 'resize')}>⤢</span>
                )}
              </button>
            )
          })}
        </div>

        {editMode && (
          <div className="rctrl__editbar">
            <span className="rctrl__edit-hint">Glisse un bouton pour le déplacer · coin ⤢ pour redimensionner</span>
            <button className="rctrl__edit-reset" onClick={() => setLayout({ ...DEFAULT_LAYOUT })}>Réinitialiser</button>
            <button className="rctrl__edit-done" onClick={() => setEditMode(false)}>Terminé</button>
          </div>
        )}

        {showSettings && (
          <div className="rctrl__settings">
            <div className="rctrl__set-panel">
              <div className="rctrl__set-title">Réglages</div>

              <button className="rctrl__set-btn" onClick={() => { setShowSettings(false); setEditMode(true) }}>
                ✋ Personnaliser les boutons
              </button>

              <label className="rctrl__set-row">
                <span>Diriger en inclinant le téléphone</span>
                <button
                  className={`rctrl__switch${tilt ? ' rctrl__switch--on' : ''}`}
                  role="switch" aria-checked={tilt}
                  onClick={toggleTilt}
                >
                  <span className="rctrl__switch-knob" />
                </button>
              </label>

              <button className="rctrl__set-close" onClick={() => setShowSettings(false)}>Fermer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
