import Leaderboard from '../Leaderboard.jsx'

// Écran de fin de partie solo : score, pièces, meilleur score, rejouer/menu/quitter.
export default function GameOverScreen({ score, coins, best, scoreVersion, autoRestart, autoLeft, onToggleAuto, onReplay, onMenu, onQuit }) {
  return (
    <div className="overlay">
      <h2>Perdu !</h2>
      <p className="final">Score : {score.toLocaleString('fr-FR')} · 🪙 {coins}</p>
      <p className="final">Meilleur : 🪙 {best.toLocaleString('fr-FR')}</p>
      <Leaderboard limit={10} refreshKey={scoreVersion} />
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn" onClick={onReplay}>
          {autoRestart && autoLeft > 0 ? `Rejouer dans ${autoLeft}s ↻` : 'Rejouer ↻'}
        </button>
        <button className={`btn ghost${autoRestart ? ' on' : ''}`} onClick={onToggleAuto}>
          🔁 Relance auto : {autoRestart ? 'ON' : 'OFF'}
        </button>
        <button className="btn ghost" onClick={onMenu}>Menu</button>
        <button className="btn ghost" onClick={onQuit}>Quitter</button>
      </div>
    </div>
  )
}
