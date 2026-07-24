import { useNavigate } from 'react-router-dom'
import GameOverScreen from '../components/screens/GameOverScreen.jsx'
import { useGameCtx } from '../context/GameContext.js'

export default function GameOverPage() {
  const { score, coins, best, startTurn, go } = useGameCtx()
  const navigate = useNavigate()
  return (
    <GameOverScreen
      score={score} coins={coins} best={best}
      onReplay={() => startTurn(0)}
      onMenu={() => go('/menu')}
      onQuit={() => navigate('/')}
    />
  )
}
