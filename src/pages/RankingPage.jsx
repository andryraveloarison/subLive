import { useNavigate } from 'react-router-dom'
import RankingScreen from '../components/screens/RankingScreen.jsx'
import { useGameCtx } from '../context/GameContext.js'

export default function RankingPage() {
  const { round, ranking, pName, lastCoins, nextRound, go } = useGameCtx()
  const navigate = useNavigate()
  return (
    <RankingScreen
      round={round} ranking={ranking} pName={pName} lastCoins={lastCoins}
      onNext={nextRound}
      onEnd={() => go('/menu')}
      onQuit={() => navigate('/')}
    />
  )
}
