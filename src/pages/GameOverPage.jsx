import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GameOverScreen from '../components/screens/GameOverScreen.jsx'
import { useGameCtx } from '../context/GameContext.js'

export default function GameOverPage() {
  const { score, coins, best, scoreVersion, startTurn, go } = useGameCtx()
  const navigate = useNavigate()

  // Relance automatique : attend 10 s puis rejoue une partie solo. Mémorisé.
  const [autoRestart, setAutoRestart] = useState(() => localStorage.getItem('dashikara.autoRestart') === '1')
  const [autoLeft,    setAutoLeft]    = useState(0)   // secondes restantes avant relance
  useEffect(() => { localStorage.setItem('dashikara.autoRestart', autoRestart ? '1' : '0') }, [autoRestart])

  useEffect(() => {
    if (!autoRestart) { setAutoLeft(0); return }
    setAutoLeft(10)
    const iv = setInterval(() => {
      setAutoLeft(n => {
        if (n <= 1) { clearInterval(iv); startTurn(0); return 0 }
        return n - 1
      })
    }, 1000)
    return () => clearInterval(iv)
  }, [autoRestart])

  return (
    <GameOverScreen
      score={score} coins={coins} best={best} scoreVersion={scoreVersion}
      autoRestart={autoRestart} autoLeft={autoLeft}
      onToggleAuto={() => setAutoRestart(v => !v)}
      onReplay={() => startTurn(0)}
      onMenu={() => go('/menu')}
      onQuit={() => navigate('/')}
    />
  )
}
