import { createContext, useContext } from 'react'

// Contexte partagé entre toutes les pages : état du jeu, données du match,
// et actions de navigation (avec transition tournante). Fourni par <Layout>.
export const GameContext = createContext(null)

export function useGameCtx() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGameCtx doit être utilisé dans <GameContext.Provider>')
  return ctx
}
