import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { FilesetResolver, PoseLandmarker } from '@mediapipe/tasks-vision'
import { recordPlay } from '../lib/supabase.js'
import { getDevice } from '../lib/profile.js'

const WASM  = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
const MODEL = 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task'

const GOAL_W = 10.0
const GOAL_H = 3.6
const GOAL_Z = -16
const KICKS  = 5

// Connexions squelette MediaPipe
const SKEL_LINES = [
  [11,12],[11,13],[13,15],[12,14],[14,16],
  [11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],
]

// Convertit un landmark (x,y normalisés) en position 3D sur le terrain
// Le personnage est centré à z = FIGURE_Z
const FIGURE_Z = -2.0  // personnage entre la caméra et le ballon
const POSE_SCALE = 2.8
function lm3d(lm) {
  // Z fixe : pas de variation de profondeur pour garder le personnage plat et cohérent
  return new THREE.Vector3(
    -(lm.x - 0.5) * POSE_SCALE,
     (0.82 - lm.y) * POSE_SCALE,
    FIGURE_Z,
  )
}

// Positionne et oriente un cylindre (hauteur=1 en local) entre deux points 3D
const _ax = new THREE.Vector3(0, 1, 0)
function stretchBetween(mesh, a, b) {
  const dir = new THREE.Vector3().subVectors(b, a)
  const len = dir.length()
  if (len < 0.01) return
  mesh.position.addVectors(a, b).multiplyScalar(0.5)
  mesh.scale.set(1, len, 1)
  try { mesh.quaternion.setFromUnitVectors(_ax, dir.normalize()) }
  catch (_) { /* vecteurs antiparallèles */ }
}

// Crée le personnage 3D (segments cylindriques + tête sphérique)
function buildFigure(scene) {
  const mat = (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.6 })
  const seg = (r, color) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 1, 8), mat(color))
    m.frustumCulled = false
    scene.add(m)
    return m
  }

  const torso    = seg(0.14, '#cc2222')
  const head     = new THREE.Mesh(new THREE.SphereGeometry(0.20, 10, 10), mat('#d4956e'))
  head.frustumCulled = false; scene.add(head)
  const uArmL    = seg(0.07, '#cc2222'); const lArmL = seg(0.06, '#cc2222')
  const uArmR    = seg(0.07, '#cc2222'); const lArmR = seg(0.06, '#cc2222')
  const uLegL    = seg(0.09, '#1133aa'); const lLegL = seg(0.08, '#1133aa')
  const uLegR    = seg(0.09, '#1133aa'); const lLegR = seg(0.08, '#1133aa')

  return { torso, head, uArmL, lArmL, uArmR, lArmR, uLegL, lLegL, uLegR, lLegR }
}

function updateFigure(fig, lm) {
  const p = {}
  for (const idx of [0, 11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28]) {
    const lmk = lm[idx]
    // Ignore les joints peu visibles (extrapolés, hors cadre)
    if (lmk && (lmk.visibility == null || lmk.visibility > 0.35)) p[idx] = lm3d(lmk)
  }

  if (p[11] && p[12] && p[23] && p[24]) {
    const smid = new THREE.Vector3().addVectors(p[11], p[12]).multiplyScalar(0.5)
    const hmid = new THREE.Vector3().addVectors(p[23], p[24]).multiplyScalar(0.5)
    stretchBetween(fig.torso, hmid, smid)
    fig.head.position.copy(p[0] ?? smid.clone().setY(smid.y + 0.28))
  }
  if (p[11] && p[13]) stretchBetween(fig.uArmL, p[11], p[13])
  if (p[13] && p[15]) stretchBetween(fig.lArmL, p[13], p[15])
  if (p[12] && p[14]) stretchBetween(fig.uArmR, p[12], p[14])
  if (p[14] && p[16]) stretchBetween(fig.lArmR, p[14], p[16])
  if (p[23] && p[25]) stretchBetween(fig.uLegL, p[23], p[25])
  if (p[25] && p[27]) stretchBetween(fig.lLegL, p[25], p[27])
  if (p[24] && p[26]) stretchBetween(fig.uLegR, p[24], p[26])
  if (p[26] && p[28]) stretchBetween(fig.lLegR, p[26], p[28])
}

export default function PenopenoPage() {
  const navigate = useNavigate()
  const threeRef  = useRef(null)
  const camCanRef = useRef(null)   // canvas webcam + squelette
  const videoRef  = useRef(null)
  const [ui, setUi] = useState({ phase: 'init', score: 0, kicked: 0, msg: '', camOk: false, aimY: 0.5, jumpPower: 0 })

  // Journalise une partie Penopeno (stats /datax) au chargement de la page.
  useEffect(() => { recordPlay('penopeno', '', getDevice()) }, [])

  useEffect(() => {
    const canvas = threeRef.current
    const camCan = camCanRef.current
    const camCtx = camCan.getContext('2d')

    // ── Three.js ────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#5ba8d4')
    scene.fog = new THREE.Fog('#8ec8e8', 35, 70)

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100)
    camera.position.set(0, 3.0, 9)
    camera.lookAt(0, 1.0, GOAL_Z)

    const CAM_W = 220, CAM_H = 165
    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight
      renderer.setSize(w, h)
      camera.aspect = w / h; camera.updateProjectionMatrix()
    }
    resize(); window.addEventListener('resize', resize)

    // Lumières
    scene.add(new THREE.HemisphereLight('#d0f0ff', '#4a8a3a', 1.1))
    const sun = new THREE.DirectionalLight('#fff8e0', 1.6)
    sun.position.set(-12, 22, 8); sun.castShadow = true
    sun.shadow.mapSize.set(1024, 1024); scene.add(sun)

    // Terrain
    const pitch = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 70),
      new THREE.MeshStandardMaterial({ color: '#2e8b28', roughness: 1 })
    )
    pitch.rotation.x = -Math.PI / 2; pitch.position.z = -20
    pitch.receiveShadow = true; scene.add(pitch)

    // Marquages
    const lineMat = new THREE.MeshBasicMaterial({ color: '#ffffff', opacity: 0.55, transparent: true })
    const mkLine = (gx, gz, x = 0, z = 0) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(gx, gz), lineMat)
      m.rotation.x = -Math.PI / 2; m.position.set(x, 0.01, z); scene.add(m); return m
    }
    mkLine(18, 0.08, 0, -11)
    mkLine(0.08, 11, -9, -16); mkLine(0.08, 11, 9, -16)
    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.14, 16), lineMat)
    dot.rotation.x = -Math.PI / 2; dot.position.set(0, 0.01, 0); scene.add(dot)

    // Buts
    const postMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 })
    const mkCyl = (r, h) => new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 12), postMat)
    const goalG = new THREE.Group()
    const lp = mkCyl(0.08, GOAL_H); lp.position.set(-GOAL_W/2, GOAL_H/2, 0); goalG.add(lp)
    const rp = mkCyl(0.08, GOAL_H); rp.position.set( GOAL_W/2, GOAL_H/2, 0); goalG.add(rp)
    const bar = mkCyl(0.08, GOAL_W+.16); bar.rotation.z = Math.PI/2; bar.position.set(0, GOAL_H, 0); goalG.add(bar)
    for (const z of [-2]) {
      const bpl = mkCyl(0.06, GOAL_H); bpl.position.set(-GOAL_W/2, GOAL_H/2, z); goalG.add(bpl)
      const bpr = mkCyl(0.06, GOAL_H); bpr.position.set( GOAL_W/2, GOAL_H/2, z); goalG.add(bpr)
      const btb = mkCyl(0.06, GOAL_W+.12); btb.rotation.z = Math.PI/2; btb.position.set(0, GOAL_H, z); goalG.add(btb)
    }
    const netMat = new THREE.MeshBasicMaterial({ color: '#ddd', wireframe: true, opacity: 0.2, transparent: true })
    const netB = new THREE.Mesh(new THREE.PlaneGeometry(GOAL_W, GOAL_H), netMat)
    netB.position.set(0, GOAL_H/2, -2); goalG.add(netB)
    const netT = new THREE.Mesh(new THREE.PlaneGeometry(GOAL_W, 2), netMat)
    netT.rotation.x = Math.PI/2; netT.position.set(0, GOAL_H, -1); goalG.add(netT)
    goalG.position.z = GOAL_Z; scene.add(goalG)

    // Ballon
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 20, 20),
      new THREE.MeshStandardMaterial({ color: '#f5f5f5', roughness: 0.5 })
    )
    ball.position.set(0, 0.22, -8); ball.castShadow = true; scene.add(ball)

    // Curseur de visée
    const aimRing = new THREE.Mesh(
      new THREE.RingGeometry(0.18, 0.28, 28),
      new THREE.MeshBasicMaterial({ color: '#ffe500', opacity: 0.9, transparent: true, side: THREE.DoubleSide })
    )
    aimRing.position.set(0, 1.0, GOAL_Z + 0.3); scene.add(aimRing)

    // Gardien
    const gkG = new THREE.Group()
    const gkMat  = new THREE.MeshStandardMaterial({ color: '#ff6200', roughness: 0.7 })
    const skinMat = new THREE.MeshStandardMaterial({ color: '#c88060', roughness: 0.7 })
    const pantMat = new THREE.MeshStandardMaterial({ color: '#1133aa', roughness: 0.8 })
    const gkBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.1, 0.4), gkMat); gkBody.position.y = 1.45; gkG.add(gkBody)
    const gkHead = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 10), skinMat); gkHead.position.y = 2.25; gkG.add(gkHead)
    for (const s of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.0, 0.22), gkMat); arm.position.set(s*0.55, 1.5, 0); gkG.add(arm)
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.95, 0.24), pantMat); leg.position.set(s*0.18, 0.52, 0); gkG.add(leg)
    }
    gkG.position.set(0, 0, GOAL_Z + 0.5); scene.add(gkG)

    // Personnage joueur (suit la pose)
    const figure = buildFigure(scene)

    // ── État du jeu ─────────────────────────────────────────────────────────
    const gs = {
      phase: 'aim', score: 0, kicked: 0,
      aimX: 0, aimY: 1.1,
      ballTarget: new THREE.Vector3(0, 1.1, GOAL_Z),
      ballT: 0, ballDuration: 0.7,
      gkX: 0, gkTargetX: 0,
      resultT: 0, lastKick: 0,
      kneeWasRaised: false,
      // Suivi du saut pour la puissance
      hipBaseline: null,   // hauteur Y des hanches au repos
      minHipY: null,       // pic du dernier saut
      jumpInProgress: false,
      jumpPower: 0.4,      // 0=faible, 1=max (détermine la vitesse du tir)
    }

    const resetBall = () => {
      ball.position.set(0, 0.22, -8); ball.rotation.set(0, 0, 0)
      gs.ballT = 0; gs.gkTargetX = 0
    }

    const shoot = (tx, ty) => {
      if (gs.kicked >= KICKS) return
      gs.phase = 'flying'
      gs.ballTarget.set(tx, ty, GOAL_Z)
      gs.ballT = 0
      // Durée inversement proportionnelle à la puissance du saut
      // Saut bas → 1.0 s (lent), saut haut → 0.35 s (très rapide)
      gs.ballDuration = 1.0 - gs.jumpPower * 0.65
      const react = Math.random() < 0.55 ? tx * 0.85 : -tx * 0.55
      gs.gkTargetX = Math.max(-GOAL_W/2+0.4, Math.min(GOAL_W/2-0.4, react + (Math.random()-0.5)*0.5))
    }

    const evalShot = () => {
      const { x, y } = gs.ballTarget
      const inGoal = Math.abs(x) < GOAL_W/2-0.1 && y > 0.05 && y < GOAL_H-0.05
      const saved  = inGoal && Math.abs(gs.gkX - x) < 0.9
      const goal   = inGoal && !saved
      gs.score += goal ? 1 : 0; gs.kicked++
      gs.phase = 'result'; gs.resultT = 0
      setUi({ phase: 'result', score: gs.score, kicked: gs.kicked,
               msg: goal ? 'BUT ! ⚽' : saved ? 'Arrêté !' : 'À côté !', camOk: true })
    }

    // ── Webcam + MediaPipe ───────────────────────────────────────────────────
    let landmarker = null

    const drawCam = (lm) => {
      const vid = videoRef.current
      if (!vid || vid.readyState < 2) { camCtx.clearRect(0, 0, CAM_W, CAM_H); return }
      // Image webcam (miroir horizontal)
      camCtx.save()
      camCtx.translate(CAM_W, 0); camCtx.scale(-1, 1)
      camCtx.drawImage(vid, 0, 0, CAM_W, CAM_H)
      camCtx.restore()
      if (!lm) return
      // Squelette
      camCtx.strokeStyle = 'rgba(0,255,200,0.85)'; camCtx.lineWidth = 2
      for (const [a, b] of SKEL_LINES) {
        if (!lm[a] || !lm[b]) continue
        camCtx.beginPath()
        camCtx.moveTo((1-lm[a].x)*CAM_W, lm[a].y*CAM_H)
        camCtx.lineTo((1-lm[b].x)*CAM_W, lm[b].y*CAM_H)
        camCtx.stroke()
      }
      camCtx.fillStyle = '#ffe500'
      for (const [a] of SKEL_LINES) {
        if (!lm[a]) continue
        camCtx.beginPath(); camCtx.arc((1-lm[a].x)*CAM_W, lm[a].y*CAM_H, 3, 0, Math.PI*2); camCtx.fill()
      }
    }

    const initCam = async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks(WASM)
        landmarker = await PoseLandmarker.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL, delegate: 'GPU' },
          runningMode: 'VIDEO', numPoses: 1,
        })
        const stream = await navigator.mediaDevices.getUserMedia(
          { video: { width: 640, height: 480, facingMode: 'user' }, audio: false })
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setUi(u => ({ ...u, camOk: true, phase: 'aim' }))
      } catch (e) {
        console.warn('Cam indisponible, fallback souris', e)
        setUi(u => ({ ...u, camOk: false, phase: 'aim' }))
      }
    }

    // Fallback souris
    let mouseX = 0, mouseY = 0
    const onMouse = (e) => { mouseX = (e.clientX/window.innerWidth-0.5)*GOAL_W*1.8; mouseY = (1-e.clientY/window.innerHeight)*GOAL_H*1.5 }
    const onClick = () => { if (gs.phase === 'aim') shoot(gs.aimX, gs.aimY) }
    const onKey   = (e) => { if (e.code === 'Space') { e.preventDefault(); if (gs.phase === 'aim') shoot(gs.aimX, gs.aimY) } }
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('click', onClick)
    window.addEventListener('keydown', onKey)

    // ── Boucle ───────────────────────────────────────────────────────────────
    const clock = new THREE.Clock()
    let raf = null, landmarks = null

    const loop = () => {
      raf = requestAnimationFrame(loop)
      const dt = clock.getDelta()
      const now = performance.now()

      // Détection de pose
      if (landmarker && videoRef.current?.readyState >= 2) {
        const res = landmarker.detectForVideo(videoRef.current, now)
        if (res.landmarks?.[0]) landmarks = res.landmarks[0]
      }
      drawCam(landmarks)

      // Mise à jour du personnage 3D
      if (landmarks) {
        updateFigure(figure, landmarks)

        if (gs.phase === 'aim') {
          const lm = landmarks
          const ls = lm[11], rs = lm[12], lh = lm[23], rh = lm[24]
          if (ls && rs && lh && rh) {
            const cx = (ls.x + rs.x + lh.x + rh.x) / 4
            gs.aimX = Math.max(-GOAL_W/2+0.3, Math.min(GOAL_W/2-0.3, (0.5-cx)*GOAL_W*2.2))
          }
          const lKnee = lm[25], rKnee = lm[26], lHipK = lm[23], rHipK = lm[24]
          if (lKnee && rKnee && lHipK && rHipK) {
            const lRaise = lHipK.y - lKnee.y
            const rRaise = rHipK.y - rKnee.y
            const maxRaise = Math.max(lRaise, rRaise)

            // ── HAUTEUR DU TIR = hauteur du genou normalisée au corps ───────
            // bodyRef = distance épaule-hanche (varie avec la distance à la cam)
            // Échelle : genou au sol → 0  |  genou à la hanche → 0.5
            //           genou à l'épaule → 1.0  |  au-dessus → >1.0 (raté)
            const shoulderY  = ((lm[11]?.y ?? 0) + (lm[12]?.y ?? 0)) / 2
            const hipY       = (lHipK.y + rHipK.y) / 2
            const bodyRef    = Math.max(0.05, hipY - shoulderY)  // dist épaule→hanche
            // maxRaise normalisé : 0 = genou à la hanche, bodyRef = genou à l'épaule
            const norm = (maxRaise + bodyRef) / (2 * bodyRef)  // 0=sol, 0.5=hanche, 1=épaule
            gs.aimY = Math.max(0.1, norm * (GOAL_H + 1.2))
            // Pas de clampage : norm > 1 → aimY > GOAL_H → tir au-dessus de la barre

            // ── SUIVI DU SAUT pour la puissance ────────────────────────────
            if (gs.hipBaseline === null) gs.hipBaseline = hipY
            else gs.hipBaseline += (hipY - gs.hipBaseline) * 0.015  // dérive lente

            const lift = gs.hipBaseline - hipY   // positif quand le joueur saute
            if (lift > 0.04) {
              // En l'air : enregistre le pic du saut
              gs.jumpInProgress = true
              if (gs.minHipY === null || hipY < gs.minHipY) gs.minHipY = hipY
            } else if (gs.jumpInProgress) {
              // Atterrissage : calcule la puissance depuis la hauteur du pic
              const peakLift = gs.hipBaseline - (gs.minHipY ?? gs.hipBaseline)
              gs.jumpPower = Math.min(1, peakLift * 7)
              gs.jumpInProgress = false; gs.minHipY = null
            }

            // ── DÉTECTION DU TIR : genou levé puis redescend ───────────────
            const isRaised = lRaise > 0.06 || rRaise > 0.06
            if (gs.kneeWasRaised && !isRaised && now - gs.lastKick > 900) {
              gs.lastKick = now
              shoot(gs.aimX, gs.aimY)
            }
            gs.kneeWasRaised = isRaised

            // Indicateur UI : normalisé 0→1 (1 = barre transversale, >1 = au-dessus)
            setUi(u => u.phase === 'aim'
              ? { ...u, aimY: gs.aimY / GOAL_H, jumpPower: gs.jumpPower }
              : u)
          }
        }
      } else if (gs.phase === 'aim') {
        gs.aimX = Math.max(-GOAL_W/2+0.3, Math.min(GOAL_W/2-0.3, mouseX))
        gs.aimY = Math.max(0.2, Math.min(GOAL_H-0.15, mouseY))
      }

      // Curseur
      if (gs.phase === 'aim') { aimRing.visible = true; aimRing.position.set(gs.aimX, gs.aimY, GOAL_Z+0.3); aimRing.rotation.z += dt*1.5 }
      else aimRing.visible = false

      // Vol du ballon
      if (gs.phase === 'flying') {
        gs.ballT = Math.min(1, gs.ballT + dt / gs.ballDuration)
        const t = gs.ballT
        const sx = 0, sy = 0.22, sz = -8
        const ex = gs.ballTarget.x, ey = gs.ballTarget.y, ez = GOAL_Z
        const my = Math.max(ey, 2.5)
        ball.position.set(sx+(ex-sx)*t, sy+(my-sy)*Math.sin(t*Math.PI)+(ey-sy)*t, sz+(ez-sz)*t)
        ball.rotation.x += dt*12; ball.rotation.z += dt*4
        if (gs.ballT >= 1) evalShot()
      }

      // Gardien
      gs.gkX += (gs.gkTargetX-gs.gkX) * Math.min(1, dt*(gs.phase==='flying'?5.5:1.8))
      gkG.position.x = gs.gkX
      gkG.scale.set(1, 1, 1)

      // Résultat
      if (gs.phase === 'result') {
        gs.resultT += dt
        if (gs.resultT > 2.2) {
          if (gs.kicked >= KICKS) { gs.phase='over'; setUi(u=>({...u,phase:'over',msg:''})) }
          else { gs.phase='aim'; setUi(u=>({...u,phase:'aim',msg:''})); resetBall() }
        }
      }

      renderer.render(scene, camera)
    }

    initCam(); loop()

    return () => {
      cancelAnimationFrame(raf); renderer.dispose()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('click', onClick)
      window.removeEventListener('keydown', onKey)
      const s = videoRef.current?.srcObject; if (s) s.getTracks().forEach(t => t.stop())
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const { phase, score, kicked, msg, camOk } = ui

  return (
    <div className="penopeno">
      <canvas ref={threeRef} className="penopeno__three" />

      {/* Fenêtre webcam bas-droite (même style que Dashikara) */}
      <div className={`cam${ui.camOk ? ' live' : ''}`}>
        <video ref={videoRef} playsInline muted style={{ width:'100%', height:'100%', objectFit:'cover', transform:'scaleX(-1)' }} />
        {ui.camOk && <span className="cam-badge">● LIVE</span>}
      </div>
      {/* Canvas squelette invisible (pose detection uniquement) */}
      <canvas ref={camCanRef} width={1} height={1} style={{ display:'none' }} />

      {/* HUD */}
      <div className="penopeno__hud">
        <span className="penopeno__score">⚽ {score} / {kicked}</span>
        <span className="penopeno__remain">{KICKS-kicked} tir{KICKS-kicked>1?'s':''} restant{KICKS-kicked>1?'s':''}</span>
      </div>

      {msg && <div className="penopeno__msg">{msg}</div>}

      {phase === 'aim' && (
        <>
          {/* Indicateur de hauteur + puissance */}
          <div className="penopeno__traject">
            {/* Hauteur (genou) */}
            <div className="penopeno__traject-col">
              <span className="penopeno__traject-label">HORS</span>
              <div className="penopeno__traject-bar">
                {/* Zone valide (sous la barre) */}
                <div style={{ position:'absolute', bottom:0, left:0, right:0, height:`${(1/1.4)*100}%`, background:'rgba(0,255,100,0.08)', borderTop:'1px dashed rgba(255,255,255,0.3)' }} />
                <div className="penopeno__traject-fill" style={{ height: `${Math.min(100, ui.aimY/1.4*100)}%` }} />
                <div className="penopeno__traject-cursor" style={{ bottom: `${Math.min(98, ui.aimY/1.4*100)}%` }} />
              </div>
              <span className="penopeno__traject-label">BAS</span>
              <span className="penopeno__traject-type">
                {ui.aimY > 1.0 ? '❌ HORS' : ui.aimY > 0.55 ? '🔼 HAUTE' : ui.aimY > 0.25 ? '➡️ CENTRE' : '🔽 RASANTE'}
              </span>
            </div>
            {/* Puissance (saut) */}
            <div className="penopeno__traject-col">
              <span className="penopeno__traject-label">💨</span>
              <div className="penopeno__traject-bar" style={{ background:'rgba(255,200,0,0.1)' }}>
                <div className="penopeno__traject-fill" style={{ height:`${ui.jumpPower*100}%`, background:'linear-gradient(to top,#ff6600,#ffcc00)' }} />
              </div>
              <span className="penopeno__traject-label">🐢</span>
              <span className="penopeno__traject-type" style={{ color: ui.jumpPower > 0.7 ? '#ff6600' : '#fff' }}>
                {ui.jumpPower > 0.7 ? '💥 FORT' : ui.jumpPower > 0.35 ? '⚡ MOYEN' : '🐢 FAIBLE'}
              </span>
            </div>
          </div>
          <div className="penopeno__hint">
            {camOk ? 'Genou bas = rasante · Genou haut = haute · Relâche pour tirer' : 'Souris pour viser · Clic / Espace pour tirer'}
          </div>
        </>
      )}

      {phase === 'over' && (
        <div className="penopeno__over">
          <div className="penopeno__over-title">PENOPENO</div>
          <div className="penopeno__over-score">{score} but{score>1?'s':''} sur {KICKS}</div>
          <div className="penopeno__over-stars">
            {Array.from({length:KICKS},(_,i)=><span key={i}>{i<score?'⚽':'❌'}</span>)}
          </div>
          <button className="btn" onClick={() => window.location.reload()}>Rejouer</button>
          <button className="btn penopeno__btn-home" onClick={() => navigate('/')}>Accueil</button>
        </div>
      )}

      <button className="penopeno__back" onClick={() => navigate('/')}>✕</button>
    </div>
  )
}
