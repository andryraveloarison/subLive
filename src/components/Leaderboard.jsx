import { useEffect, useState } from 'react'
import { fetchLeaderboard, dbReady } from '../lib/supabase.js'

// Classement Dashikara (meilleur score) — lit Supabase. Affiche « Pseudo (appareil) ».
export default function Leaderboard({ limit = 10, title = 'CLASSEMENT · MEILLEUR SCORE', refreshKey }) {
  const [rows, setRows] = useState(null)

  useEffect(() => {
    let on = true
    setRows(null)
    fetchLeaderboard(limit).then(r => { if (on) setRows(r) })
    return () => { on = false }
  }, [limit, refreshKey])

  if (!dbReady) return null

  return (
    <div className="lb">
      <div className="lb__title">{title}</div>
      {rows == null ? (
        <div className="lb__empty">Chargement…</div>
      ) : rows.length === 0 ? (
        <div className="lb__empty">Aucun score pour l'instant</div>
      ) : (
        rows.map((r, i) => (
          <div key={r.pseudo + '·' + r.device} className={`lb__row${i === 0 ? ' lb__row--lead' : ''}`}>
            <span className="lb__pos">{i + 1}</span>
            <span className="lb__name">{r.pseudo} <i>({r.device})</i></span>
            <span className="lb__score">{Number(r.best_score).toLocaleString('fr-FR')}</span>
          </div>
        ))
      )}
    </div>
  )
}
