import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import IntroScreen from '../components/IntroScreen.jsx'
import { preloadSelectionModel } from '../components/CharPortrait3D.jsx'
import { useGameCtx } from '../context/GameContext.js'

export default function IntroPage() {
  const navigate = useNavigate()
  const { preloadModels } = useGameCtx()

  // Pendant l'animation d'intro (avant l'appui touche), on précharge en arrière-plan
  // le modèle de sélection ET les modèles de jeu (course/saut) pour supprimer toute
  // latence sur l'écran de choix du perso et à la page de chargement.
  useEffect(() => {
    preloadSelectionModel()
    preloadModels?.()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <IntroScreen onDone={() => navigate('/menu')} />
}
