import Hud from '../components/Hud.jsx'
import { useGameCtx } from '../context/GameContext.js'

export default function PlayPage() {
  const { score, coins, power, isMatch, pName, turnIdx, round } = useGameCtx()
  return (
    <Hud
      score={score} coins={coins} power={power}
      isMatch={isMatch} playerName={pName(turnIdx)} round={round}
    />
  )
}
