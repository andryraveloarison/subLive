// Pilotage par webcam : détection de pose (MediaPipe) -> gestes du jeu.
//   - saut physique      -> onJump
//   - s'accroupir/baisser -> onCrouch
//   - se déplacer G/D     -> onLane(0|1|2)
//
// Repères utilisés : épaules (11,12) et hanches (23,24). On suit le centre
// du buste : sa hauteur (y) pour saut/accroupissement, sa position (x) pour la voie.

import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision'

const WASM = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
const MODEL = 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task'

export class PoseController {
  constructor(video, callbacks = {}) {
    this.video = video
    this.cb = callbacks
    this.running = false
    this.landmarker = null
    this.baselineY = null       // hauteur "debout" (moyenne lissée)
    this.prevY = null
    this.lastJump = 0
    this.lastCrouch = 0
    this.lane = 1
    this.t = 0
  }

  async start() {
    this.cb.onStatus?.('Chargement du modèle…')
    const vision = await FilesetResolver.forVisionTasks(WASM)
    this.landmarker = await PoseLandmarker.createFromOptions(vision, {
      baseOptions: { modelAssetPath: MODEL, delegate: 'GPU' },
      runningMode: 'VIDEO',
      numPoses: 1,
    })

    this.cb.onStatus?.('Accès à la caméra…')
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480, facingMode: 'user' }, audio: false,
    })
    this.video.srcObject = stream
    await this.video.play()

    this.running = true
    this.baselineY = null
    this.cb.onStatus?.('Caméra active — bouge !')
    this._loop()
  }

  stop() {
    this.running = false
    const s = this.video.srcObject
    if (s) s.getTracks().forEach(t => t.stop())
    this.video.srcObject = null
  }

  _loop = () => {
    if (!this.running) return
    const now = performance.now()
    if (this.video.readyState >= 2) {
      const res = this.landmarker.detectForVideo(this.video, now)
      if (res.landmarks && res.landmarks[0]) this._process(res.landmarks[0], now)
    }
    requestAnimationFrame(this._loop)
  }

  _process(lm, now) {
    const ls = lm[11], rs = lm[12], lh = lm[23], rh = lm[24]
    if (!ls || !rs || !lh || !rh) return

    // centre du buste (y : 0 = haut de l'image)
    const cy = (ls.y + rs.y + lh.y + rh.y) / 4
    const cx = (ls.x + rs.x + lh.x + rh.x) / 4
    // image mirroir : on inverse x pour que "bouger à gauche" = voie de gauche
    const mx = 1 - cx

    // baseline lissée de la hauteur debout
    if (this.baselineY == null) this.baselineY = cy
    // ne met à jour la baseline que doucement, et pas pendant un saut marqué
    const drift = cy < this.baselineY - 0.08 ? 0.002 : 0.03
    this.baselineY += (cy - this.baselineY) * drift

    // vitesse verticale (négative = monte)
    const vy = this.prevY == null ? 0 : cy - this.prevY
    this.prevY = cy

    // --- SAUT : le buste monte nettement au-dessus de la baseline ---
    if (cy < this.baselineY - 0.06 && vy < -0.008 && now - this.lastJump > 600) {
      this.lastJump = now
      this.cb.onJump?.()
    }

    // --- ACCROUPI / GLISSADE : le buste descend nettement ---
    if (cy > this.baselineY + 0.07 && now - this.lastCrouch > 700) {
      this.lastCrouch = now
      this.cb.onCrouch?.()
    }

    // --- VOIE : position horizontale du buste ---
    let lane = 1
    if (mx < 0.40) lane = 0
    else if (mx > 0.60) lane = 2
    if (lane !== this.lane) {
      this.lane = lane
      this.cb.onLane?.(lane)
    }

    this.cb.onPose?.({ cy, mx, baseline: this.baselineY })
  }
}
