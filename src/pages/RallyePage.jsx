import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import QRCode from 'qrcode'
import { createHost, joinUrl } from '../net/rallyeNet.js'

const LAPS      = 3
const ROAD_W    = 12
const RAIL_OFF  = 2.4                        // distance rail ↔ bord de route
const MAX_LAT   = ROAD_W / 2 + RAIL_OFF - 1.0  // la carrosserie touche la glissière
const MAX_KMH   = 205
const BOOST_KMH = 285
const ACCEL_MS  = 15            // accélération m/s²
const BRAKE_MS  = 30
const DRAG      = 0.35          // frein moteur (par seconde)
const TURN_RATE = 2.1           // rad/s de braquage à pleine adhérence
const CAR_R     = 1.05          // rayon des cercles de collision voiture
const VMAX      = MAX_KMH  / 3.6   // m/s
const VBOOST    = BOOST_KMH / 3.6
const MAX_PLAYERS = 6
const _UP       = new THREE.Vector3(0, 1, 0)

// ── Gadgets de tir ──
const PROJ_N     = 28          // taille du pool de projectiles
const PROJ_SPEED = 95          // m/s
const PROJ_LIFE  = 1.5         // s de vol max
const PROJ_R     = 2.4         // rayon d'impact
const FIRE_CD    = 1.1         // s entre deux tirs
const HIT_SLOW   = 0.5         // vitesse conservée par la cible touchée

// ── Classement cumulé (points par manche selon la place) ──
const MANCHE_PTS = [10, 8, 6, 5, 4, 3, 2, 1]

const NEON_ORANGE = '#ff9100'

// Couleurs des voitures pilotées (téléphones)
const RACER_COLORS = [
  { body: '#e53935', neon: '#00e5ff', name: 'Rouge'  },
  { body: '#1e88e5', neon: '#40c4ff', name: 'Bleu'   },
  { body: '#43a047', neon: '#69f0ae', name: 'Vert'   },
  { body: '#fdd835', neon: '#fff59d', name: 'Jaune'  },
  { body: '#8e24aa', neon: '#ea80fc', name: 'Violet' },
  { body: '#fb8c00', neon: '#ffcc80', name: 'Orange' },
]

const angDiff = (a, b) => {
  let d = a - b
  while (d >  Math.PI) d -= Math.PI * 2
  while (d < -Math.PI) d += Math.PI * 2
  return d
}

// Circuit dessiné à la main : ligne droite de départ, courbes rapides,
// esses, boucle nord — pas un simple ovale. (x, z) en mètres.
const TRACK_PTS = [
  [-130, -60], [-60, -68], [10, -70], [90, -60],   // grande ligne droite
  [130, -30], [140, 20], [120, 60],                 // virage 1 (droite montante)
  [80, 70], [60, 110], [90, 150],                   // esses droite-gauche
  [60, 190], [0, 200], [-60, 185],                  // boucle nord
  [-100, 150], [-90, 100],                          // décrochement intérieur
  [-130, 60], [-150, 0], [-148, -35],               // retour côté gauche
]

const AI_DEFS = [
  { color: '#1e88e5', neon: '#40c4ff', tOff: 0.012, lat: -2.6, kmh: 191, name: 'CPU Bleu'  },
  { color: '#43a047', neon: '#69f0ae', tOff: 0.024, lat:  2.6, kmh: 184, name: 'CPU Vert'  },
  { color: '#fdd835', neon: '#ffff8d', tOff: 0.036, lat:  0.0, kmh: 176, name: 'CPU Jaune' },
]

const BOOST_PADS = [
  { t: 0.13, lat: -2.4 }, { t: 0.36, lat: 2.4 },
  { t: 0.60, lat:  0.0 }, { t: 0.84, lat: -2.4 },
]

// ── Circuits : tracé (points de contrôle) + thème visuel ──
const CIRCUITS = [
  {
    id: 'savane', name: 'Savane', emoji: '🌅',
    pts: TRACK_PTS,
    theme: {
      decor: 'trees', ground: 'grass', shoulder: '#6d5b40',
      bg: '#cfc4ae', fog: { color: '#cfc4ae', near: 110, far: 520 },
      sky: ['#7d8ea6', '#b8b3a6', '#d9cbb2', '#e4cfa8', '#c9bda6'],
      sun: { color: '#ffd9a8', int: 1.35, pos: [-120, 55, 60] },
      hemi: { sky: '#aebfd4', ground: '#4a4a38', int: 0.85 },
    },
  },
  {
    id: 'ville', name: 'Ville · Tana', emoji: '🏙️',
    pts: [
      [-120, -50], [0, -62], [120, -52], [150, 0], [122, 58],
      [50, 62], [34, 112], [96, 140], [44, 178], [-48, 172],
      [-120, 132], [-96, 72], [-142, 22], [-138, -26],
    ],
    theme: {
      decor: 'city', ground: 'city', shoulder: '#8a8f96',
      bg: '#bcd9f0', fog: { color: '#cfe0f0', near: 150, far: 620 },
      sky: ['#3f86d4', '#6ea9e2', '#a7ccee', '#d3e6f7', '#eef5fc'],
      sun: { color: '#fff5e0', int: 1.55, pos: [80, 95, 45] },
      hemi: { sky: '#bcd9f0', ground: '#6b5b4a', int: 0.95 },
    },
  },
  {
    id: 'neige', name: 'Neige', emoji: '❄️',
    pts: [
      [-140, -40], [-70, -72], [10, -56], [72, -82], [132, -40],
      [150, 30], [100, 72], [122, 132], [50, 162], [-32, 150],
      [-42, 90], [-102, 112], [-150, 50], [-150, -10],
    ],
    theme: {
      decor: 'snow', ground: 'snow', shoulder: '#dfe8f2',
      bg: '#e8eef4', fog: { color: '#e8eef4', near: 70, far: 360 },
      sky: ['#aab8c6', '#c8d4de', '#dde6ee', '#eef3f8', '#f6f9fc'],
      sun: { color: '#e6eef6', int: 1.0, pos: [-60, 75, 55] },
      hemi: { sky: '#dce6f0', ground: '#b8c4d0', int: 1.05 },
    },
  },
]

const GAME_KEYS = new Set([
  'arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ',
  'w', 'a', 's', 'd', 'z', 'q', 'b',
])

// Rétroviseur (fractions de l'écran — doit correspondre au CSS)
const MIRROR = { x: 0.30, w: 0.40, top: 0.025, h: 0.12 }

/* ── Aléatoire déterministe (décor stable entre les runs) ── */
let _seed = 1
const srand  = () => ((_seed = (_seed * 16807) % 2147483647) / 2147483647)

/* ── Textures procédurales ── */
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas')
  c.width = w; c.height = h
  draw(c.getContext('2d'), w, h)
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.anisotropy = 4
  return t
}

function noise(g, w, h, base, amp, n = 9000) {
  g.fillStyle = base; g.fillRect(0, 0, w, h)
  for (let i = 0; i < n; i++) {
    const v = (srand() - 0.5) * amp
    g.fillStyle = `rgba(${v > 0 ? 255 : 0},${v > 0 ? 255 : 0},${v > 0 ? 255 : 0},${Math.abs(v)})`
    g.fillRect(srand() * w, srand() * h, 1 + srand() * 3, 1 + srand() * 3)
  }
}

function makeAsphaltTex() {
  return canvasTex(512, 512, (g, w, h) => {
    noise(g, w, h, '#34373d', 0.14, 14000)
    // traces de pneus au centre des deux voies
    g.fillStyle = 'rgba(0,0,0,0.10)'
    g.fillRect(w * 0.19, 0, w * 0.14, h)
    g.fillRect(w * 0.67, 0, w * 0.14, h)
    // lignes blanches continues sur les bords
    g.fillStyle = 'rgba(235,235,230,0.92)'
    g.fillRect(10, 0, 9, h)
    g.fillRect(w - 19, 0, 9, h)
    // ligne centrale pointillée
    for (let y = 0; y < h; y += 64) g.fillRect(w / 2 - 4, y, 8, 34)
  })
}

// Sol selon le thème : herbe (savane) / pavé (ville) / neige
function makeGroundTex(kind) {
  if (kind === 'city') return canvasTex(256, 256, (g, w, h) => {
    noise(g, w, h, '#7c8088', 0.12, 8000)
    g.strokeStyle = 'rgba(0,0,0,0.12)'; g.lineWidth = 2
    for (let i = 0; i <= w; i += 64) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke() }
    for (let i = 0; i <= h; i += 64) { g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke() }
  })
  if (kind === 'snow') return canvasTex(256, 256, (g, w, h) => {
    noise(g, w, h, '#eef3f8', 0.10, 6000)
    g.fillStyle = 'rgba(255,255,255,0.9)'
    for (let i = 0; i < 400; i++) g.fillRect(Math.random() * w, Math.random() * h, 2, 2)
  })
  return canvasTex(256, 256, (g, w, h) => noise(g, w, h, '#3d5b2e', 0.20, 9000)) // grass
}

function makeChevronTex() {
  const t = canvasTex(256, 128, (g, w, h) => {
    g.fillStyle = '#141c26'
    g.fillRect(0, 0, w, h)
    g.strokeStyle = '#dfe8f0'; g.lineWidth = 5
    g.strokeRect(4, 4, w - 8, h - 8)
    g.fillStyle = '#f2f6fa'
    g.shadowColor = '#ffffff'; g.shadowBlur = 10
    for (let k = 0; k < 3; k++) {
      const x = 42 + k * 72
      g.beginPath()
      g.moveTo(x, 22); g.lineTo(x + 34, h / 2); g.lineTo(x, h - 22)
      g.lineTo(x + 14, h - 22); g.lineTo(x + 48, h / 2); g.lineTo(x + 14, 22)
      g.closePath(); g.fill()
    }
  })
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping
  return t
}

function makeSkyTex(stops) {
  const s = stops || ['#7d8ea6', '#b8b3a6', '#d9cbb2', '#e4cfa8', '#c9bda6']
  const t = canvasTex(16, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h)
    gr.addColorStop(0.00, s[0]); gr.addColorStop(0.45, s[1])
    gr.addColorStop(0.62, s[2]); gr.addColorStop(0.78, s[3])
    gr.addColorStop(1.00, s[4])
    g.fillStyle = gr; g.fillRect(0, 0, w, h)
  })
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping
  return t
}

function makeBlobShadowTex() {
  const t = canvasTex(128, 128, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, w / 2)
    gr.addColorStop(0, 'rgba(0,0,0,0.48)')
    gr.addColorStop(1, 'rgba(0,0,0,0)')
    g.clearRect(0, 0, w, h)
    g.fillStyle = gr; g.fillRect(0, 0, w, h)
  })
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping
  return t
}

/* ── Géométrie du circuit ── */
function makeTrackCurve(pts) {
  const v = (pts || TRACK_PTS).map(([x, z]) => new THREE.Vector3(x, 0, z))
  return new THREE.CatmullRomCurve3(v, true, 'catmullrom', 0.5)
}

function getFrame(curve, t) {
  const tn  = ((t % 1) + 1) % 1
  const pt  = curve.getPointAt(tn)
  const tan = curve.getTangentAt(tn)
  const right = new THREE.Vector3().crossVectors(tan, _UP).normalize()
  return { pt, tan, right, angle: Math.atan2(tan.x, tan.z) }
}

/* ── État + physique d'une voiture pilotable (joueur local OU téléphone) ── */
function makeRacer(startFrame, extra) {
  return {
    pos: startFrame.pt.clone(), heading: startFrame.angle,
    v: 0, t: 0, totalTime: 0, finished: false, finishTime: 0, place: 0,
    steer: 0, boostUntil: 0, onWall: false, lastLat: 0,
    shake: 0, camPos: null,   // secousse + position caméra lissée (par joueur)
    fireReadyF: 0, fireReadyB: 0, points: 0,  // cooldowns canon avant/arrière + points cumulés
    input: { steer: 0, gas: false, brake: false, fireF: false, fireB: false },
    ...extra,
  }
}

// Découpe l'écran : 1 joueur → plein écran, 2 → deux moitiés, 3-4 → quadrants,
// 5-6 → grille 3×2. Rects normalisés, origine en haut à gauche (repère DOM).
function splitRects(n) {
  if (n <= 1) return [{ x: 0, y: 0, w: 1, h: 1 }]
  if (n === 2) return [{ x: 0, y: 0, w: 0.5, h: 1 }, { x: 0.5, y: 0, w: 0.5, h: 1 }]
  if (n === 3) return [
    { x: 0, y: 0, w: 0.5, h: 0.5 }, { x: 0.5, y: 0, w: 0.5, h: 0.5 },
    { x: 0, y: 0.5, w: 1, h: 0.5 },
  ]
  if (n === 4) return [
    { x: 0, y: 0, w: 0.5, h: 0.5 }, { x: 0.5, y: 0, w: 0.5, h: 0.5 },
    { x: 0, y: 0.5, w: 0.5, h: 0.5 }, { x: 0.5, y: 0.5, w: 0.5, h: 0.5 },
  ]
  const rects = []
  for (let i = 0; i < n; i++) rects.push({ x: (i % 3) / 3, y: Math.floor(i / 3) / 2, w: 1 / 3, h: 1 / 2 })
  return rects
}

// Fait avancer une voiture d'un pas dt selon son input. Toute la physique
// (accélération, direction, murs, boost, collisions) est ici → partagée
// entre le mode solo (1 voiture au clavier) et le multi (N téléphones).
// ctx = { curve, trackLength, boostPads, elapsed, dt, aiCars, otherRacers,
//         spawnSparks, addShake, hitFx, buzz }
function stepRacer(r, ctx) {
  const { curve, trackLength, boostPads, elapsed, dt } = ctx
  const input    = r.input
  const boosting = elapsed < r.boostUntil
  const vTop     = boosting ? VBOOST : VMAX

  // Accélérateur / frein
  if (input.gas)        r.v = Math.min(r.v + ACCEL_MS * dt, vTop)
  else if (input.brake) r.v = Math.max(r.v - BRAKE_MS * dt, -VMAX * 0.15)
  else { r.v *= Math.max(0, 1 - DRAG * dt); if (boosting) r.v = Math.max(r.v, VMAX) }
  if (boosting && input.gas) r.v = vTop

  // Direction : autorité réduite à haute vitesse, nulle à l'arrêt
  const steerInput = input.steer
  const grip      = THREE.MathUtils.clamp(r.v / 14, -1, 1)
  const authority = 1 / (1 + (Math.abs(r.v) / VMAX) * 1.2)
  r.heading -= steerInput * TURN_RATE * grip * authority * dt
  r.v *= 1 - 0.05 * Math.abs(steerInput) * dt

  // Déplacement selon le cap réel
  r.pos.x += Math.sin(r.heading) * r.v * dt
  r.pos.z += Math.cos(r.heading) * r.v * dt

  // Projection sur le circuit → progression (t) + écart latéral
  for (let k = 0; k < 2; k++) {
    const fk = getFrame(curve, r.t)
    const e  = (r.pos.x - fk.pt.x) * fk.tan.x + (r.pos.z - fk.pt.z) * fk.tan.z
    r.t += e / trackLength
  }
  const f   = getFrame(curve, r.t)
  let   lat = (r.pos.x - f.pt.x) * f.right.x + (r.pos.z - f.pt.z) * f.right.z

  // Glissières : choc à l'entrée (selon l'angle) puis raclage + étincelles
  if (Math.abs(lat) > MAX_LAT) {
    const side = Math.sign(lat)
    lat = side * MAX_LAT
    r.pos.set(f.pt.x + f.right.x * lat, 0, f.pt.z + f.right.z * lat)
    const cx = r.pos.x + f.right.x * side, cz = r.pos.z + f.right.z * side
    const mis = Math.abs(angDiff(r.heading, f.angle))
    if (!r.onWall) {
      r.v *= Math.max(0.35, 1 - mis * 1.4)
      ctx.addShake(r, Math.min(1, 0.35 + mis * 1.2))
      ctx.spawnSparks(cx, 0.6, cz, 16); ctx.hitFx(); ctx.buzz(r)
    } else if (Math.abs(r.v) > 4 && Math.random() < dt * 25) {
      ctx.spawnSparks(cx, 0.6, cz, 3)
    }
    r.v *= Math.max(0, 1 - 1.5 * dt)
    r.heading += angDiff(f.angle, r.heading) * Math.min(1, 2.2 * dt)
    r.onWall = true
  } else {
    r.onWall = false
  }

  const pDirX = Math.sin(r.heading), pDirZ = Math.cos(r.heading)
  const minD  = CAR_R * 2

  // Collisions contre les voitures IA (elles encaissent le choc arrière)
  for (const ai of ctx.aiCars) {
    const aDirX = Math.sin(ai.mesh.rotation.y), aDirZ = Math.cos(ai.mesh.rotation.y)
    for (const sp of [1.2, -1.2]) for (const sa of [1.2, -1.2]) {
      const dx = (r.pos.x + pDirX * sp) - (ai.mesh.position.x + aDirX * sa)
      const dz = (r.pos.z + pDirZ * sp) - (ai.mesh.position.z + aDirZ * sa)
      const d2 = dx * dx + dz * dz
      if (d2 > 1e-4 && d2 < minD * minD) {
        const d = Math.sqrt(d2)
        r.pos.x += (dx / d) * (minD - d); r.pos.z += (dz / d) * (minD - d)
        const closing = pDirX * (-dx / d) + pDirZ * (-dz / d)
        const relV    = r.v - (ai.spd + ai.vBump)
        if (closing > 0.3 && relV > 0.5) {
          const impact = Math.max(relV, 3)
          ai.vBump = Math.max(ai.vBump, impact * 1.5)
          const aRightX = -aDirZ, aRightZ = aDirX
          const offSide = Math.sign(
            (r.pos.x - ai.mesh.position.x) * aRightX +
            (r.pos.z - ai.mesh.position.z) * aRightZ) || 1
          ai.latVel += -offSide * Math.min(8, 2.5 + impact * 0.8)
          ai.yawWob = Math.min(0.4, 0.15 + impact * 0.03)
          r.v = (ai.spd + ai.vBump * 0.3) * 0.92
        } else r.v *= 0.96
        if (elapsed - (ai.hitAt ?? -10) > 0.35) {
          ai.hitAt = elapsed
          ctx.spawnSparks((r.pos.x + ai.mesh.position.x) / 2, 0.7, (r.pos.z + ai.mesh.position.z) / 2, 14)
          ctx.addShake(r, 0.55); ctx.hitFx(); ctx.buzz(r)
        }
      }
    }
  }

  // Collisions contre les autres joueurs (poussée mutuelle + transfert)
  for (const o of ctx.otherRacers) {
    const oDirX = Math.sin(o.heading), oDirZ = Math.cos(o.heading)
    for (const sp of [1.2, -1.2]) for (const sa of [1.2, -1.2]) {
      const dx = (r.pos.x + pDirX * sp) - (o.pos.x + oDirX * sa)
      const dz = (r.pos.z + pDirZ * sp) - (o.pos.z + oDirZ * sa)
      const d2 = dx * dx + dz * dz
      if (d2 > 1e-4 && d2 < minD * minD) {
        const d = Math.sqrt(d2), nx = dx / d, nz = dz / d, half = (minD - d) * 0.5
        r.pos.x += nx * half; r.pos.z += nz * half
        o.pos.x -= nx * half; o.pos.z -= nz * half
        if (elapsed - (r.hitPair ?? -10) > 0.3) {
          r.hitPair = elapsed; o.hitPair = elapsed
          const closing = pDirX * (-nx) + pDirZ * (-nz)
          if (closing > 0.2 && r.v > o.v) { const tr = (r.v - o.v) * 0.4; r.v -= tr; o.v += tr * 0.9 }
          else r.v *= 0.98
          ctx.spawnSparks((r.pos.x + o.pos.x) / 2, 0.7, (r.pos.z + o.pos.z) / 2, 12)
          ctx.addShake(r, 0.4); ctx.addShake(o, 0.4); ctx.hitFx()
          ctx.buzz(r); ctx.buzz(o)
        }
      }
    }
  }

  // Pads de boost
  const tFrac = ((r.t % 1) + 1) % 1
  for (const pad of boostPads) {
    const dT   = Math.abs(tFrac - pad.t)
    const near = Math.min(dT, 1 - dT) * trackLength < 2.5
    if (near && Math.abs(lat - pad.lat) < 2.2) r.boostUntil = elapsed + 1.6
  }

  r.totalTime += dt
  r.steer += (steerInput - r.steer) * Math.min(1, dt * 10)
  r.lastLat = lat
}

// Ruban horizontal au sol entre deux offsets latéraux (avec UVs)
function buildStrip(curve, inner, outer, y, N = 600) {
  const verts = [], uvs = [], idx = []
  for (let i = 0; i <= N; i++) {
    const { pt, right } = getFrame(curve, i / N)
    verts.push(
      pt.x + right.x * inner, y, pt.z + right.z * inner,
      pt.x + right.x * outer, y, pt.z + right.z * outer,
    )
    uvs.push(0, i / N, 1, i / N)
    if (i < N) {
      const b = i * 2
      idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3)
    }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs, 2))
  geo.setIndex(idx)
  geo.computeVertexNormals()
  return geo
}

// Ruban vertical (glissière de sécurité)
function buildRail(curve, offset, y0, y1, N = 500) {
  const verts = [], idx = []
  for (let i = 0; i <= N; i++) {
    const { pt, right } = getFrame(curve, i / N)
    const x = pt.x + right.x * offset, z = pt.z + right.z * offset
    verts.push(x, y0, z, x, y1, z)
    if (i < N) {
      const b = i * 2
      idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3)
    }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
  geo.setIndex(idx)
  geo.computeVertexNormals()
  return geo
}

/* ── Voiture ── */
function makeCar(color, neon, blobTex) {
  const g     = new THREE.Group()
  const body  = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.75 })
  const dark  = new THREE.MeshStandardMaterial({ color: '#0a0a0a', roughness: 0.75 })
  const glass = new THREE.MeshStandardMaterial({ color: '#101c28', roughness: 0.05, metalness: 0.4 })
  const glow  = new THREE.MeshBasicMaterial({ color: neon })
  const rear  = new THREE.MeshBasicMaterial({ color: '#ff1a1a' })

  const addBox = (w, h, d, m, x, y, z) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m)
    mesh.position.set(x, y, z)
    g.add(mesh)
    return mesh
  }

  addBox(1.90, 0.52, 4.40, body,  0, 0.52,  0.00)   // châssis
  addBox(1.75, 0.22, 1.40, body,  0, 0.92,  1.05)   // capot
  addBox(1.75, 0.20, 1.10, body,  0, 0.88, -1.55)   // coffre
  addBox(1.55, 0.50, 1.80, glass, 0, 1.16, -0.15)   // habitacle
  addBox(2.05, 0.07, 0.50, dark,  0, 1.30, -1.95)   // aileron
  addBox(0.10, 0.28, 0.10, dark, -0.85, 1.10, -1.95)
  addBox(0.10, 0.28, 0.10, dark,  0.85, 1.10, -1.95)
  // underglow néon (clin d'œil Blur) + feux
  addBox(1.85, 0.05, 4.10, glow,  0, 0.18,  0.00)
  addBox(1.55, 0.10, 0.05, rear,  0, 0.66, -2.22)
  addBox(0.42, 0.13, 0.05, glow, -0.60, 0.58, 2.21)
  addBox(0.42, 0.13, 0.05, glow,  0.60, 0.58, 2.21)

  // Gadget de tir : tourelle sur le toit + canons avant et arrière (embout néon)
  const gunMat = new THREE.MeshStandardMaterial({ color: '#1c1f26', metalness: 0.8, roughness: 0.35 })
  addBox(0.48, 0.30, 0.64, gunMat, 0, 1.52, -0.15)   // tourelle
  const barrel = (z, dir) => {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.95, 10), gunMat)
    b.rotation.x = Math.PI / 2
    b.position.set(0, 1.55, z)
    g.add(b)
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.14, 10), glow)
    tip.rotation.x = Math.PI / 2
    tip.position.set(0, 1.55, z + dir * 0.5)
    g.add(tip)
  }
  barrel(0.55, 1)     // canon avant
  barrel(-0.85, -1)   // canon arrière

  const wGeo = new THREE.CylinderGeometry(0.40, 0.40, 0.30, 14)
  ;[[-1.02, 0.40, 1.48], [1.02, 0.40, 1.48],
    [-1.02, 0.40, -1.48], [1.02, 0.40, -1.48]].forEach(([x, y, z]) => {
    const w = new THREE.Mesh(wGeo, dark)
    w.rotation.z = Math.PI / 2
    w.position.set(x, y, z)
    g.add(w)
  })

  // Ombre portée simulée (plus léger que des vraies shadow maps)
  const blob = new THREE.Mesh(
    new THREE.PlaneGeometry(3.4, 5.6),
    new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }),
  )
  blob.rotation.x = -Math.PI / 2
  blob.position.y = 0.02
  g.add(blob)

  // Phares
  const light = new THREE.SpotLight('#ffe9c4', 0, 45, 0.45, 0.5)
  light.position.set(0, 0.7, 2.2)
  light.target.position.set(0, 0, 16)
  g.add(light, light.target)
  g.userData.headlight = light

  return g
}

/* ── Décor (paramétré par le thème du circuit) ── */
function buildScene(scene, curve, trackLength, theme) {
  _seed = 12345
  const hw = ROAD_W / 2
  const m4 = new THREE.Matrix4()

  // Ciel (dôme dégradé selon le thème)
  scene.add(new THREE.Mesh(
    new THREE.SphereGeometry(650, 24, 12),
    new THREE.MeshBasicMaterial({ map: makeSkyTex(theme.sky), side: THREE.BackSide, fog: false }),
  ))

  // Sol
  const groundTex = makeGroundTex(theme.ground)
  groundTex.repeat.set(90, 90)
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(1400, 1400),
    new THREE.MeshStandardMaterial({ map: groundTex, roughness: 1 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -0.03
  scene.add(ground)

  // Route asphaltée avec marquages peints dans la texture
  const asphalt = makeAsphaltTex()
  asphalt.repeat.set(1, Math.round(trackLength / 7))
  scene.add(new THREE.Mesh(
    buildStrip(curve, -hw, hw, 0.01),
    new THREE.MeshStandardMaterial({ map: asphalt, roughness: 0.9 }),
  ))

  // Accotements (couleur selon le thème)
  const shMat = new THREE.MeshStandardMaterial({ color: theme.shoulder, roughness: 1 })
  scene.add(new THREE.Mesh(buildStrip(curve, -hw - 2.6, -hw, 0.005), shMat))
  scene.add(new THREE.Mesh(buildStrip(curve,  hw,  hw + 2.6, 0.005), shMat))

  // Glissières de sécurité + poteaux
  const railMat = new THREE.MeshStandardMaterial({
    color: '#9aa2ab', metalness: 0.85, roughness: 0.35, side: THREE.DoubleSide,
  })
  scene.add(new THREE.Mesh(buildRail(curve, -hw - 2.4, 0.35, 0.85), railMat))
  scene.add(new THREE.Mesh(buildRail(curve,  hw + 2.4, 0.35, 0.85), railMat))

  const postGeo = new THREE.BoxGeometry(0.12, 0.85, 0.12)
  const postMat = new THREE.MeshStandardMaterial({ color: '#5b6168', roughness: 0.7 })
  const nPosts  = 160
  const posts   = new THREE.InstancedMesh(postGeo, postMat, nPosts * 2)
  for (let i = 0; i < nPosts; i++) {
    const { pt, right } = getFrame(curve, i / nPosts)
    for (const s of [-1, 1]) {
      const off = s * (hw + 2.4)
      m4.makeTranslation(pt.x + right.x * off, 0.42, pt.z + right.z * off)
      posts.setMatrixAt(i * 2 + (s > 0 ? 1 : 0), m4)
    }
  }
  scene.add(posts)

  // Panneaux chevrons sur les virages serrés
  const chevTex = makeChevronTex()
  const chevGeo = new THREE.PlaneGeometry(3.0, 1.5)
  const NS = 220
  let lastChev = -10
  for (let i = 0; i < NS; i++) {
    const t  = i / NS
    const a1 = getFrame(curve, t - 1.5 / NS).angle
    const a2 = getFrame(curve, t + 1.5 / NS).angle
    let d = a2 - a1
    if (d >  Math.PI) d -= Math.PI * 2
    if (d < -Math.PI) d += Math.PI * 2
    if (Math.abs(d) > 0.075 && i - lastChev >= 4) {
      lastChev = i
      const { pt, right, angle } = getFrame(curve, t)
      const side = d > 0 ? 1 : -1
      const mesh = new THREE.Mesh(chevGeo, new THREE.MeshBasicMaterial({ map: chevTex, side: THREE.DoubleSide }))
      mesh.position.set(pt.x + right.x * side * (hw + 3.6), 1.15, pt.z + right.z * side * (hw + 3.6))
      mesh.rotation.y = angle + Math.PI
      if (d > 0) mesh.scale.x = -1
      scene.add(mesh)
    }
  }

  // Ligne de départ en damier + portique
  const { pt: sfPt, right: sfRight, angle: sfAngle } = getFrame(curve, 0)
  const cells = 8
  for (let c = 0; c < cells; c++) {
    for (let r = 0; r < 2; r++) {
      const cell = new THREE.Mesh(
        new THREE.BoxGeometry(ROAD_W / cells, 0.02, 0.8),
        new THREE.MeshBasicMaterial({ color: (c + r) % 2 ? '#e8e8e8' : '#141414' }),
      )
      const off = -hw + (c + 0.5) * (ROAD_W / cells)
      cell.position.set(sfPt.x + sfRight.x * off, 0.025, sfPt.z + sfRight.z * off)
      cell.translateOnAxis(new THREE.Vector3(Math.sin(sfAngle), 0, Math.cos(sfAngle)), (r - 0.5) * 0.8)
      cell.rotation.y = sfAngle
      scene.add(cell)
    }
  }
  const gantry  = new THREE.Group()
  const poleMat = new THREE.MeshStandardMaterial({ color: '#3c434b', metalness: 0.8, roughness: 0.4 })
  const poleGeo = new THREE.CylinderGeometry(0.22, 0.22, 8, 10)
  const pL = new THREE.Mesh(poleGeo, poleMat); pL.position.set(-hw - 2.0, 4, 0)
  const pR = new THREE.Mesh(poleGeo, poleMat); pR.position.set( hw + 2.0, 4, 0)
  const banner = new THREE.Mesh(
    new THREE.BoxGeometry(ROAD_W + 5, 1.4, 0.3),
    new THREE.MeshStandardMaterial({ color: '#101820', roughness: 0.6 }),
  )
  banner.position.set(0, 7.6, 0)
  gantry.add(pL, pR, banner)
  gantry.position.set(sfPt.x, 0, sfPt.z)
  gantry.rotation.y = sfAngle
  scene.add(gantry)

  // Échantillons de piste pour éviter d'y poser le décor
  const samples = []
  for (let i = 0; i < 200; i++) samples.push(getFrame(curve, i / 200).pt)
  const isOnTrack = (x, z, margin) =>
    samples.some(p => (p.x - x) * (p.x - x) + (p.z - z) * (p.z - z) < margin * margin)

  // ── Décor selon le thème ──
  if (theme.decor === 'trees' || theme.decor === 'snow') {
    const snow = theme.decor === 'snow'
    const N = snow ? 120 : 130
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#4a3524', roughness: 1 })
    const folMat   = new THREE.MeshStandardMaterial({ color: snow ? '#2f5238' : '#2b4a22', roughness: 1 })
    const capMat   = new THREE.MeshStandardMaterial({ color: '#f2f6fb', roughness: 1 })
    const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.22, 0.38, 2.6, 6), trunkMat, N)
    const fols   = new THREE.InstancedMesh(new THREE.ConeGeometry(2.3, 4.8, 7), folMat, N)
    const caps   = snow ? new THREE.InstancedMesh(new THREE.ConeGeometry(1.7, 2.4, 7), capMat, N) : null
    const colVar = new THREE.Color()
    let placed = 0, guard = 0
    while (placed < N && guard++ < 3000) {
      const x = -240 + srand() * 480, z = -160 + srand() * 460
      if (isOnTrack(x, z, ROAD_W + 9)) continue
      const s = 0.8 + srand() * 1.3, rot = srand() * Math.PI * 2
      const q = new THREE.Quaternion().setFromAxisAngle(_UP, rot)
      m4.compose(new THREE.Vector3(x, 1.3 * s, z), q, new THREE.Vector3(s, s, s)); trunks.setMatrixAt(placed, m4)
      m4.compose(new THREE.Vector3(x, 4.6 * s, z), q, new THREE.Vector3(s, s, s)); fols.setMatrixAt(placed, m4)
      if (snow) { m4.compose(new THREE.Vector3(x, 6.1 * s, z), q, new THREE.Vector3(s, s, s)); caps.setMatrixAt(placed, m4) }
      else { colVar.setHSL(0.29 + srand() * 0.05, 0.45, 0.16 + srand() * 0.10); fols.setColorAt(placed, colVar) }
      placed++
    }
    scene.add(trunks, fols); if (caps) scene.add(caps)
  } else if (theme.decor === 'city') {
    // Maisons malgaches : murs chauds + toit en pyramide + fenêtres lumineuses
    const wallCols = ['#c8734a', '#b5623a', '#d98f5a', '#9c5a3c', '#e0a06a', '#c9c2b2']
    const roofMat  = new THREE.MeshStandardMaterial({ color: '#7a2f22', roughness: 0.9 })
    const winMat   = new THREE.MeshBasicMaterial({ color: '#ffe9a8' })
    let placed = 0, guard = 0
    while (placed < 70 && guard++ < 3000) {
      const x = -230 + srand() * 460, z = -150 + srand() * 440
      if (isOnTrack(x, z, ROAD_W + 11)) continue
      const w = 6 + srand() * 6, dep = 6 + srand() * 6, hgt = 6 + srand() * 12
      const wall = new THREE.Mesh(new THREE.BoxGeometry(w, hgt, dep),
        new THREE.MeshStandardMaterial({ color: wallCols[(srand() * wallCols.length) | 0], roughness: 0.85 }))
      wall.position.set(x, hgt / 2, z); wall.rotation.y = srand() * Math.PI
      scene.add(wall)
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, dep) * 0.8, 3.2, 4), roofMat)
      roof.position.set(x, hgt + 1.4, z); roof.rotation.y = wall.rotation.y + Math.PI / 4
      scene.add(roof)
      // quelques fenêtres lumineuses
      for (let f = 0; f < 3; f++) {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(1, 1.3), winMat)
        win.position.set(x, 2 + f * 3, z + dep / 2 + 0.05)
        win.rotation.y = wall.rotation.y
        if (2 + f * 3 < hgt - 1) scene.add(win)
      }
      placed++
    }
  }

  // Reliefs lointains dans la brume (thématisés)
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2 + srand() * 0.3
    const d = 330 + srand() * 130
    if (theme.decor === 'city') {
      const hgt = 30 + srand() * 60
      const tower = new THREE.Mesh(new THREE.BoxGeometry(20 + srand() * 24, hgt, 20 + srand() * 24),
        new THREE.MeshStandardMaterial({ color: '#8a94a4', roughness: 0.9 }))
      tower.position.set(Math.cos(a) * d, hgt / 2 - 4, Math.sin(a) * d)
      scene.add(tower)
    } else {
      const hgt = 35 + srand() * 55
      const hill = new THREE.Mesh(new THREE.ConeGeometry(90 + srand() * 70, hgt, 7),
        new THREE.MeshStandardMaterial({ color: theme.decor === 'snow' ? '#e6edf4' : '#33422e', roughness: 1 }))
      hill.position.set(Math.cos(a) * d, hgt / 2 - 6, Math.sin(a) * d)
      scene.add(hill)
    }
  }

  // Pads de boost
  return BOOST_PADS.map(p => {
    const { pt, right, angle } = getFrame(curve, p.t)
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.04, 3.4),
      new THREE.MeshBasicMaterial({ color: NEON_ORANGE, transparent: true, opacity: 0.9 }),
    )
    pad.position.set(pt.x + right.x * p.lat, 0.035, pt.z + right.z * p.lat)
    pad.rotation.y = angle
    scene.add(pad)
    return { ...p, mesh: pad }
  })
}

/* ─────────────────────────────────────────────────────── */

export default function RallyePage() {
  const canvasRef = useRef(null)
  const navigate  = useNavigate()
  const raceRef   = useRef({ racing: false })
  const keysRef   = useRef({})
  const phaseRef  = useRef('ready')

  // Fonctions exposées par la boucle de jeu vers les boutons React
  const soloRef      = useRef(null)
  const hostRef      = useRef(null)
  const startRaceRef = useRef(null)
  const replayRef    = useRef(null)
  const cleanupNet   = useRef(null)
  const applyCircuitRef  = useRef(null)
  const initialCircuitRef = useRef('savane')

  const [phase,     setPhase]     = useState('ready')
  const [countdown, setCountdown] = useState(3)
  const [hud,       setHud]       = useState({ speed: 0, lap: 1, pos: 1, time: 0, boost: false })
  const [result,    setResult]    = useState({ pos: 1, time: 0, board: null })
  const [hitFx,     setHitFx]     = useState(0)
  const [mode,      setMode]      = useState('solo')       // 'solo' | 'multi'
  const [players,   setPlayers]   = useState([])           // lobby / course
  const [views,     setViews]     = useState([])           // vues écran divisé (multi)
  const [room,      setRoom]      = useState({ code: null, url: null, qr: null, error: null })
  const [circuit,   setCircuit]   = useState('savane')

  const pickCircuit = (id) => { setCircuit(id); initialCircuitRef.current = id; applyCircuitRef.current?.(id) }

  useEffect(() => { phaseRef.current = phase }, [phase])

  const startCountdown = () => {
    let n = 3
    setCountdown(3)
    setPhase('countdown')
    hostRef.current?.broadcast?.({ type: 'phase', phase: 'countdown', countdown: 3 })
    const iv = setInterval(() => {
      n--
      if (n > 0) {
        setCountdown(n)
        hostRef.current?.broadcast?.({ type: 'phase', phase: 'countdown', countdown: n })
      } else {
        clearInterval(iv)
        setCountdown(0)
        setPhase('racing')
        raceRef.current.racing = true
        hostRef.current?.broadcast?.({ type: 'phase', phase: 'racing' })
      }
    }, 900)
  }

  useEffect(() => {
    const canvas   = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05

    const scene = new THREE.Scene()
    scene.fog   = new THREE.Fog('#cfc4ae', 110, 520)

    const camera    = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
    const mirrorCam = new THREE.PerspectiveCamera(58, (MIRROR.w / MIRROR.h) * (window.innerHeight / window.innerWidth), 0.5, 600)

    const sun  = new THREE.DirectionalLight('#ffd9a8', 1.35)
    scene.add(sun)
    const hemi = new THREE.HemisphereLight('#aebfd4', '#4a4a38', 0.85)
    scene.add(hemi)

    const blobTex = makeBlobShadowTex()

    // ── Circuit reconstructible (tracé + décor + thème) ──
    let curve, trackLength, startFrame, sfPt, boostPads, circuitGroup = null
    const disposeObj = (root) => root.traverse(o => {
      if (o.geometry) o.geometry.dispose()
      if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { if (m.map) m.map.dispose(); m.dispose() })
    })
    const buildCircuit = (id) => {
      const c = CIRCUITS.find(x => x.id === id) || CIRCUITS[0]
      if (circuitGroup) { scene.remove(circuitGroup); disposeObj(circuitGroup) }
      circuitGroup = new THREE.Group(); scene.add(circuitGroup)
      curve = makeTrackCurve(c.pts)
      trackLength = curve.getLength()
      startFrame = getFrame(curve, 0)
      sfPt = startFrame.pt
      boostPads = buildScene(circuitGroup, curve, trackLength, c.theme)
      // Ambiance
      const th = c.theme
      scene.background = new THREE.Color(th.bg)
      scene.fog.color.set(th.fog.color); scene.fog.near = th.fog.near; scene.fog.far = th.fog.far
      sun.color.set(th.sun.color); sun.intensity = th.sun.int; sun.position.set(...th.sun.pos)
      hemi.color.set(th.hemi.sky); hemi.groundColor.set(th.hemi.ground); hemi.intensity = th.hemi.int
    }
    buildCircuit(initialCircuitRef.current)
    // Changement de circuit depuis l'écran d'accueil (reconstruit le décor)
    applyCircuitRef.current = (id) => { buildCircuit(id); camPos.set(sfPt.x - startFrame.tan.x * 12, 5, sfPt.z - startFrame.tan.z * 12) }

    // Voitures IA (opposants en solo ; masquées en multi)
    const aiCars = AI_DEFS.map(d => {
      const mesh = makeCar(d.color, d.neon, blobTex)
      mesh.userData.headlight.intensity = 60
      scene.add(mesh)
      return { mesh, t: d.tOff, lat: d.lat, spd: d.kmh / 3.6, vBump: 0, latVel: 0, yawWob: 0, slowUntil: 0, points: 0, name: d.name }
    })
    const resetAi = () => aiCars.forEach((ai, i) => {
      ai.t = AI_DEFS[i].tOff; ai.lat = AI_DEFS[i].lat
      ai.vBump = 0; ai.latVel = 0; ai.yawWob = 0
    })

    // Étincelles de collision (pool de particules)
    const SPARKS_N  = 120
    const sparkPos  = new Float32Array(SPARKS_N * 3).fill(-999)
    const sparkVel  = new Float32Array(SPARKS_N * 3)
    const sparkLife = new Float32Array(SPARKS_N)
    const sparkGeo  = new THREE.BufferGeometry()
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3))
    const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({
      color: '#ffc84d', size: 0.28, transparent: true, opacity: 0.95,
      depthWrite: false, sizeAttenuation: true,
    }))
    sparks.frustumCulled = false
    scene.add(sparks)

    const spawnSparks = (x, y, z, n) => {
      let spawned = 0
      for (let i = 0; i < SPARKS_N && spawned < n; i++) {
        if (sparkLife[i] > 0) continue
        sparkLife[i] = 0.4 + Math.random() * 0.35
        sparkPos[i * 3] = x; sparkPos[i * 3 + 1] = y; sparkPos[i * 3 + 2] = z
        sparkVel[i * 3]     = (Math.random() - 0.5) * 11
        sparkVel[i * 3 + 1] = 2 + Math.random() * 6
        sparkVel[i * 3 + 2] = (Math.random() - 0.5) * 11
        spawned++
      }
    }
    const stepSparks = (dt) => {
      for (let i = 0; i < SPARKS_N; i++) {
        if (sparkLife[i] <= 0) continue
        sparkLife[i] -= dt
        if (sparkLife[i] <= 0) { sparkPos[i * 3 + 1] = -999; continue }
        sparkVel[i * 3 + 1] -= 22 * dt
        sparkPos[i * 3]     += sparkVel[i * 3] * dt
        sparkPos[i * 3 + 1] += sparkVel[i * 3 + 1] * dt
        sparkPos[i * 3 + 2] += sparkVel[i * 3 + 2] * dt
      }
      sparkGeo.attributes.position.needsUpdate = true
    }

    // ── Gadgets de tir : pool de projectiles (missiles néon) ──
    const projGeo = new THREE.SphereGeometry(0.38, 10, 8)
    const projectiles = Array.from({ length: PROJ_N }, () => {
      const mesh = new THREE.Mesh(projGeo, new THREE.MeshBasicMaterial({ color: '#ffee55' }))
      mesh.visible = false
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 10, 8),
        new THREE.MeshBasicMaterial({ color: '#ffee55', transparent: true, opacity: 0.35, depthWrite: false }),
      )
      mesh.add(halo)
      scene.add(mesh)
      return { mesh, halo, vx: 0, vz: 0, life: 0, owner: null, dir: 1 }
    })

    // Tir : dir = +1 (devant) ou -1 (derrière). Respecte le cooldown du canon.
    const fire = (r, dir) => {
      if (!raceRef.current.racing || r.finished) return
      const key = dir > 0 ? 'fireReadyF' : 'fireReadyB'   // cooldown indépendant avant/arrière
      if (elapsed < (r[key] ?? 0)) return
      const p = projectiles.find(q => q.life <= 0)
      if (!p) return
      r[key] = elapsed + FIRE_CD
      const hx = Math.sin(r.heading) * dir, hz = Math.cos(r.heading) * dir
      const col = dir > 0 ? '#00e5ff' : '#ff3da5'
      p.owner = r; p.dir = dir; p.life = PROJ_LIFE
      p.vx = hx * PROJ_SPEED; p.vz = hz * PROJ_SPEED
      p.mesh.position.set(r.pos.x + hx * 2.6, 1.4, r.pos.z + hz * 2.6)   // sort du canon
      p.mesh.visible = true
      p.mesh.material.color.set(col); p.halo.material.color.set(col)
      spawnSparks(p.mesh.position.x, 0.8, p.mesh.position.z, 4)
    }

    // Une voiture pilotée touchée par un tir : freinée + déviée + secousse
    const hitRacerByShot = (r) => {
      r.v *= HIT_SLOW
      r.heading += (Math.random() - 0.5) * 0.55
      addShake(r, 0.8); buzz(r)
      spawnSparks(r.pos.x, 0.8, r.pos.z, 20); hitFxThrottled()
    }
    // Une IA touchée : ralentie temporairement + zigzag
    const hitAiByShot = (ai) => {
      ai.slowUntil = elapsed + 0.9
      ai.latVel += (Math.random() - 0.5) * 9
      ai.yawWob = 0.45
      spawnSparks(ai.mesh.position.x, 0.8, ai.mesh.position.z, 20); hitFxThrottled()
    }

    const stepProjectiles = (dt) => {
      for (const p of projectiles) {
        if (p.life <= 0) continue
        p.life -= dt
        if (p.life <= 0) { p.mesh.visible = false; continue }
        p.mesh.position.x += p.vx * dt
        p.mesh.position.z += p.vz * dt
        p.halo.material.opacity = 0.2 + 0.25 * Math.abs(Math.sin(elapsed * 20))
        const px = p.mesh.position.x, pz = p.mesh.position.z
        let hit = false
        for (const r of racers) {
          if (r === p.owner || r.finished) continue
          const dx = r.pos.x - px, dz = r.pos.z - pz
          if (dx * dx + dz * dz < PROJ_R * PROJ_R) { hitRacerByShot(r); hit = true; break }
        }
        if (!hit && modeLocal === 'solo') for (const ai of aiCars) {
          const dx = ai.mesh.position.x - px, dz = ai.mesh.position.z - pz
          if (dx * dx + dz * dz < PROJ_R * PROJ_R) { hitAiByShot(ai); hit = true; break }
        }
        if (hit) { p.life = 0; p.mesh.visible = false }
      }
    }
    // Remet les armes à zéro entre deux manches
    const resetWeapons = () => {
      projectiles.forEach(p => { p.life = 0; p.mesh.visible = false; p.owner = null })
      aiCars.forEach(ai => { ai.slowUntil = 0 })
    }

    // ── Voitures pilotables ──
    let modeLocal   = 'solo'
    let lastFx      = -10
    let elapsed     = 0
    let mancheNum   = 0          // numéro de manche (course) de la série en cours
    const racers      = []
    const finishOrder = []

    // Une caméra par vue (écran divisé en multi)
    const cams = Array.from({ length: MAX_PLAYERS }, () =>
      new THREE.PerspectiveCamera(70, 1, 0.1, 1000))

    const gridSlot = (i) => {
      const col = i % 2, row = Math.floor(i / 2)
      return { lat: col === 0 ? -3.2 : 3.2, back: 5 + row * 6 }
    }
    const placeOnGrid = (r, slot) => {
      r.pos.set(
        sfPt.x - startFrame.tan.x * slot.back + startFrame.right.x * slot.lat, 0,
        sfPt.z - startFrame.tan.z * slot.back + startFrame.right.z * slot.lat,
      )
      r.heading = startFrame.angle
      r.t = -slot.back / trackLength
      r.v = 0; r.totalTime = 0; r.finished = false; r.finishTime = 0
      r.onWall = false; r.boostUntil = 0; r.steer = 0
      r.fireReadyF = 0; r.fireReadyB = 0; r._pf = false; r._pb = false
      r.mesh.position.copy(r.pos)
      r.mesh.rotation.set(0, r.heading, 0)
    }

    // Voiture locale (mode solo, pilotée au clavier)
    const localCar = makeCar('#e53935', '#00e5ff', blobTex)
    localCar.userData.headlight.intensity = 160
    localCar.visible = false
    scene.add(localCar)
    const localRacer = makeRacer(startFrame, { mesh: localCar, color: RACER_COLORS[0], name: 'Vous', num: 1, conn: null })

    const buzzThrottle = new Map()
    const buzz = (r) => {
      if (!r.conn) return
      if (elapsed - (buzzThrottle.get(r) ?? -10) < 0.25) return
      buzzThrottle.set(r, elapsed)
      try { r.conn.send({ type: 'buzz' }) } catch (_) {}
    }
    const addShake = (r, amount) => { r.shake = Math.max(r.shake, amount) }
    const hitFxThrottled = () => {
      if (elapsed - lastFx > 0.5) { lastFx = elapsed; setHitFx(h => h + 1) }
    }

    const syncPlayers = () => setPlayers(racers.map(r => ({
      num: r.num, name: r.name, color: r.color.body,
    })))

    // Classement de toutes les voitures par progression
    const rankAll = () => {
      const list = racers.map(r => ({ r, prog: r.finished ? 1e6 - r.finishTime : r.t }))
      if (modeLocal === 'solo') {
        for (const ai of aiCars) list.push({ ai, prog: ai.t })
      }
      list.sort((a, b) => b.prog - a.prog)
      return list
    }

    const lapOf = (r) => Math.min(Math.floor(Math.max(0, r.t)) + 1, LAPS)

    const endRace = () => {
      raceRef.current.racing = false
      mancheNum += 1

      // Participants unifiés (joueurs + IA en solo), classés par progression.
      // En solo on classe TOUT LE MONDE à la progression réelle (r.t vs ai.t) :
      // sinon le joueur, qui déclenche la fin en franchissant l'arrivée, hérite
      // d'un bonus « fini » que les IA n'ont jamais → il finissait toujours 1er.
      // En multi, l'ordre d'arrivée (temps) départage les finissants.
      const parts = racers.map(r => ({
        o: r, name: r.name, color: r.color.body,
        prog: (modeLocal === 'solo' || !r.finished) ? r.t : 1e6 - r.finishTime,
        time: r.finished ? r.finishTime : null,
      }))
      if (modeLocal === 'solo') aiCars.forEach((ai, i) => parts.push({
        o: ai, name: AI_DEFS[i].name, color: AI_DEFS[i].color, prog: ai.t, time: null,
      }))
      parts.sort((a, b) => b.prog - a.prog)

      // Points de la manche + cumul sur l'objet voiture
      parts.forEach((p, i) => {
        p.place  = i + 1
        p.gained = MANCHE_PTS[i] ?? 0
        p.o.points = (p.o.points || 0) + p.gained
      })

      // Classement de la manche + classement général (somme des points)
      const board = parts.map(p => ({ pos: p.place, name: p.name, color: p.color, time: p.time, gained: p.gained }))
      const standings = parts
        .map(p => ({ name: p.name, color: p.color, place: p.place, gained: p.gained, points: p.o.points }))
        .sort((a, b) => b.points - a.points || a.place - b.place)
        .map((s, i) => ({ ...s, rank: i + 1 }))

      const meP = parts.find(p => p.o === localRacer)
      setResult({ pos: meP ? meP.place : 1, time: localRacer.totalTime, board, standings, manche: mancheNum })

      if (modeLocal !== 'solo') {
        hostRef.current?.broadcast?.({ type: 'phase', phase: 'finished' })
        parts.forEach(p => {
          if (p.o.conn) { try { p.o.conn.send({ type: 'result', pos: p.place, points: p.o.points, manche: mancheNum }) } catch (_) {} }
        })
      }
      setPhase('finished')
    }

    const onRacerFinish = (r) => {
      r.finished = true
      r.finishTime = r.totalTime
      finishOrder.push(r)
      r.place = finishOrder.length
      if (r.conn) { try { r.conn.send({ type: 'result', pos: r.place }) } catch (_) {} }
    }

    // ── Boucle de jeu ──
    let animId, lastNow = performance.now(), hudTick = 0
    let W = window.innerWidth, H = window.innerHeight
    const camPos  = new THREE.Vector3()
    const camLook = new THREE.Vector3()
    const pressed = (...names) => names.some(n => keysRef.current[n])

    camPos.set(sfPt.x - startFrame.tan.x * 12, 5, sfPt.z - startFrame.tan.z * 12)
    camera.position.copy(camPos)
    camera.lookAt(sfPt.x, 1.3, sfPt.z)

    function tick(now) {
      animId = requestAnimationFrame(tick)
      const dt = Math.min((now - lastNow) / 1000, 0.05)
      lastNow  = now
      elapsed += dt
      const racing = raceRef.current.racing
      const aiActive = modeLocal === 'solo'

      // IA
      aiCars.forEach(ai => { ai.mesh.visible = aiActive })
      if (racing && aiActive) {
        aiCars.forEach(ai => {
          const spd = elapsed < ai.slowUntil ? ai.spd * 0.4 : ai.spd
          ai.t += ((spd + ai.vBump) / trackLength) * dt
          ai.vBump  *= Math.max(0, 1 - 1.2 * dt)
          ai.lat    += ai.latVel * dt
          ai.latVel *= Math.max(0, 1 - 2.0 * dt)
          if (Math.abs(ai.lat) > MAX_LAT - 0.6) { ai.lat = Math.sign(ai.lat) * (MAX_LAT - 0.6); ai.latVel = 0 }
          ai.yawWob *= Math.max(0, 1 - 2.0 * dt)
        })
      }
      if (aiActive) aiCars.forEach(ai => {
        const f = getFrame(curve, ai.t)
        ai.mesh.position.set(f.pt.x + f.right.x * ai.lat, 0, f.pt.z + f.right.z * ai.lat)
        ai.mesh.rotation.y = f.angle + Math.sin(elapsed * 16) * ai.yawWob
      })

      const ctx = {
        curve, trackLength, boostPads, elapsed, dt,
        aiCars: aiActive ? aiCars : [], otherRacers: [],
        spawnSparks, addShake, hitFx: hitFxThrottled, buzz,
      }

      if (racing) {
        // Input clavier → voiture locale (solo)
        if (modeLocal === 'solo') {
          const r = localRacer
          r.input.steer = (pressed('arrowright', 'd') ? 1 : 0) - (pressed('arrowleft', 'a', 'q') ? 1 : 0)
          r.input.gas   = pressed('arrowup', 'w', 'z')
          r.input.brake = pressed('arrowdown', 's')
          // Tir : Espace = devant, B = derrière (front-de-touche pour un tir par appui)
          const fF = pressed(' '), fB = pressed('b')
          if (fF && !r._pf) fire(r, +1)
          if (fB && !r._pb) fire(r, -1)
          r._pf = fF; r._pb = fB
        }
        for (const r of racers) {
          if (r.finished) continue
          ctx.otherRacers = racers.filter(x => x !== r && !x.finished)
          stepRacer(r, ctx)
          if (r.t >= LAPS && !r.finished) onRacerFinish(r)
        }
        if (racers.length && racers.every(r => r.finished)) endRace()

        hudTick += dt
        if (hudTick > 0.15) {
          hudTick = 0
          const ranked = rankAll()
          if (modeLocal === 'solo') {
            const r = localRacer
            const pos = ranked.findIndex(c => c.r === r) + 1
            setHud({ speed: Math.round(Math.abs(r.v) * 3.6), lap: lapOf(r), pos, time: r.totalTime, boost: elapsed < r.boostUntil })
          } else {
            const rects = splitRects(racers.length)
            const posOf = new Map(ranked.map((c, i) => [c.r, i + 1]))
            setViews(racers.map((r, i) => ({
              ...rects[i], num: r.num, name: r.name, color: r.color.body,
              pos: posOf.get(r), total: racers.length, lap: lapOf(r),
              speed: Math.round(Math.abs(r.v) * 3.6), boost: elapsed < r.boostUntil, finished: r.finished,
            })))
            ranked.forEach((c, i) => {
              const rr = c.r
              if (rr.conn) { try { rr.conn.send({ type: 'hud', pos: i + 1, lap: lapOf(rr), speed: Math.round(Math.abs(rr.v) * 3.6), boost: elapsed < rr.boostUntil, total: ranked.length }) } catch (_) {} }
            })
          }
        }
      }

      // Placement des voitures pilotées
      for (const r of racers) {
        r.mesh.position.copy(r.pos)
        r.mesh.rotation.set(0, r.heading, -r.steer * 0.10)
      }

      const pulse = 0.55 + 0.45 * Math.sin(elapsed * 8)
      boostPads.forEach(p => { p.mesh.material.opacity = 0.4 + 0.5 * pulse })
      stepSparks(dt)
      stepProjectiles(dt)

      // Caméra poursuite d'une voiture, cadrée sur son rectangle de vue
      const chaseCam = (cam, r, rect) => {
        if (!r.camPos) r.camPos = new THREE.Vector3(r.pos.x, 3, r.pos.z)
        const spdRatio = Math.abs(r.v) / VMAX
        const back = 6.2 + spdRatio * 1.8
        const dirX = Math.sin(r.heading), dirZ = Math.cos(r.heading)
        r.camPos.lerp(new THREE.Vector3(r.pos.x - dirX * back, 2.9 + spdRatio * 0.6, r.pos.z - dirZ * back), Math.min(1, dt * 5))
        cam.position.copy(r.camPos)
        if (r.shake > 0.01) {
          cam.position.x += (Math.random() - 0.5) * r.shake * 0.7
          cam.position.y += (Math.random() - 0.5) * r.shake * 0.45
          cam.position.z += (Math.random() - 0.5) * r.shake * 0.7
          r.shake *= Math.max(0, 1 - 6 * dt)
        }
        cam.lookAt(r.pos.x, 1.3, r.pos.z)
        const targetFov = 70 + spdRatio * 9 + (elapsed < r.boostUntil ? 8 : 0)
        cam.fov += (targetFov - cam.fov) * Math.min(1, dt * 4)
        cam.aspect = (rect.w * W) / (rect.h * H)
        cam.updateProjectionMatrix()
      }
      const orbitCam = (cam) => {
        const a = elapsed * 0.18
        camPos.lerp(new THREE.Vector3(sfPt.x + Math.cos(a) * 24, 9, sfPt.z + Math.sin(a) * 24), Math.min(1, dt * 1.5))
        cam.position.copy(camPos)
        cam.aspect = W / H
        cam.updateProjectionMatrix()
        cam.lookAt(sfPt.x, 1, sfPt.z)
      }
      const renderRect = (cam, rect) => {
        const vw = Math.ceil(rect.w * W), vh = Math.ceil(rect.h * H)
        const vx = Math.floor(rect.x * W), vy = Math.floor(H - (rect.y + rect.h) * H)
        renderer.setViewport(vx, vy, vw, vh)
        renderer.setScissor(vx, vy, vw, vh)
        renderer.render(scene, cam)
      }

      const full = { x: 0, y: 0, w: 1, h: 1 }
      const staged = racers.length > 0 &&
        (phaseRef.current === 'countdown' || phaseRef.current === 'racing' || phaseRef.current === 'finished')

      renderer.setScissorTest(true)
      if (modeLocal === 'solo') {
        if (racers.length) chaseCam(camera, localRacer, full)
        else orbitCam(camera)
        renderRect(camera, full)
        // Rétroviseur (solo uniquement)
        if (racing && racers.length) {
          const r = localRacer
          const dirX = Math.sin(r.heading), dirZ = Math.cos(r.heading)
          mirrorCam.position.set(r.pos.x + dirX * 1.5, 2.6, r.pos.z + dirZ * 1.5)
          mirrorCam.lookAt(r.pos.x - dirX * 40, 1.6, r.pos.z - dirZ * 40)
          const mw = MIRROR.w * W, mh = MIRROR.h * H
          const mx = MIRROR.x * W, my = H - MIRROR.top * H - mh
          mirrorCam.aspect = mw / mh
          mirrorCam.updateProjectionMatrix()
          renderer.setViewport(mx, my, mw, mh)
          renderer.setScissor(mx, my, mw, mh)
          renderer.render(scene, mirrorCam)
        }
      } else if (staged) {
        // Écran divisé : une vue par joueur
        const rects = splitRects(racers.length)
        racers.forEach((r, i) => { chaseCam(cams[i], r, rects[i]); renderRect(cams[i], rects[i]) })
      } else {
        orbitCam(camera)
        renderRect(camera, full)
      }
      renderer.setScissorTest(false)
    }
    tick(performance.now())

    // ── Actions exposées aux boutons ──
    soloRef.current = () => {
      modeLocal = 'solo'; setMode('solo')
      racers.length = 0; finishOrder.length = 0
      mancheNum = 0
      localCar.visible = true
      localRacer.points = 0
      aiCars.forEach(ai => { ai.points = 0 })
      placeOnGrid(localRacer, { lat: 0, back: 5 })
      racers.push(localRacer)
      resetAi(); resetWeapons()
      startCountdown()
    }

    hostRef.current = null   // remplacé par l'objet host une fois créé
    startRaceRef.current = () => {
      if (!racers.length) return
      finishOrder.length = 0
      mancheNum = 0
      racers.forEach((r, i) => { r.points = 0; placeOnGrid(r, gridSlot(i)) })
      resetWeapons()
      startCountdown()
    }

    // Manche suivante : on garde les points cumulés (endRace incrémente mancheNum)
    replayRef.current = () => {
      finishOrder.length = 0
      if (modeLocal === 'solo') { placeOnGrid(localRacer, { lat: 0, back: 5 }); resetAi() }
      else racers.forEach((r, i) => placeOnGrid(r, gridSlot(i)))
      resetWeapons()
      startCountdown()
    }

    // Démarre l'hébergement multijoueur (création de l'hôte PeerJS)
    let hostObj = null
    const beginHost = () => {
      modeLocal = 'multi'; setMode('multi')
      localCar.visible = false
      racers.length = 0; finishOrder.length = 0
      syncPlayers(); setViews([])
      setPhase('lobby')

      hostObj = createHost({
        onReady: (code) => {
          const url = joinUrl(code)
          setRoom({ code, url, qr: null, error: null })
          QRCode.toDataURL(url, { margin: 1, width: 320 })
            .then(qr => setRoom(rm => ({ ...rm, qr })))
            .catch(() => {})
        },
        onError: (err) => setRoom(rm => ({ ...rm, error: String(err?.type || err) })),
        onConnect: (id, conn) => {
          if (racers.length >= MAX_PLAYERS) { try { conn.send({ type: 'full' }) } catch (_) {} return }
          const idx = racers.length
          const col = RACER_COLORS[idx % RACER_COLORS.length]
          const rawName = (conn.metadata && conn.metadata.name || '').toString().trim()
          const name = rawName ? rawName.slice(0, 12) : col.name
          const mesh = makeCar(col.body, col.neon, blobTex)
          mesh.userData.headlight.intensity = 140
          scene.add(mesh)
          const r = makeRacer(startFrame, { mesh, color: col, name, num: idx + 1, conn, id })
          placeOnGrid(r, gridSlot(idx))
          racers.push(r)
          try {
            conn.send({ type: 'welcome', color: col.body, name, num: idx + 1 })
            conn.send({ type: 'phase', phase: phaseRef.current === 'lobby' ? 'lobby' : phaseRef.current })
          } catch (_) {}
          syncPlayers()
        },
        onInput: (id, data) => {
          const r = racers.find(x => x.id === id)
          if (!r) return
          r.input.steer = THREE.MathUtils.clamp(Number(data.steer) || 0, -1, 1)
          r.input.gas   = !!data.gas
          r.input.brake = !!data.brake
          // Tir : front-de-touche côté hôte (un projectile par appui)
          const fF = !!data.fireF, fB = !!data.fireB
          if (fF && !r._pf) fire(r, +1)
          if (fB && !r._pb) fire(r, -1)
          r._pf = fF; r._pb = fB
        },
        onDisconnect: (id) => {
          const i = racers.findIndex(x => x.id === id)
          if (i < 0) return
          scene.remove(racers[i].mesh)
          racers.splice(i, 1)
          syncPlayers()
        },
      })
      hostRef.current = hostObj
    }
    // exposé via ref séparée
    cleanupNet.current = () => { if (hostObj) { hostObj.destroy(); hostObj = null } hostRef.current = null }
    // permet au bouton d'appeler beginHost
    hostRef.beginHost = beginHost

    if (import.meta.env.DEV) window.__rallye = { racers, aiCars, projectiles, trackLength, fire, getFrame: t => getFrame(curve, t) }

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight
      renderer.setSize(W, H)
      camera.aspect = W / H
      camera.updateProjectionMatrix()
    }
    const setKey = (e, down) => {
      const k = e.key?.toLowerCase()
      if (k) keysRef.current[k] = down
      if (e.code === 'KeyW') keysRef.current['w'] = down
      if (e.code === 'KeyA') keysRef.current['a'] = down
      if (e.code === 'KeyS') keysRef.current['s'] = down
      if (e.code === 'KeyD') keysRef.current['d'] = down
      if (k && GAME_KEYS.has(k)) e.preventDefault()
    }
    const onKeyDown = e => setKey(e, true)
    const onKeyUp   = e => setKey(e, false)
    const onBlur    = () => { keysRef.current = {} }

    window.addEventListener('resize',  onResize)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup',   onKeyUp)
    window.addEventListener('blur',    onBlur)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize',  onResize)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup',   onKeyUp)
      window.removeEventListener('blur',    onBlur)
      if (hostObj) hostObj.destroy()
      renderer.dispose()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const fmtTime = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}.${String(Math.floor((t % 1) * 10))}`

  const leaveToMenu = () => { cleanupNet.current?.(); navigate('/') }

  const touch = (key) => ({
    onTouchStart: (e) => { e.preventDefault(); keysRef.current[key] = true },
    onTouchEnd:   (e) => { e.preventDefault(); keysRef.current[key] = false },
    onMouseDown:  ()  => { keysRef.current[key] = true },
    onMouseUp:    ()  => { keysRef.current[key] = false },
    onMouseLeave: ()  => { keysRef.current[key] = false },
  })

  return (
    <div className={`rallye${hud.boost && phase === 'racing' && mode === 'solo' ? ' rallye--boost' : ''}`}>
      <canvas ref={canvasRef} className="rallye__canvas" />
      <div className="rallye__vignette" />
      {hitFx > 0 && <div key={hitFx} className="rallye__hit-flash" />}

      {/* ── HUD course ── */}
      {phase === 'racing' && mode === 'solo' && (
        <>
          <div className="rallye__mirror-frame" />
          <div className="rallye__hud">
            <div className="rallye__pill rallye__pos">
              <span className="rallye__pos-n">{hud.pos}</span>
              <span className="rallye__pos-e">{hud.pos === 1 ? 'er' : 'e'}</span>
              <span className="rallye__pos-t">/ 4</span>
            </div>
            <div className="rallye__pill rallye__lap">TOUR <b>{hud.lap}</b> / {LAPS}</div>
            <div className="rallye__pill rallye__time">{fmtTime(hud.time)}</div>
          </div>
          <div className="rallye__speedo">
            {hud.boost && <div className="rallye__boost-tag">BOOST</div>}
            <div className="rallye__speedo-val">{hud.speed}</div>
            <div className="rallye__speedo-unit">km/h</div>
            <div className="rallye__speedo-bar">
              <div className="rallye__speedo-fill" style={{ width: `${Math.min(100, (hud.speed / BOOST_KMH) * 100)}%` }} />
            </div>
          </div>
        </>
      )}

      {/* ── Écran divisé : HUD + séparateurs par vue (multi) ── */}
      {mode === 'multi' && (phase === 'racing' || phase === 'countdown') && views.map((v) => (
        <div
          key={v.num}
          className="rallye__view"
          style={{ left: `${v.x * 100}%`, top: `${v.y * 100}%`, width: `${v.w * 100}%`, height: `${v.h * 100}%` }}
        >
          <div className="rallye__view-hud">
            <span className="rallye__view-pos" style={{ color: v.color }}>{v.pos}<i>/{v.total}</i></span>
            <span className="rallye__view-name" style={{ background: v.color }}>{v.name}</span>
            <span className="rallye__view-lap">{v.finished ? '🏁' : `T${v.lap}`}</span>
            <span className={`rallye__view-spd${v.boost ? ' rallye__view-spd--boost' : ''}`}>{v.speed}<i>km/h</i></span>
          </div>
        </div>
      ))}

      {/* ── Compte à rebours ── */}
      {phase === 'countdown' && (
        <div className="rallye__center-msg">
          <div className="rallye__countdown" key={countdown}>{countdown || 'GO !'}</div>
        </div>
      )}

      {/* ── Écran d'accueil ── */}
      {phase === 'ready' && (
        <div className="rallye__overlay">
          <div className="rallye__logo">🏎️</div>
          <h1 className="rallye__title">2Rally</h1>
          <p className="rallye__sub">Choisis ton circuit · {LAPS} tours · roule sur les pads orange pour un BOOST</p>

          <div className="rallye__circuits">
            {CIRCUITS.map(c => (
              <button
                key={c.id}
                className={`rallye__circuit${circuit === c.id ? ' rallye__circuit--sel' : ''}`}
                onClick={() => pickCircuit(c.id)}
              >
                <span className="rallye__circuit-emoji">{c.emoji}</span>
                <span className="rallye__circuit-name">{c.name}</span>
              </button>
            ))}
          </div>

          <p className="rallye__controls">↑ accélérer · ↓ freiner · ← → diriger · <b>Espace</b> tir avant · <b>B</b> tir arrière</p>
          <div className="rallye__btns">
            <button className="rallye__btn" onClick={() => soloRef.current?.()}>SOLO</button>
            <button className="rallye__btn rallye__btn--accent" onClick={() => hostRef.beginHost?.()}>MULTIJOUEUR 📱</button>
            <button className="rallye__btn rallye__btn--sec" onClick={leaveToMenu}>Quitter</button>
          </div>
        </div>
      )}

      {/* ── Salon multijoueur (QR code) ── */}
      {phase === 'lobby' && (
        <div className="rallye__overlay">
          <h1 className="rallye__title rallye__title--sm">SALON MULTIJOUEUR</h1>
          <p className="rallye__sub">Scanne le QR code avec ton téléphone pour rejoindre la course</p>
          <div className="rallye__lobby">
            <div className="rallye__qr">
              {room.qr
                ? <img src={room.qr} alt="QR code" />
                : <div className="rallye__qr-wait">{room.error ? '⚠ ' + room.error : 'Connexion au serveur…'}</div>}
              {room.code && <div className="rallye__code">CODE&nbsp;: <b>{room.code}</b></div>}
              {room.url && <div className="rallye__url">{room.url.replace(/^https?:\/\//, '')}</div>}
            </div>
            <div className="rallye__lobby-players">
              <div className="rallye__lobby-h">JOUEURS ({players.length}/{MAX_PLAYERS})</div>
              {players.length === 0 && <div className="rallye__lobby-empty">En attente de joueurs…</div>}
              {players.map(p => (
                <div key={p.num} className="rallye__lobby-p">
                  <span className="rallye__board-dot" style={{ background: p.color }} />
                  {p.name}
                </div>
              ))}
            </div>
          </div>
          <div className="rallye__btns">
            <button className="rallye__btn" disabled={players.length === 0} onClick={() => startRaceRef.current?.()}>
              LANCER LA COURSE
            </button>
            <button className="rallye__btn rallye__btn--sec" onClick={leaveToMenu}>Quitter</button>
          </div>
        </div>
      )}

      {/* ── Arrivée ── */}
      {phase === 'finished' && (
        <div className="rallye__overlay">
          {mode === 'solo' ? (
            <>
              <div className="rallye__logo">{result.pos === 1 ? '🏆' : '🏁'}</div>
              <h1 className="rallye__title rallye__title--sm">
                {result.pos === 1 ? 'VICTOIRE !' : `${result.pos}e PLACE`}
                <span className="rallye__manche"> · Manche {result.manche}</span>
              </h1>
              <p className="rallye__sub">Temps final : {fmtTime(result.time)}</p>
            </>
          ) : (
            <>
              <div className="rallye__logo">🏁</div>
              <h1 className="rallye__title rallye__title--sm">
                RÉSULTATS<span className="rallye__manche"> · Manche {result.manche}</span>
              </h1>
            </>
          )}

          {/* Classement général cumulé (somme des points de chaque manche) */}
          <div className="rallye__standings">
            <div className="rallye__board-title">CLASSEMENT GÉNÉRAL · SOMME DES POINTS</div>
            {(result.standings || []).map((s) => (
              <div key={s.name + s.rank} className={`rallye__st-row${s.rank === 1 ? ' rallye__st-row--lead' : ''}`}>
                <span className="rallye__board-pos">{s.rank}</span>
                <span className="rallye__board-dot" style={{ background: s.color }} />
                <span className="rallye__board-name">{s.name}</span>
                <span className="rallye__st-manche">{s.place}<i>e</i> · +{s.gained}</span>
                <span className="rallye__st-pts">{s.points}<i>pts</i></span>
              </div>
            ))}
          </div>

          {/* Choix du circuit pour la manche suivante (plus besoin de quitter) */}
          <p className="rallye__sub rallye__sub--sm">Circuit de la prochaine manche</p>
          <div className="rallye__circuits rallye__circuits--sm">
            {CIRCUITS.map(c => (
              <button
                key={c.id}
                className={`rallye__circuit${circuit === c.id ? ' rallye__circuit--sel' : ''}`}
                onClick={() => pickCircuit(c.id)}
              >
                <span className="rallye__circuit-emoji">{c.emoji}</span>
                <span className="rallye__circuit-name">{c.name}</span>
              </button>
            ))}
          </div>

          <div className="rallye__btns">
            <button className="rallye__btn" onClick={() => replayRef.current?.()}>Manche suivante ▶</button>
            <button className="rallye__btn rallye__btn--sec" onClick={leaveToMenu}>Quitter</button>
          </div>
        </div>
      )}

      {/* ── Contrôles tactiles (solo sur l'écran hôte) ── */}
      {phase === 'racing' && mode === 'solo' && (
        <div className="rallye__touch">
          <button className="rallye__tbtn" {...touch('arrowleft')}>◀</button>
          <div className="rallye__touch-mid">
            <button className="rallye__tbtn" {...touch('arrowup')}>▲</button>
            <button className="rallye__tbtn" {...touch('arrowdown')}>▼</button>
          </div>
          <button className="rallye__tbtn" {...touch('arrowright')}>▶</button>
          <div className="rallye__touch-fire">
            <button className="rallye__tbtn rallye__tbtn--fire" {...touch(' ')}>🎯▲</button>
            <button className="rallye__tbtn rallye__tbtn--fire" {...touch('b')}>🎯▼</button>
          </div>
        </div>
      )}
    </div>
  )
}
