import { useEffect, useState } from 'react'
import { fetchLeaderboard, fetchPlayerCount, dbReady } from '../lib/supabase.js'

// Tronque le nom de l'appareil aux 12 premiers caractères (+ … si coupé).
const trimName = (s = '') => (s.length > 12 ? s.slice(0, 12) + '…' : s)

// Classement Dashikara (meilleur score) — lit Supabase. Affiche « Pseudo (appareil) ».
// Sans prop `title`, le titre affiche le nombre total de joueurs classés.
export default function Leaderboard({ limit = 10, title, refreshKey }) {
  const [rows, setRows] = useState(null)
  const [count, setCount] = useState(null)

  useEffect(() => {
    let on = true
    setRows(null)
    fetchLeaderboard(limit).then(r => { if (on) setRows(r) })
    fetchPlayerCount().then(c => { if (on) setCount(c) })
    return () => { on = false }
  }, [limit, refreshKey])

  if (!dbReady) return null

  const heading = title ?? (count == null ? 'Classement' : `Classement / ${count} joueur${count > 1 ? 's' : ''}`)

  return (
    <div className="lb">
      <div className="lb__title">{heading}</div>
      {rows == null ? (
        <div className="lb__empty">Chargement…</div>
      ) : rows.length === 0 ? (
        <div className="lb__empty">Aucun score pour l'instant</div>
      ) : (
        rows.map((r, i) => (
          <div key={r.pseudo + '·' + r.device} className={`lb__row${i === 0 ? ' lb__row--lead' : ''}`}>
            <span className="lb__pos">{i + 1}</span>
            <span className="lb__name">{i === 0 && <span className="lb__crown">👑</span>}{trimName(r.device)} <i>({r.pseudo})</i></span>
            <span className="lb__score">{Number(r.best_score).toLocaleString('fr-FR')}</span>
          </div>
        ))
      )}
    </div>
  )
}
