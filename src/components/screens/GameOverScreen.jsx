import Leaderboard from '../Leaderboard.jsx'

// Écran de fin de partie solo : score, pièces, meilleur score, rejouer/menu/quitter.
export default function GameOverScreen({ score, coins, best, onReplay, onMenu, onQuit }) {
  return (
    <div className="overlay">
      <h2>Perdu !</h2>
      <p className="final">Score : {score.toLocaleString('fr-FR')} · 🪙 {coins}</p>
      <p className="final">Meilleur : {best.toLocaleString('fr-FR')}</p>
      <Leaderboard limit={8} />
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button className="btn" onClick={onReplay}>Rejouer ↻</button>
        <button className="btn ghost" onClick={onMenu}>Menu</button>
        <button className="btn ghost" onClick={onQuit}>Quitter</button>
      </div>
    </div>
  )
}
