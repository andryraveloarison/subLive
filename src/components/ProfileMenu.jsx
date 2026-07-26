import { useEffect, useRef, useState } from 'react'
import { getDevice, setDevice } from '../lib/profile.js'

// Puce d'identité cliquable (coin haut droit) : ouvre un menu pour renommer
// l'appareil ou se déconnecter (efface le nom → retour à l'écran d'accueil).
export default function ProfileMenu({ edge }) {
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [input, setInput] = useState('')
  const [device, setDev] = useState(getDevice)
  const wrapRef = useRef(null)

  // Ferme le menu au clic à l'extérieur.
  useEffect(() => {
    if (!open) return
    const onDown = (e) => { if (!wrapRef.current?.contains(e.target)) close() }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  if (!device) return null

  const close = () => { setOpen(false); setEditing(false) }

  const startRename = () => { setInput(device); setEditing(true) }

  const saveName = () => {
    const v = input.trim()
    if (v.length < 2) return
    setDev(setDevice(v))
    close()
  }

  const logout = () => {
    setDevice('')
    window.location.reload()   // ré-affiche l'écran d'accueil (DeviceGate)
  }

  return (
    <div className={`profile${edge ? ' profile--edge' : ''}`} ref={wrapRef}>
      <button className="device-chip" onClick={() => (open ? close() : setOpen(true))}>
        👤 {device}
      </button>

      {open && (
        <div className="profile__menu">
          {editing ? (
            <div className="profile__edit">
              <input
                className="profile__input"
                value={input}
                maxLength={24}
                autoFocus
                placeholder="Nouveau nom"
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') saveName()
                  if (e.key === 'Escape') setEditing(false)
                }}
              />
              <button className="profile__save" disabled={input.trim().length < 2} onClick={saveName}>
                Enregistrer
              </button>
            </div>
          ) : (
            <>
              <button className="profile__item" onClick={startRename}>✏️ Changer le nom</button>
              <button className="profile__item profile__item--danger" onClick={logout}>🚪 Se déconnecter</button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
