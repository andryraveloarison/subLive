// Classement de fin de manche (trié par total de pièces).
export default function RankingScreen({ round, ranking, pName, lastCoins, onNext, onEnd, onQuit }) {
  return (
    <div className="overlay">
      <h2>Classement — fin de la manche {round}</h2>
      <table style={{ borderCollapse: 'collapse', margin: '14px auto 22px', minWidth: 440, fontSize: '1.5rem' }}>
        <thead>
          <tr style={{ opacity: 0.7 }}>
            <th style={{ padding: '8px 18px', textAlign: 'left' }}>#</th>
            <th style={{ padding: '8px 18px', textAlign: 'left' }}>Joueur</th>
            <th style={{ padding: '8px 18px', textAlign: 'right' }}>Manche 🪙</th>
            <th style={{ padding: '8px 18px', textAlign: 'right' }}>Total 🪙</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((r, rank) => (
            <tr key={r.i} style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
              <td style={{ padding: '12px 18px', fontSize: '1.7rem' }}>{rank === 0 ? '🥇' : rank === 1 ? '🥈' : rank === 2 ? '🥉' : rank + 1}</td>
              <td style={{ padding: '12px 18px' }}>{pName(r.i)}</td>
              <td style={{ padding: '12px 18px', textAlign: 'right', opacity: 0.8 }}>
                {lastCoins[r.i] != null ? lastCoins[r.i].toLocaleString('fr-FR') : '—'}
              </td>
              <td style={{ padding: '12px 18px', textAlign: 'right', fontWeight: 700 }}>{r.t.toLocaleString('fr-FR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button className="btn" onClick={onNext}>Manche {round + 1} ▶</button>
        <button className="btn ghost" onClick={onEnd}>Terminer</button>
        <button className="btn ghost" onClick={onQuit}>Quitter</button>
      </div>
    </div>
  )
}
