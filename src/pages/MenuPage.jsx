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
  const [camModal, setCamModal] = useState(false)   // modal d'activation webcam

  // Ouvre la modal d'instructions et lance l'activation de la webcam.
  const startCam = () => { setCamModal(true); enableCam() }

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
      : { key: 'cam', label: cam === 'loading' ? 'Chargement…' : 'Activer la webcam (obligatoire)', hint: 'Joue avec ton corps', action: startCam, disabled: cam === 'loading' },
    ...(mobile ? [{ key: 'lb', label: 'Classement', hint: 'Top 10 des joueurs', action: () => setShowLb(true) }] : []),
    { key: 'quit', label: 'Quitter', hint: 'Retour à la sélection des jeux', action: () => navigate('/') },
  ]

  const selRef = useRef(sel)
  selRef.current = sel
  const itemsRef = useRef(items)
  itemsRef.current = items
  const showLbRef = useRef(showLb)
  showLbRef.current = showLb
  const camModalRef = useRef(camModal)
  camModalRef.current = camModal
  const camRef = useRef(cam)
  camRef.current = cam

  useEffect(() => {
    const onKey = (e) => {
      // Modal webcam : Entrée/Échap ferme (une fois prête ou en erreur).
      if (camModalRef.current) {
        if (e.key === 'Escape') { e.preventDefault(); setCamModal(false) }
        else if (e.key === 'Enter' && camRef.current !== 'loading') { e.preventDefault(); setCamModal(false) }
        return
      }
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

      {camModal && (
        <div className="cammodal">
          <div className="cammodal__box">
            {cam === 'error' ? (
              <>
                <div className="cammodal__icon">⚠️</div>
                <h2 className="cammodal__title">Caméra indisponible</h2>
                <p className="cammodal__msg">{camMsg || "Impossible d'accéder à la webcam."}</p>
                <div className="cammodal__actions">
                  <button className="cammodal__btn" onClick={enableCam}>Réessayer</button>
                  <button className="cammodal__btn cammodal__btn--ghost" onClick={() => setCamModal(false)}>Fermer</button>
                </div>
              </>
            ) : cam === 'on' ? (
              <>
                <div className="cammodal__icon">✅</div>
                <h2 className="cammodal__title">Webcam prête !</h2>
                <p className="cammodal__instr">
                  Recule pour que <b>tout ton corps soit visible, des pieds à la tête</b>.
                  Pendant toute la partie, <b>tes pieds doivent rester visibles</b> dans la caméra — le jeu suit tes jambes.
                </p>
                <button className="cammodal__btn" onClick={() => setCamModal(false)}>C'est parti !</button>
              </>
            ) : (
              <>
                <div className="cammodal__spinner" />
                <h2 className="cammodal__title">Activation de la webcam…</h2>
                <p className="cammodal__instr">
                  Prépare-toi : place-toi de façon à voir <b>tout ton corps jusqu'aux pieds</b> dans la caméra.
                </p>
                {camMsg && <p className="cammodal__msg">{camMsg}</p>}
              </>
            )}
          </div>
        </div>
      )}

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
