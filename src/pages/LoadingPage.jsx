import { useEffect, useState } from 'react'
import { useGameCtx } from '../context/GameContext.js'

// Précharge les modèles course/saut (~150 Mo) avant de lancer la partie.
export default function LoadingPage() {
  const { preloadModels, launchPlay } = useGameCtx()
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let cancelled = false
    const started = performance.now()

    preloadModels((p) => { if (!cancelled) setPct(Math.round(p * 100)) })
      .then(() => {
        if (cancelled) return
        // laisse la transition d'entrée se terminer (min ~700 ms d'affichage)
        const wait = Math.max(0, 700 - (performance.now() - started))
        setTimeout(() => { if (!cancelled) launchPlay() }, wait)
      })
      .catch((err) => console.error('Préchargement des modèles échoué', err))

    return () => { cancelled = true }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="loading">
      <div className="loading__logo">
        <img src="/logo.png" alt="Dashikara" />
      </div>
      <div className="loading__bar">
        <div className="loading__fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="loading__pct">{pct}%</div>
      <div className="loading__hint">Chargement du personnage…</div>
    </div>
  )
}
