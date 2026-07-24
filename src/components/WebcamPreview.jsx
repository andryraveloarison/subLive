// Aperçu webcam (miroir) affiché en bas à droite quand la caméra est active.
export default function WebcamPreview({ cam, videoRef }) {
  return (
    <div className={`cam ${cam === 'on' ? 'live' : ''}`}>
      <video ref={videoRef} playsInline muted />
      {cam === 'on' && <span className="cam-badge">● LIVE</span>}
    </div>
  )
}
