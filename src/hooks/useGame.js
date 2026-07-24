import { useEffect, useRef } from 'react'
import { Game } from '../engine.js'

// Instancie le moteur Three.js une seule fois et branche les entrées
// clavier + gestes tactiles. Renvoie les refs vers le canvas et le jeu.
// Les callbacks (onScore/onPower/onGameOver) doivent être stables
// (setters d'état React ou wrappers lisant une ref).
export function useGame({ onScore, onPower, onGameOver, onBiome }) {
  const canvasRef = useRef(null)
  const gameRef = useRef(null)

  useEffect(() => {
    const game = new Game(canvasRef.current, { onScore, onPower, onGameOver, onBiome })
    gameRef.current = game
    if (import.meta.env.DEV) window.__dashi = game

    const onKey = (e) => {
      const g = gameRef.current
      if (!g) return
      switch (e.key) {
        case 'ArrowLeft': case 'a': case 'q': g.moveLeft(); break
        case 'ArrowRight': case 'd': g.moveRight(); break
        case 'ArrowUp': case 'w': case 'z': case ' ': e.preventDefault(); g.jump(); break
        case 'ArrowDown': case 's': g.roll(); break
        default: return
      }
    }
    window.addEventListener('keydown', onKey)

    // gestes tactiles
    let sx = 0, sy = 0, st = 0
    const cv = canvasRef.current
    const onStart = (e) => { const t = e.changedTouches[0]; sx = t.clientX; sy = t.clientY; st = Date.now() }
    const onEnd = (e) => {
      const g = gameRef.current; if (!g) return
      const t = e.changedTouches[0]
      const dx = t.clientX - sx, dy = t.clientY - sy
      if (Math.abs(dx) < 25 && Math.abs(dy) < 25 && Date.now() - st < 250) { g.jump(); return }
      if (Math.abs(dx) > Math.abs(dy)) { dx > 0 ? g.moveRight() : g.moveLeft() }
      else { dy > 0 ? g.roll() : g.jump() }
    }
    cv.addEventListener('touchstart', onStart, { passive: true })
    cv.addEventListener('touchend', onEnd, { passive: true })

    return () => {
      window.removeEventListener('keydown', onKey)
      cv.removeEventListener('touchstart', onStart)
      cv.removeEventListener('touchend', onEnd)
      game.destroy()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { canvasRef, gameRef }
}
