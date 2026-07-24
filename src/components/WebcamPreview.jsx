// Aperçu webcam (miroir) affiché en bas à droite quand la caméra est active.
// `hidden` : masque l'aperçu (fondu) SANS couper le flux — la vidéo continue
// de tourner pour que la détection de pose (MediaPipe) fonctionne toujours.
export default function WebcamPreview({ cam, videoRef, hidden = false }) {
  return (
    <div className={`cam ${cam === 'on' && !hidden ? 'live' : ''}`}>
      <video ref={videoRef} playsInline muted />
      {cam === 'on' && !hidden && <span className="cam-badge">● LIVE</span>}
    </div>
  )
}
