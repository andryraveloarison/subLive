import CharPortrait3D from '../CharPortrait3D.jsx'

// Écran d'attente entre les tours d'un match : annonce le joueur et son personnage.
export default function ReadyScreen({ round, playerName, char, onPlay }) {
  const modelPath = char?.avatar === 2 ? '/modelAvatar2.glb' : '/modeleAvatar.glb'
  return (
    <div className="overlay">
      <h2>Manche {round}</h2>
      <p className="final">Au tour de <b>{playerName}</b></p>
      <div style={{ display: 'grid', placeItems: 'center', margin: '8px 0 16px' }}>
        <CharPortrait3D key={modelPath} char={char} size={160} modelPath={modelPath} />
      </div>
      <button className="btn" onClick={onPlay}>Jouer ▶</button>
    </div>
  )
}
