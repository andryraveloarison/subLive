import { useState } from 'react'
import { getDevice, setDevice } from '../lib/profile.js'

// Au tout premier lancement : saisie OBLIGATOIRE du nom de l'appareil
// (ex. « PC Rakoto »). C'est l'étiquette affichée dans le classement à côté du
// pseudo. Tant qu'il n'est pas renseigné, rien d'autre ne s'affiche.
export default function DeviceGate({ children }) {
  const [device, setDev] = useState(getDevice)
  const [input, setInput] = useState('')

  if (device) return children

  const save = () => {
    const v = input.trim()
    if (v.length < 2) return
    setDev(setDevice(v))
  }

  return (
    <div className="devgate">
      <div className="devgate__box">
        <div className="devgate__logo">🎮</div>
        <h1 className="devgate__title">Bienvenue sur Kilalao</h1>
        <p className="devgate__sub">Donne un nom à cet appareil — il apparaîtra dans le classement à côté de ton pseudo.</p>
        <input
          className="devgate__input"
          value={input}
          maxLength={24}
          placeholder="ex. PC Rakoto"
          autoFocus
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && save()}
        />
        <button className="devgate__btn" disabled={input.trim().length < 2} onClick={save}>
          Continuer
        </button>
      </div>
    </div>
  )
}
