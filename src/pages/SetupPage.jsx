import SetupScreen from '../components/screens/SetupScreen.jsx'
import { useGameCtx } from '../context/GameContext.js'

export default function SetupPage() {
  const {
    isMatch, numPlayers, setNumPlayers, picks, setPicks,
    names, setNames, beginMatch, go,
  } = useGameCtx()
  return (
    <SetupScreen
      isMatch={isMatch}
      numPlayers={numPlayers} setNumPlayers={setNumPlayers}
      picks={picks} setPicks={setPicks}
      names={names} setNames={setNames}
      onBegin={beginMatch}
      onBack={() => go('/menu')}
    />
  )
}
