import ReadyScreen from '../components/screens/ReadyScreen.jsx'
import { CHARACTERS } from '../data/characters.js'
import { useGameCtx } from '../context/GameContext.js'

export default function ReadyPage() {
  const { round, pName, turnIdx, picks, startTurn } = useGameCtx()
  return (
    <ReadyScreen
      round={round}
      playerName={pName(turnIdx)}
      char={CHARACTERS[picks[turnIdx] % CHARACTERS.length]}
      onPlay={() => startTurn(turnIdx)}
    />
  )
}
