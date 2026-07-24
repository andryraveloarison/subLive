import { Routes, Route, Navigate } from 'react-router-dom'
import DeviceGate from './components/DeviceGate.jsx'
import Layout from './components/Layout.jsx'
import KilalaoPage from './pages/KilalaoPage.jsx'
import IntroPage from './pages/IntroPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import SetupPage from './pages/SetupPage.jsx'
import ReadyPage from './pages/ReadyPage.jsx'
import LoadingPage from './pages/LoadingPage.jsx'
import PlayPage from './pages/PlayPage.jsx'
import RankingPage from './pages/RankingPage.jsx'
import GameOverPage from './pages/GameOverPage.jsx'
import PenopenoPage from './pages/PenopenoPage.jsx'
import RallyePage from './pages/RallyePage.jsx'
import RallyeControllerPage from './pages/RallyeControllerPage.jsx'

export default function App() {
  return (
    <DeviceGate>
    <Routes>
      {/* Sélection du jeu — standalone (pas de canvas 3D Dashikara) */}
      <Route path="/" element={<KilalaoPage />} />

      {/* Penopeno — standalone */}
      <Route path="/penopeno" element={<PenopenoPage />} />

      {/* Rallye — standalone */}
      <Route path="/rallye" element={<RallyePage />} />

      {/* Rallye — manette téléphone (rejoint une course via QR / code) */}
      <Route path="/rallye-join"       element={<RallyeControllerPage />} />
      <Route path="/rallye-join/:code" element={<RallyeControllerPage />} />

      {/* Dashikara — canvas 3D persistant via Layout */}
      <Route element={<Layout />}>
        <Route path="/intro"    element={<IntroPage />} />
        <Route path="/menu"     element={<MenuPage />} />
        <Route path="/setup"    element={<SetupPage />} />
        <Route path="/ready"    element={<ReadyPage />} />
        <Route path="/loading"  element={<LoadingPage />} />
        <Route path="/play"     element={<PlayPage />} />
        <Route path="/ranking"  element={<RankingPage />} />
        <Route path="/over"     element={<GameOverPage />} />
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
    </DeviceGate>
  )
}
