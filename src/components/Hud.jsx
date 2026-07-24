// Affichage tête haute pendant la partie : score, pièces, power-ups, tour du match.
export default function Hud({ score, coins, power, isMatch, playerName, round }) {
  return (
    <div className="hud">
      <div className="pill score">{score.toLocaleString('fr-FR')}</div>
      <div className="pill coins">🪙 {coins}</div>
      {power.magnet && <div className="pill power">🧲</div>}
      {power.boots && <div className="pill power">👢</div>}
      {isMatch && <div className="pill power">👤 {playerName} · M{round}</div>}
    </div>
  )
}
