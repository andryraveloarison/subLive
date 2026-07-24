import { useEffect, useRef, useState } from 'react'

// Écran d'accroche animé (flash + titre glitch + « appuie sur une touche »).
export default function IntroScreen({ onDone }) {
  const [phase, setPhase] = useState(0)
  const phaseRef = useRef(0)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  const advance = (p) => { phaseRef.current = p; setPhase(p) }

  useEffect(() => {
    const timers = [
      setTimeout(() => advance(1), 400),   // flash + titre Dashikara
      setTimeout(() => advance(2), 1900),  // "by nananjy"
      setTimeout(() => advance(3), 2900),  // "appuie sur n'importe quelle touche"
      // pas de sortie auto — l'utilisateur doit agir
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (phase !== 4) return
    const t = setTimeout(() => doneRef.current(), 500)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    const onKey = () => { if (phaseRef.current >= 3) advance(4) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleClick = () => { if (phaseRef.current >= 3) advance(4) }

  return (
    <div
      className={[
        'intro',
        phase === 1 ? 'intro--flash' : '',
        phase === 4 ? 'intro--exit' : '',
      ].join(' ')}
      onClick={handleClick}
    >
      <div className="intro__scanlines" />
      <div className={`intro__title${phase >= 1 ? ' show' : ''}`}>
        <span>Dashi</span><span>kara</span>
      </div>
      <div className={`intro__by${phase >= 2 ? ' show' : ''}`}>
        by nananjy
      </div>
      {phase >= 3 && (
        <p className="intro__press">— Appuie sur n'importe quelle touche —</p>
      )}
    </div>
  )
}
