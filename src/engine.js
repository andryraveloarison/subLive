// Moteur du runner "subLive" — VRAI 3D avec Three.js.
// Le monde défile vers la caméra (forward = -z). Le joueur reste en z=0.

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const PLAYER_HEIGHT = 2.4        // hauteur cible du modèle GLB (pieds au sol)
const LANE = 2.2                 // écart entre voies (unités monde)
const LANES = [-LANE, 0, LANE]
const SPAWN_Z = -140             // profondeur d'apparition
const DESPAWN_Z = 14             // au-delà (derrière la caméra) on supprime
const GRAVITY = 34
const JUMP_V = 12.5
const ROLL_TIME = 0.75           // durée de la glissade avant de se relever
const TRACK_HALF = LANE * 1.8    // demi-largeur de la voie ballastée
const TRAIN_CLIMB = 5            // longueur de la rampe avant du train : on grimpe dessus sans sauter
const POLICE_FAR = 11            // distance max en jeu propre (juste derrière, visible)
const POLICE_BASE = 7.0          // distance après 1re faute (menaçant)
const POLICE_CATCH = 1.7         // en-deçà, la police attrape -> perdu
const POLICE_SIDE_GAIN = 2.8     // rapprochement à chaque choc latéral
const POLICE_RECEDE = 0.04       // vitesse de recul en jeu propre (lent)
const STUMBLE_TIME = 0.8         // durée où le joueur est à terre avant de se relever
const MAGNET_TIME = 8            // durée de l'aimant (attire les pièces)
const BOOTS_TIME = 8            // durée des bottes (super-saut)
const MAGNET_RANGE = 20          // portée d'attraction de l'aimant (en profondeur)
const BOOTS_JUMP_V = 20.5        // vitesse de saut avec les bottes (franchit les trains)
const ROOF_COIN_Y = 4.3          // hauteur des pièces posées au-dessus des trains

// ── Biomes : le décor change selon les PIÈCES RAMASSÉES (points gagnés),
// pas la distance. ville (départ) → forêt (100) → désert (200) → neige (300).
// `decor` = modèles le long de la piste. `mtn` = couleur des montagnes du fond.
const COIN_PTS = 15              // points ajoutés au score par pièce
const BIOME_STEP = 100           // pièces par biome (boucle tous les 4 → 400)
const BIOMES = [
  {
    name: 'Ville', minCoins: 0, decor: ['bldgA', 'bldgB', 'tower'], mtn: '#8a97a6',
    skyTop: '#3f86d4', skyBot: '#dfeaf5', bg: '#bcd9f0',
    fog: '#cfe0f0', fogNear: 60, fogFar: 165,
    sunCol: '#fff5e0', sunInt: 1.5, sunPos: [-14, 30, 8],
    hemiSky: '#bcd9f0', hemiGround: '#6b5b4a', hemiInt: 1.0,
    ambCol: '#cdd8e8', ambInt: 0.55,
    ground: '#8a8f96', ballast: '#7d7f86',
  },
  {
    name: 'Forêt', minCoins: 100, decor: ['tree', 'banana', 'house'], mtn: '#3a5236',
    skyTop: '#5ba3d4', skyBot: '#d4e6d0', bg: '#cfe0cf',
    fog: '#c2dcc0', fogNear: 55, fogFar: 150,
    sunCol: '#fff6e0', sunInt: 1.7, sunPos: [-14, 30, 8],
    hemiSky: '#cfe9ff', hemiGround: '#4a6a3a', hemiInt: 1.05,
    ambCol: '#c4e0c0', ambInt: 0.55,
    ground: '#3d7f2e', ballast: '#a4562f',
  },
  {
    name: 'Désert', minCoins: 200, decor: ['baobab'], mtn: '#b28a52',
    skyTop: '#e0a94e', skyBot: '#f5e6c0', bg: '#e9d3a3',
    fog: '#e9d3a3', fogNear: 60, fogFar: 175,
    sunCol: '#ffedc0', sunInt: 1.75, sunPos: [-10, 28, 10],
    hemiSky: '#f0dcae', hemiGround: '#b08a4a', hemiInt: 1.05,
    ambCol: '#f0e2c4', ambInt: 0.6,
    ground: '#d8b877', ballast: '#c39a5a',
  },
  {
    name: 'Neige', minCoins: 300, decor: ['pine'], mtn: '#d8e3ee',
    skyTop: '#aab8c6', skyBot: '#f6f9fc', bg: '#e8eef4',
    fog: '#e8eef4', fogNear: 45, fogFar: 135,
    sunCol: '#e6eef6', sunInt: 1.15, sunPos: [-12, 26, 10],
    hemiSky: '#dce6f0', hemiGround: '#b8c4d0', hemiInt: 1.1,
    ambCol: '#e6edf4', ambInt: 0.7,
    ground: '#eef3f8', ballast: '#cfd8e2',
  },
]
// Pré-résout les couleurs hex en THREE.Color une seule fois (réutilisées au lerp).
for (const b of BIOMES) {
  b._c = {
    skyTop: new THREE.Color(b.skyTop), skyBot: new THREE.Color(b.skyBot), bg: new THREE.Color(b.bg),
    fog: new THREE.Color(b.fog), sunCol: new THREE.Color(b.sunCol),
    hemiSky: new THREE.Color(b.hemiSky), hemiGround: new THREE.Color(b.hemiGround),
    ambCol: new THREE.Color(b.ambCol), ground: new THREE.Color(b.ground), ballast: new THREE.Color(b.ballast),
    mtn: new THREE.Color(b.mtn),
  }
}

// Coin (nez du train montable) : pente lisse du bord avant (zFront, y=0) jusqu'au
// toit (zFront-depth, y=h). Largeur ±w. computeVertexNormals lisse l'ombrage.
function makeWedgeGeo(w, h, zFront, depth) {
  const zBack = zFront - depth
  const g = new THREE.BufferGeometry()
  const v = [
    -w, 0, zFront,   // 0 gauche - pointe avant (sol)
    -w, h, zBack,    // 1 gauche - haut arrière (toit)
    -w, 0, zBack,    // 2 gauche - bas arrière
     w, 0, zFront,   // 3 droite - pointe avant
     w, h, zBack,    // 4 droite - haut arrière
     w, 0, zBack,    // 5 droite - bas arrière
  ]
  const idx = [
    0, 1, 2,            // flanc gauche
    3, 5, 4,            // flanc droit
    0, 3, 4, 0, 4, 1,   // pente (dessus) — la surface montante
    0, 2, 5, 0, 5, 3,   // dessous (sol)
    2, 1, 4, 2, 4, 5,   // face arrière verticale (contre le corps)
  ]
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3))
  g.setIndex(idx)
  g.computeVertexNormals()
  return g
}

export class Game {
  constructor(canvas, callbacks = {}) {
    this.canvas = canvas
    this.cb = callbacks
    this.raf = null
    console.log('[engine] build: climb-centered v3')   // marqueur : confirme que le code à jour tourne
    this._usingGameModels = false   // modèles course/saut actifs pendant une partie
    this._runEntry = null           // { obj, mixer } préchargé avatar1 (course)
    this._jumpEntry = null          // { obj, mixer } préchargé avatar1 (saut)
    this._plongeEntry = null        // { obj, mixer } préchargé avatar1 (plongeon)
    this._run2Entry = null          // { obj, mixer } préchargé avatar2 (course)
    this._jump2Entry = null         // { obj, mixer } préchargé avatar2 (saut)
    this._activeAvatar = 1          // avatar actif (1 ou 2)
    this._policeTargetZ = 999       // cible de policeZ (policeZ suit en douceur)
    this._policeEntry = null        // { obj, mixer } préchargé (police poursuivante)
    this._policeBoxEntry = null     // { obj, mixer } préchargé (police qui boxe à la capture)
    this._usingPoliceModel = false
    this._initThree()
    this._buildWorld()
    this.reset()
    this._bindResize()
    this.clock = 0
    this.last = performance.now()
    this._loop(this.last)
  }

  // ---------- Three.js ----------
  _initThree() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' })
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // Récupération de contexte WebGL : si le GPU perd le contexte (concurrence
    // avec un autre contexte, mise en veille de l'onglet…), on empêche la perte
    // définitive et on reprend le rendu à la restauration (sinon écran noir).
    this._ctxLost = false
    this._onCtxLost = (e) => { e.preventDefault(); this._ctxLost = true; console.warn('[engine] WebGL context perdu') }
    this._onCtxRestored = () => { this._ctxLost = false; console.warn('[engine] WebGL context restauré') }
    this.canvas.addEventListener('webglcontextlost', this._onCtxLost, false)
    this.canvas.addEventListener('webglcontextrestored', this._onCtxRestored, false)

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#a8d8f0')
    this.scene.fog = new THREE.Fog('#b8d8e8', 55, 150)

    this.camera = new THREE.PerspectiveCamera(62, 1, 0.1, 400)
    this.camera.position.set(0, 8.8, 13)
    this.camera.lookAt(0, 0.6, -20)

    // lumières (jour ensoleillé) — conservées en réf pour la transition de biome
    const hemi = new THREE.HemisphereLight('#cfe9ff', '#6b7a5a', 1.0)
    this.scene.add(hemi)
    this.hemi = hemi
    const sun = new THREE.DirectionalLight('#fff6e0', 1.7)
    sun.position.set(-14, 30, 8)
    sun.castShadow = true
    sun.shadow.mapSize.set(1024, 1024)
    sun.shadow.camera.left = -30; sun.shadow.camera.right = 30
    sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30
    sun.shadow.camera.far = 90
    this.scene.add(sun)
    this.sun = sun
    this.ambient = new THREE.AmbientLight('#bcd4ff', 0.55)
    this.scene.add(this.ambient)
  }

  // ---------- Décor & sol (statiques / recyclés) ----------
  _buildWorld() {
    const S = this.scene

    // ciel dégradé (grand dôme) — paysage africain chaud
    const skyGeo = new THREE.SphereGeometry(300, 32, 16)
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        top: { value: new THREE.Color('#5ba3d4') },
        bot: { value: new THREE.Color('#d4e0e8') },
      },
      vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `varying vec3 vP; uniform vec3 top; uniform vec3 bot;
        void main(){ float h = clamp((vP.y/300.0)*0.5+0.5,0.0,1.0); gl_FragColor = vec4(mix(bot,top,h),1.0);} `,
    })
    S.add(new THREE.Mesh(skyGeo, skyMat))
    this.skyMat = skyMat

    // soleil
    const sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(14, 24, 24),
      new THREE.MeshBasicMaterial({ color: '#ffe6ad' })
    )
    sunMesh.position.set(-30, 24, -180)
    S.add(sunMesh)

    // sol général : côtés (couleur pilotée par le biome, texture carrelée façon Rallye)
    const groundMat = new THREE.MeshStandardMaterial({ color: '#3d7f2e', roughness: 1, map: this._makeGroundTexture() })
    this.groundMat = groundMat
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.set(0, -0.02, -100)
    ground.receiveShadow = true
    S.add(ground)

    // piste : terre battue (couleur pilotée par le biome)
    const ballastMat = new THREE.MeshStandardMaterial({ color: '#a4562f', roughness: 1 })
    this.ballastMat = ballastMat
    const ballast = new THREE.Mesh(new THREE.PlaneGeometry(TRACK_HALF * 2, 400), ballastMat)
    ballast.rotation.x = -Math.PI / 2
    ballast.position.set(0, 0, -100)
    ballast.receiveShadow = true
    S.add(ballast)

    // rails (longues barres métalliques, statiques -> continues)
    const railMat = new THREE.MeshStandardMaterial({ color: '#c7cfdd', metalness: 0.8, roughness: 0.35 })
    for (const x of [-LANE * 1.5, -LANE * 0.5, LANE * 0.5, LANE * 1.5]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 400), railMat)
      rail.position.set(x, 0.08, -100)
      S.add(rail)
    }

    // traverses (recyclées pour donner la vitesse)
    this.sleepers = []
    const sleeperMat = new THREE.MeshStandardMaterial({ color: '#5b4632', roughness: 1 })
    const sleeperGeo = new THREE.BoxGeometry(TRACK_HALF * 2, 0.16, 0.6)
    this._sleeperSpacing = 2.4
    this._sleeperCount = 70
    for (let i = 0; i < this._sleeperCount; i++) {
      const m = new THREE.Mesh(sleeperGeo, sleeperMat)
      m.position.set(0, 0.02, -i * this._sleeperSpacing + DESPAWN_Z)
      m.receiveShadow = true
      S.add(m); this.sleepers.push(m)
    }

    // DÉCOR gauche / droite : modèles GLB (/decorts/) affichés selon le biome.
    // Chaque emplacement défile vers la caméra ; quand il repasse derrière, il est
    // recyclé au loin — et si le biome a changé, on lui donne un nouveau modèle,
    // ce qui fait « entrer » le nouveau décor en douceur.
    this.decor = []
    this._decorSpan = 260
    this._decorCount = 18       // emplacements par côté (plus dense, remplit les côtés)
    this._decorByKey = {}       // key -> template (scene, baseScale, groundY, …)
    this._decorReady = false
    this._decorSeed = 7

    // baseX large : les objets sont dispersés des bords de piste jusqu'aux
    // extrêmes gauche/droite (pas seulement une rangée près de la voie).
    const wideX = (s) => s * (7 + Math.random() * 40)
    const farX  = (s) => s * (14 + Math.random() * 38)

    // ── Décors procéduraux basse-poly (style Rallye) ──
    // Sapins : verts en forêt, enneigés en montagne.
    this._registerTemplate('tree', this._makeConiferTemplate(false), { targetH: 9,  baseX: wideX, scaleRange: [0.8, 1.4], weight: 5 })
    this._registerTemplate('pine', this._makeConiferTemplate(true),  { targetH: 7,  baseX: wideX, scaleRange: [0.8, 1.3], weight: 4 })
    // Ville : maisons basse-poly (toit pyramidal) + tours.
    this._registerTemplate('bldgA', this._makeHouseLPTemplate('#d98f5a'), { targetH: 7,  baseX: wideX, scaleRange: [0.85, 1.4], weight: 3 })
    this._registerTemplate('bldgB', this._makeHouseLPTemplate('#c8734a'), { targetH: 7,  baseX: wideX, scaleRange: [0.85, 1.4], weight: 3 })
    this._registerTemplate('tower', this._makeTowerTemplate('#8a94a4'),   { targetH: 16, baseX: farX,  scaleRange: [0.8, 1.5],  weight: 2 })

    // Fond : chaîne de montagnes basse-poly sur l'horizon, teintée par biome.
    this._buildMountains()

    const decorFiles = [
      { key: 'baobab', path: '/decorts/baobab-tree.glb', targetH: 7, baseX: wideX, scaleRange: [0.85, 1.15], weight: 3 },
      { key: 'banana', path: '/decorts/banana-tree.glb', targetH: 6, baseX: wideX, scaleRange: [0.80, 1.10], weight: 2 },
      { key: 'house',  path: '/decorts/house.glb',       targetH: 5, baseX: wideX, scaleRange: [0.90, 1.05], weight: 2 },
    ]

    let loaded = 0
    const tryBuild = () => {
      if (loaded < decorFiles.length) return
      this._decorReady = true
      // Construit le décor du biome courant (ville au départ).
      this._rebuildDecor(BIOMES[this._biomeIdx >= 0 ? this._biomeIdx : 0].decor)
    }

    for (const def of decorFiles) {
      new GLTFLoader().load(def.path, (gltf) => {
        const box = new THREE.Box3().setFromObject(gltf.scene)
        const h = box.max.y - box.min.y || 1
        // baseScale : facteur pour atteindre targetH — stocké séparément pour
        // être multiplié par la variation au lieu d'être écrasé par elle.
        const baseScale = def.targetH / h
        const groundY = -box.min.y   // décalage Y pour poser les pieds au sol
        this._decorByKey[def.key] = {
          key: def.key, scene: gltf.scene, baseScale, groundY,
          baseX: def.baseX, scaleRange: def.scaleRange, weight: def.weight,
        }
        loaded++
        tryBuild()
      }, undefined, () => { loaded++; tryBuild() })
    }

    // pré-crée les géométries/matériaux réutilisés pour objets dynamiques
    this._geo = {
      coin: new THREE.CylinderGeometry(0.55, 0.55, 0.16, 20),
      train: new THREE.BoxGeometry(LANE * 0.92, 3.4, 22),
      barrier: new THREE.BoxGeometry(LANE * 0.92, 1.1, 0.7),
      lowbar: new THREE.BoxGeometry(LANE * 0.92, 0.5, 0.7),
      wheel: new THREE.CylinderGeometry(0.45, 0.45, 0.35, 16),  // roue (essieu le long de X)
      spoke: new THREE.BoxGeometry(0.12, 0.82, 0.12),           // rayon visible -> montre la rotation
    }
    this._mat = {
      coin: new THREE.MeshStandardMaterial({ color: '#ffcf33', metalness: 0.7, roughness: 0.3, emissive: '#7a5a00', emissiveIntensity: 0.3 }),
      train: new THREE.MeshStandardMaterial({ color: '#f4c518', metalness: 0.3, roughness: 0.45 }),
      trainRoof: new THREE.MeshStandardMaterial({ color: '#fbe9a0', roughness: 0.6 }),
      trainWin: new THREE.MeshStandardMaterial({ color: '#123', emissive: '#2a6a99', emissiveIntensity: 0.4 }),
      barrier: new THREE.MeshStandardMaterial({ color: '#f5a623', roughness: 0.6 }),
      lowbar: new THREE.MeshStandardMaterial({ color: '#9aa4b2', metalness: 0.6, roughness: 0.4 }),
      wheel: new THREE.MeshStandardMaterial({ color: '#2b2f36', metalness: 0.6, roughness: 0.5 }),
      wheelSpoke: new THREE.MeshStandardMaterial({ color: '#8b939d', metalness: 0.7, roughness: 0.4 }),
      sideTrain: new THREE.MeshStandardMaterial({ color: '#d94f4f', metalness: 0.3, roughness: 0.5 }),  // trains de fond (rouge)
      loco: new THREE.MeshStandardMaterial({ color: '#3a86ff', metalness: 0.3, roughness: 0.45 }),      // locomotive en mouvement (bleue)
      trainBlock: new THREE.MeshStandardMaterial({ color: '#5b626e', metalness: 0.4, roughness: 0.6 }),  // train immobile NON montable (gris)
      rampPlank: new THREE.MeshStandardMaterial({ color: '#ff9f1c', metalness: 0.4, roughness: 0.5, side: THREE.DoubleSide }),  // nez en pente montable (orange)
      driverSkin: new THREE.MeshStandardMaterial({ color: '#e8b98f', roughness: 0.8 }),
      driverShirt: new THREE.MeshStandardMaterial({ color: '#22406a', roughness: 0.7 }),
      driverCap: new THREE.MeshStandardMaterial({ color: '#1e2b45', roughness: 0.7 }),
      magnet: new THREE.MeshStandardMaterial({ color: '#e23b3b', metalness: 0.5, roughness: 0.4, emissive: '#5a0000', emissiveIntensity: 0.4 }),
      magnetTip: new THREE.MeshStandardMaterial({ color: '#d0d6de', metalness: 0.85, roughness: 0.3 }),
      boots: new THREE.MeshStandardMaterial({ color: '#7a4a26', roughness: 0.7 }),
      bootsWing: new THREE.MeshStandardMaterial({ color: '#eaf2ff', emissive: '#bcd4ff', emissiveIntensity: 0.5, roughness: 0.4 }),
    }

    this._buildSideTrains()
    this._buildPlayer()
  }

  // Enregistre un modèle de décor (GLB ou groupe procédural) sous une clé,
  // en calculant son échelle de base (pieds au sol, hauteur cible).
  _registerTemplate(key, scene, { targetH = 7, baseX, scaleRange, weight }) {
    const box = new THREE.Box3().setFromObject(scene)
    const h = (box.max.y - box.min.y) || 1
    this._decorByKey[key] = {
      key, scene, baseScale: targetH / h, groundY: -box.min.y, baseX, scaleRange, weight,
    }
  }

  // Conifère conique basse-poly (style Rallye). snow=true → sapin enneigé
  // (feuillage plus clair + coiffes de neige) ; sinon sapin vert foncé élancé.
  _makeConiferTemplate(snow) {
    const g = new THREE.Group()
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#5b4632', roughness: 1 })
    const folMat   = new THREE.MeshStandardMaterial({ color: snow ? '#3a5a44' : '#213c19', roughness: 1, flatShading: true })
    const snowMat  = new THREE.MeshStandardMaterial({ color: '#eef5fb', roughness: 1, flatShading: true })
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.3, 1.6, 6), trunkMat)
    trunk.position.y = 0.8; g.add(trunk)
    const tiers = snow
      ? [{ y: 1.7, r: 1.5, h: 1.9 }, { y: 2.8, r: 1.15, h: 1.7 }, { y: 3.8, r: 0.8, h: 1.4 }]
      : [{ y: 1.9, r: 1.7, h: 2.7 }, { y: 3.2, r: 1.2, h: 2.3 }, { y: 4.4, r: 0.72, h: 1.9 }]  // élancé
    for (const t of tiers) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(t.r, t.h, 7), folMat)
      cone.position.y = t.y; g.add(cone)
      if (snow) {
        const cap = new THREE.Mesh(new THREE.ConeGeometry(t.r * 0.62, t.h * 0.5, 7), snowMat)
        cap.position.y = t.y + t.h * 0.34; g.add(cap)
      }
    }
    g.traverse(n => { if (n.isMesh) { n.castShadow = true; n.receiveShadow = true } })
    return g
  }

  // Maison basse-poly (mur coloré + toit pyramidal + fenêtres) — style Rallye ville.
  _makeHouseLPTemplate(wall) {
    const g = new THREE.Group()
    const wallMat = new THREE.MeshStandardMaterial({ color: wall, roughness: 0.9, flatShading: true })
    const roofMat = new THREE.MeshStandardMaterial({ color: '#7a2f22', roughness: 0.9, flatShading: true })
    const winMat  = new THREE.MeshStandardMaterial({ color: '#ffe9a8', emissive: '#3a2f10', emissiveIntensity: 0.25 })
    const w = 4, d = 4, h = 5
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat)
    body.position.y = h / 2; g.add(body)
    const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.8, 2.6, 4), roofMat)
    roof.position.y = h + 1.3; roof.rotation.y = Math.PI / 4; g.add(roof)
    for (const fy of [1.6, 3.3]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.1), winMat)
      win.position.set(0, fy, d / 2 + 0.03); g.add(win)
    }
    g.traverse(n => { if (n.isMesh) { n.castShadow = true; n.receiveShadow = true } })
    return g
  }

  // Tour / immeuble basse-poly (grand pavé gris + bandes de fenêtres) — style ville.
  _makeTowerTemplate(col) {
    const g = new THREE.Group()
    const mat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.85, metalness: 0.1, flatShading: true })
    const winMat = new THREE.MeshStandardMaterial({ color: '#2a3340', emissive: '#3a4a5a', emissiveIntensity: 0.3 })
    const w = 5, d = 5, h = 16
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    body.position.y = h / 2; g.add(body)
    for (let y = 2; y < h - 1; y += 2.3) {
      const band = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.9, d + 0.06), winMat)
      band.position.y = y; g.add(band)
    }
    g.traverse(n => { if (n.isMesh) { n.castShadow = true; n.receiveShadow = true } })
    return g
  }

  // Texture de sol en niveaux de gris : carreaux (grille) + grain, façon Rallye.
  // Elle est teintée par la couleur du biome (groundMat.color) — le motif reste,
  // la teinte change (dallage gris en ville, herbe verte en forêt, etc.).
  _makeGroundTexture() {
    const c = document.createElement('canvas')
    c.width = c.height = 256
    const g = c.getContext('2d')
    g.fillStyle = '#e6e6e6'; g.fillRect(0, 0, 256, 256)           // base claire (multipliée par la teinte)
    for (let i = 0; i < 5000; i++) {                              // grain (pas lisse)
      const v = (Math.random() - 0.5) * 0.16
      g.fillStyle = `rgba(${v > 0 ? 255 : 0},${v > 0 ? 255 : 0},${v > 0 ? 255 : 0},${Math.abs(v)})`
      g.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 2, 1 + Math.random() * 2)
    }
    g.strokeStyle = 'rgba(0,0,0,0.18)'; g.lineWidth = 2           // carreaux
    for (let i = 0; i <= 256; i += 64) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, 256); g.stroke()
      g.beginPath(); g.moveTo(0, i); g.lineTo(256, i); g.stroke()
    }
    const t = new THREE.CanvasTexture(c)
    t.wrapS = t.wrapT = THREE.RepeatWrapping
    t.repeat.set(50, 50)
    t.anisotropy = 4
    return t
  }

  // Fond : chaîne de montagnes basse-poly tout autour de l'horizon (comme le
  // Rallye) — des cônes de tailles variées, hors brouillard, teintés par le
  // biome via un matériau partagé (retinté à chaque changement de décor).
  _buildMountains() {
    this._mtnMat = new THREE.MeshStandardMaterial({ color: '#3a5236', roughness: 1, flatShading: true, fog: false })
    const grp = new THREE.Group()
    let seed = 99
    const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff }
    // Distances contenues (< dôme du ciel r=300 et < plan lointain 400) pour
    // éviter que les montagnes soient masquées par le ciel ou coupées.
    const N = 26
    for (let i = 0; i < N; i++) {
      const a   = (i / N) * Math.PI * 2 + rnd() * 0.18
      const d   = 150 + rnd() * 60
      const hgt = 50 + rnd() * 70
      const rad = 42 + rnd() * 40
      const m = new THREE.Mesh(new THREE.ConeGeometry(rad, hgt, 6), this._mtnMat)
      m.position.set(Math.cos(a) * d, hgt / 2 - 10, Math.sin(a) * d)
      m.rotation.y = rnd() * Math.PI
      grp.add(m)
    }
    this.scene.add(grp)
    this._mountains = grp
  }

  // ---------- Biomes (décor évolutif selon les points) ----------
  // Choisit un modèle parmi les clés autorisées du biome (pondéré comme avant).
  _pickTemplate(keys) {
    const pool = []
    for (const k of keys) {
      const t = this._decorByKey[k]
      if (t) for (let w = 0; w < (t.weight || 1); w++) pool.push(t)
    }
    if (!pool.length) return null
    this._decorSeed = (this._decorSeed * 1103515245 + 12345) & 0x7fffffff
    return pool[this._decorSeed % pool.length]
  }

  // Clone un modèle et le pose (échelle + position + rotation) pour un emplacement.
  _spawnDecorObj(t, side, i) {
    this._decorSeed = (this._decorSeed * 1103515245 + 12345) & 0x7fffffff
    const seed = this._decorSeed
    const obj = t.scene.clone(true)
    const variation = t.scaleRange[0] + (seed % 100) / 100 * (t.scaleRange[1] - t.scaleRange[0])
    obj.scale.setScalar(t.baseScale * variation)
    const baseX = t.baseX(side)
    obj.position.set(
      baseX, t.groundY * t.baseScale * variation,
      -(i / this._decorCount) * this._decorSpan + DESPAWN_Z - (seed % 40) * 0.1,
    )
    obj.rotation.y = (seed % 8) * Math.PI / 4
    obj.traverse(n => { if (n.isMesh) { n.castShadow = true; n.receiveShadow = true; n.frustumCulled = true } })
    return { obj, side, baseX, key: t.key }
  }

  // (Re)construit tout le décor avec les modèles du biome donné.
  _rebuildDecor(keys) {
    if (!this._decorReady) return
    for (const d of this.decor) this.scene.remove(d.obj)
    this.decor = []
    this._biomeKeys = keys
    for (const side of [-1, 1]) {
      for (let i = 0; i < this._decorCount; i++) {
        const t = this._pickTemplate(keys)
        if (!t) continue
        const d = this._spawnDecorObj(t, side, i)
        this.scene.add(d.obj)
        this.decor.push(d)
      }
    }
  }

  // Remplace le modèle d'un emplacement recyclé par un du biome courant
  // (conserve sa profondeur z pour qu'il « entre » naturellement au loin).
  _replaceDecorSlot(d) {
    const t = this._pickTemplate(this._biomeKeys)
    if (!t) return
    const z = d.obj.position.z
    this.scene.remove(d.obj)
    const nd = this._spawnDecorObj(t, d.side, 0)
    nd.obj.position.z = z
    this.scene.add(nd.obj)
    d.obj = nd.obj; d.baseX = nd.baseX; d.key = nd.key
  }

  // Applique instantanément l'ambiance d'un biome (utilisé au reset).
  _snapBiome(idx) {
    const b = BIOMES[idx]; const c = b._c
    this.skyMat.uniforms.top.value.copy(c.skyTop)
    this.skyMat.uniforms.bot.value.copy(c.skyBot)
    this.scene.background.copy(c.bg)
    this.scene.fog.color.copy(c.fog); this.scene.fog.near = b.fogNear; this.scene.fog.far = b.fogFar
    this.sun.color.copy(c.sunCol); this.sun.intensity = b.sunInt; this.sun.position.set(...b.sunPos)
    this.hemi.color.copy(c.hemiSky); this.hemi.groundColor.copy(c.hemiGround); this.hemi.intensity = b.hemiInt
    this.ambient.color.copy(c.ambCol); this.ambient.intensity = b.ambInt
    this.groundMat.color.copy(c.ground); this.ballastMat.color.copy(c.ballast)
    if (this._mtnMat) this._mtnMat.color.copy(c.mtn)
    this._biomeIdx = idx
    this._biomeKeys = b.decor
  }

  // Transition douce vers le biome selon les PIÈCES ramassées, EN BOUCLE :
  // ville → forêt → désert → neige → ville → … (un biome tous les 100 points).
  _tickBiome(dt) {
    const idx = Math.floor(Math.max(0, this.coins) / BIOME_STEP) % BIOMES.length
    if (idx !== this._biomeIdx) {
      this._biomeIdx = idx
      this._biomeKeys = BIOMES[idx].decor      // les emplacements se rechargeront au recyclage
      this.cb.onBiome?.(BIOMES[idx].name)
    }
    const b = BIOMES[idx], c = b._c
    // Fondu LENT : l'ambiance change progressivement pendant qu'on avance vers la
    // nouvelle zone (impression d'« arriver » dans un autre village, pas de bascule).
    const k = Math.min(1, dt * 0.45)
    this.skyMat.uniforms.top.value.lerp(c.skyTop, k)
    this.skyMat.uniforms.bot.value.lerp(c.skyBot, k)
    this.scene.background.lerp(c.bg, k)
    this.scene.fog.color.lerp(c.fog, k)
    this.scene.fog.near += (b.fogNear - this.scene.fog.near) * k
    this.scene.fog.far  += (b.fogFar  - this.scene.fog.far ) * k
    this.sun.color.lerp(c.sunCol, k)
    this.sun.intensity += (b.sunInt - this.sun.intensity) * k
    this.sun.position.x += (b.sunPos[0] - this.sun.position.x) * k
    this.sun.position.y += (b.sunPos[1] - this.sun.position.y) * k
    this.sun.position.z += (b.sunPos[2] - this.sun.position.z) * k
    this.hemi.color.lerp(c.hemiSky, k)
    this.hemi.groundColor.lerp(c.hemiGround, k)
    this.hemi.intensity += (b.hemiInt - this.hemi.intensity) * k
    this.ambient.color.lerp(c.ambCol, k)
    this.ambient.intensity += (b.ambInt - this.ambient.intensity) * k
    this.groundMat.color.lerp(c.ground, k)
    this.ballastMat.color.lerp(c.ballast, k)
    if (this._mtnMat) this._mtnMat.color.lerp(c.mtn, k)
  }

  // Construit un wagon (carrosserie + toit + fenêtres + roues qui tournent).
  // loco=true -> cabine ouverte à l'avant avec chauffeur bien visible au-dessus du toit.
  // ramp=true -> rampe oblique à l'avant (train montable : on grimpe dessus).
  // Retourne le groupe et la liste des roues à faire pivoter dans la boucle.
  _makeTrainMesh(bodyMat = this._mat.train, len = 22, { loco = false, ramp = false } = {}) {
    const grp = new THREE.Group()
    const topY = 3.5
    const front = len / 2
    // train montable : le corps est raccourci et l'avant est un NEZ EN PENTE (coin lisse)
    // qui monte du sol jusqu'au toit. Sinon corps plein à face verticale.
    const bodyLen = ramp ? len - TRAIN_CLIMB : len
    const bodyCz = ramp ? -TRAIN_CLIMB / 2 : 0          // centre du corps décalé vers l'arrière
    const bodyFront = bodyCz + bodyLen / 2

    const body = new THREE.Mesh(new THREE.BoxGeometry(LANE * 0.92, 3.4, bodyLen), bodyMat)
    body.position.set(0, 1.7, bodyCz); body.castShadow = true; grp.add(body)
    const roof = new THREE.Mesh(new THREE.BoxGeometry(LANE * 0.94, 0.4, bodyLen), this._mat.trainRoof)
    roof.position.set(0, 3.45, bodyCz); grp.add(roof)
    const nWin = Math.floor(bodyLen / 2.4)
    for (let i = -nWin; i <= nWin; i++) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(LANE * 0.94 + 0.02, 0.9, 1.6), this._mat.trainWin)
      win.position.set(0, 2.1, bodyCz + i * 2.2)
      if (Math.abs(win.position.z - bodyCz) < bodyLen / 2 - 1) grp.add(win)
    }
    // nez en pente lisse (coin) : de la pointe avant au sol (z=front) jusqu'au toit (z=bodyFront)
    if (ramp) {
      const nose = new THREE.Mesh(makeWedgeGeo(LANE * 0.46, topY, front, TRAIN_CLIMB), this._mat.rampPlank)
      nose.castShadow = true; nose.receiveShadow = true; grp.add(nose)
    }
    // locomotive : cabine OUVERTE surélevée à l'avant + chauffeur (buste, tête, casquette)
    // qui dépasse au-dessus du toit -> bien visible.
    if (loco) {
      const dash = new THREE.Mesh(new THREE.BoxGeometry(LANE * 0.82, 1.1, 0.4), bodyMat)
      dash.position.set(0, 4.1, front - 0.35); grp.add(dash)
      for (const sx of [-LANE * 0.39, LANE * 0.39]) {
        const wall = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.1, 1.9), bodyMat)
        wall.position.set(sx, 4.1, front - 1.15); grp.add(wall)
      }
      const dTorso = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.8, 0.46), this._mat.driverShirt)
      dTorso.position.set(0, 4.4, front - 1.05); grp.add(dTorso)
      const dHead = new THREE.Mesh(new THREE.SphereGeometry(0.29, 14, 14), this._mat.driverSkin)
      dHead.position.set(0, 5.05, front - 1.0); dHead.castShadow = true; grp.add(dHead)
      const dCap = new THREE.Mesh(new THREE.SphereGeometry(0.31, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), this._mat.driverCap)
      dCap.position.set(0, 5.12, front - 1.0); grp.add(dCap)
    }
    // roues : essieu le long de X, un rayon visible qui montre la rotation
    const wheels = []
    for (const sx of [-LANE * 0.42, LANE * 0.42]) {
      for (let z = bodyCz - bodyLen / 2 + 3; z <= bodyFront - 2; z += 4) {
        const w = new THREE.Group()
        const disc = new THREE.Mesh(this._geo.wheel, this._mat.wheel)
        disc.rotation.z = Math.PI / 2                 // couche l'essieu le long de X
        const spoke = new THREE.Mesh(this._geo.spoke, this._mat.wheelSpoke)
        w.add(disc, spoke)
        w.position.set(sx, 0.5, z)
        grp.add(w); wheels.push(w)
      }
    }
    return { grp, wheels }
  }

  // Trains de décor : roulent sur des voies parallèles en arrière-plan (sans collision).
  _buildSideTrains() {
    this.sideTrains = []
  }

  _buildPlayer() {
    const g = new THREE.Group()
    // Le corps visible vient du modèle GLB (public/perso.glb), chargé de façon
    // asynchrone. On conserve ici un rig « invisible » (bras/jambes = groupes
    // vides positionnés) : la physique et les animations corps-entier continuent
    // de fonctionner et l'aimant / les bottes s'accrochent aux bons endroits.

    // Matériaux conservés pour setCharacter (n'affectent plus le modèle GLB).
    this._pMat = {
      skin: new THREE.MeshStandardMaterial({ color: '#8a5a3a' }),
      shirt: new THREE.MeshStandardMaterial({ color: '#cc1515' }),
      pants: new THREE.MeshStandardMaterial({ color: '#2b3f66' }),
      cap: new THREE.MeshStandardMaterial({ color: '#b23a86' }),
    }

    // conteneur du modèle (sert de pivot pour le « bob » de course)
    this.model = new THREE.Group()
    g.add(this.model)

    // ---- rig invisible : bras (ancrage aimant) ----
    this.armL = new THREE.Group(); this.armR = new THREE.Group()
    this.armL.position.set(-0.64, 2.02, 0); this.armR.position.set(0.64, 2.02, 0)
    g.add(this.armL, this.armR)

    // ---- rig invisible : jambes (ancrage bottes) ----
    this.legL = new THREE.Group(); this.legR = new THREE.Group()
    this.legL.position.set(-0.24, 1.02, 0); this.legR.position.set(0.24, 1.02, 0)
    g.add(this.legL, this.legR)

    // aimant tenu dans la main droite (visible seulement quand l'aimant est actif)
    this.heldMagnet = new THREE.Group()
    const hArc = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.08, 10, 16, Math.PI), this._mat.magnet)
    hArc.rotation.z = Math.PI; this.heldMagnet.add(hArc)
    for (const sx of [-0.2, 0.2]) {
      const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.14, 10), this._mat.magnetTip)
      tip.position.set(sx, -0.07, 0); this.heldMagnet.add(tip)
    }
    this.heldMagnet.position.set(0, -1.02, 0)      // au bout du bras (dans la main)
    this.heldMagnet.visible = false
    this.armR.add(this.heldMagnet)

    // bottes ailées portées aux pieds (visibles seulement quand les bottes sont actives)
    this.boots = []
    for (const leg of [this.legL, this.legR]) {
      const b = new THREE.Group()
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.32, 0.6), this._mat.boots)
      foot.position.set(0, -0.15, 0.12); b.add(foot)
      const cuff = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), this._mat.boots)
      cuff.position.set(0, 0.12, -0.02); b.add(cuff)
      for (const sx of [-0.24, 0.24]) {
        const wing = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.3, 0.36), this._mat.bootsWing)
        wing.position.set(sx, 0.12, -0.05); wing.rotation.z = sx > 0 ? -0.5 : 0.5; b.add(wing)
      }
      b.position.set(0, -1.02, 0)                   // au pied de la jambe
      b.visible = false
      leg.add(b); this.boots.push(b)
    }

    this.player = g
    this.scene.add(g)
    this._loadPlayerModel()
    this._buildPolice()
  }

  // Charge un modèle GLB joueur, le normalise (pieds au sol, centré, échelle cible)
  // et l'oriente dos à la caméra, puis remplace le contenu du conteneur `this.model`.
  // `path` par défaut = perso.glb (décor du menu) ; le jeu bascule sur avatarRun.glb.
  _loadPlayerModel(path = '/perso.glb') {
    if (this._playerModelPath === path) return   // déjà chargé -> rien à faire
    this._playerModelPath = path

    new GLTFLoader().load(
      path,
      (gltf) => {
        // Ignore si un autre modèle a été demandé entre-temps
        if (this._playerModelPath !== path) return

        // vide l'ancien modèle + mixer
        while (this.model.children.length) this.model.remove(this.model.children[0])
        this.mixer = null
        this._usingGameModels = false   // on repasse en modèle simple (décor menu)

        const obj = gltf.scene
        obj.traverse((o) => {
          if (o.isMesh) { o.castShadow = true; o.frustumCulled = false }
        })
        // normalisation : recentrer en X/Z, poser les pieds à y=0, mettre à l'échelle
        const box = new THREE.Box3().setFromObject(obj)
        const size = new THREE.Vector3(); box.getSize(size)
        const center = new THREE.Vector3(); box.getCenter(center)
        const s = PLAYER_HEIGHT / (size.y || 1)
        obj.scale.setScalar(s)
        obj.position.set(-center.x * s, -box.min.y * s, -center.z * s)
        obj.rotation.y = Math.PI            // dos tourné vers la caméra (court vers l'avant)
        this.model.add(obj)

        // Si le GLB est riggé (squelette + clips), on joue l'animation de course.
        // On cherche un clip "run/course/walk", sinon le premier disponible.
        if (gltf.animations && gltf.animations.length) {
          this.mixer = new THREE.AnimationMixer(obj)
          const clip = gltf.animations.find(c => /run|cour|walk|marche/i.test(c.name || ''))
            || gltf.animations[0]
          this.mixer.clipAction(clip).play()
        } else {
          console.warn(`${path} : modèle statique (aucun squelette/animation) — ` +
            'pieds et mains non articulés. Fournir un GLB riggé avec un clip « Run » pour animer les membres.')
        }
      },
      undefined,
      (err) => console.error(`Échec du chargement de ${path}`, err),
    )
  }

  // Normalise un GLB chargé (pieds au sol, centré, échelle, dos caméra) et crée
  // son mixer en jouant le clip correspondant. Renvoie { obj, mixer }.
  _normalizeGameModel(gltf, clipRegex, targetH = PLAYER_HEIGHT) {
    const obj = gltf.scene
    obj.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false } })
    const box = new THREE.Box3().setFromObject(obj)
    const size = new THREE.Vector3(); box.getSize(size)
    const center = new THREE.Vector3(); box.getCenter(center)
    const s = targetH / (size.y || 1)
    obj.scale.setScalar(s)
    obj.position.set(-center.x * s, -box.min.y * s, -center.z * s)
    obj.rotation.y = Math.PI
    let mixer = null
    if (gltf.animations && gltf.animations.length) {
      mixer = new THREE.AnimationMixer(obj)
      let clip = gltf.animations.find(c => clipRegex.test(c.name || '')) || gltf.animations[0]
      // Anim SUR PLACE : on retire TOUT le root motion (pistes de translation) qui
      // faisait glisser/téléporter/disparaître le modèle. La position et les poses
      // "monde" (saut via this.y, penché du plongeon…) sont gérées par le moteur.
      clip = clip.clone()
      clip.tracks = clip.tracks.filter((t) => !t.name.endsWith('.position'))
      mixer.clipAction(clip).play()
    }
    return { obj, mixer }
  }

  _loadGLB(path) {
    return new Promise((resolve, reject) => {
      new GLTFLoader().load(path, resolve, undefined, reject)
    })
  }

  // Précharge et parse les modèles de jeu (course + saut). Idempotent et
  // dédupliqué : plusieurs appelants (intro + page de chargement) partagent le
  // MÊME chargement (jamais de double téléchargement). `onProgress(0..1)` est
  // notifié même si le chargement a déjà démarré ailleurs.
  preloadGameModels(onProgress) {
    if (onProgress) {
      this._preloadCbs = this._preloadCbs || []
      this._preloadCbs.push(onProgress)
      onProgress(this._preloadProgress || 0)
    }
    if (this._runEntry && this._jumpEntry) { onProgress?.(1); return Promise.resolve() }
    if (this._preloadPromise) return this._preloadPromise

    const report = (p) => {
      this._preloadProgress = p
      ;(this._preloadCbs || []).forEach((cb) => cb(p))
    }
    this._preloadPromise = (async () => {
      report(0.02)
      const runGltf = await this._loadGLB('/avatarRun.glb')
      report(0.14)
      const jumpGltf = await this._loadGLB('/avatarJump.glb')
      report(0.26)
      const plongeGltf = await this._loadGLB('/avatarPlonge.glb')
      report(0.38)
      const run2Gltf = await this._loadGLB('/avatar2Run.glb')
      report(0.5)
      const jump2Gltf = await this._loadGLB('/avatar2Jump.glb')
      report(0.62)
      const policeGltf = await this._loadGLB('/policeRun.glb')
      report(0.76)
      const policeBoxGltf = await this._loadGLB('/policeBox.glb')
      report(0.92)
      this._runEntry  = this._normalizeGameModel(runGltf,      /run|cour|walk|marche/i)
      this._jumpEntry = this._normalizeGameModel(jumpGltf,     /jump|saut|air/i)
      this._plongeEntry = this._normalizeGameModel(plongeGltf, /plonge|dive|roll|slide|crouch|couch/i)
      this._run2Entry  = this._normalizeGameModel(run2Gltf,    /run|cour|walk|marche/i)
      this._jump2Entry = this._normalizeGameModel(jump2Gltf,   /jump|saut|air/i)
      this._policeEntry    = this._normalizeGameModel(policeGltf,    /run|cour|walk|marche/i, 3.8)
      this._policeBoxEntry = this._normalizeGameModel(policeBoxGltf, /box|punch|hit|attack|boxe/i, 3.8)
      report(1)
    })()
    return this._preloadPromise
  }

  // Bascule le conteneur joueur sur les modèles de course/saut préchargés.
  activateGameModels() {
    if (!this._runEntry || !this._jumpEntry) return
    while (this.model.children.length) this.model.remove(this.model.children[0])
    this.mixer = null
    this._playerModelPath = null            // force le rechargement de perso au retour menu
    const useAv2 = this._activeAvatar === 2 && this._run2Entry && this._jump2Entry
    const run   = useAv2 ? this._run2Entry   : this._runEntry
    const jump  = useAv2 ? this._jump2Entry  : this._jumpEntry
    const plonge = this._plongeEntry   // avatar2 partage le plongeon d'avatar1

    this.model.add(run.obj)
    this.model.add(jump.obj)
    if (plonge) this.model.add(plonge.obj)
    run.obj.visible = true
    jump.obj.visible = false
    if (plonge) plonge.obj.visible = false
    this._activeRun   = run
    this._activeJump  = jump
    this._activePlonge = plonge
    this._usingGameModels = true

    // Police riggée : masque les primitives et attache policeRun (course) +
    // policeBox (boxe à la capture).
    if (this._policeEntry && !this._usingPoliceModel) {
      for (const c of this.police.children) c.visible = false
      this.police.add(this._policeEntry.obj)
      if (this._policeBoxEntry) this.police.add(this._policeBoxEntry.obj)
      this._usingPoliceModel = true
    }
    this._setPoliceCaught(false)   // état course par défaut à chaque partie

    // Préchauffage GPU : compile les shaders et force l'upload des textures de
    // TOUS les modèles maintenant (sinon hoquet au tout premier saut / capture).
    if (!this._warmedUp) {
      const jump  = this._activeJump  || this._jumpEntry
      const plonge = this._activePlonge || this._plongeEntry
      jump.obj.visible = true
      if (plonge) plonge.obj.visible = true
      if (this._policeBoxEntry) this._policeBoxEntry.obj.visible = true
      this.renderer.compile(this.scene, this.camera)
      this.renderer.render(this.scene, this.camera)
      jump.obj.visible = false
      if (plonge) plonge.obj.visible = false
      this._setPoliceCaught(false)
      this._warmedUp = true
    }
  }

  // Bascule la police entre course (policeRun) et boxe (policeBox à la capture).
  _setPoliceCaught(caught) {
    if (!this._usingPoliceModel) return
    if (this._policeEntry) this._policeEntry.obj.visible = !caught
    if (this._policeBoxEntry) this._policeBoxEntry.obj.visible = caught && !!this._policeBoxEntry
  }

  _buildPolice() {
    const g = new THREE.Group()
    const skin = new THREE.MeshStandardMaterial({ color: '#e8b98f', roughness: 0.8 })
    const shirt = new THREE.MeshStandardMaterial({ color: '#4a7d4f', roughness: 0.7 })   // uniforme vert
    const pants = new THREE.MeshStandardMaterial({ color: '#3a5c3f', roughness: 0.8 })
    const cap = new THREE.MeshStandardMaterial({ color: '#2f5233', roughness: 0.7 })

    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.2, 0.62), shirt)
    torso.position.y = 1.6; torso.castShadow = true; g.add(torso)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.46, 16, 16), skin)
    head.position.y = 2.55; head.castShadow = true; g.add(head)
    const capMesh = new THREE.Mesh(new THREE.SphereGeometry(0.48, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), cap)
    capMesh.position.y = 2.6; g.add(capMesh)
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.42), cap)
    visor.position.set(0, 2.6, 0.46); g.add(visor)

    const armGeo = new THREE.BoxGeometry(0.28, 0.95, 0.28)
    this.pArmL = new THREE.Group(); this.pArmR = new THREE.Group()
    const aL = new THREE.Mesh(armGeo, shirt); aL.position.y = -0.47; aL.castShadow = true
    const aR = new THREE.Mesh(armGeo, shirt); aR.position.y = -0.47; aR.castShadow = true
    this.pArmL.add(aL); this.pArmR.add(aR)
    this.pArmL.position.set(-0.68, 2.05, 0); this.pArmR.position.set(0.68, 2.05, 0)
    g.add(this.pArmL, this.pArmR)

    const legGeo = new THREE.BoxGeometry(0.34, 1.05, 0.34)
    this.pLegL = new THREE.Group(); this.pLegR = new THREE.Group()
    const lL = new THREE.Mesh(legGeo, pants); lL.position.y = -0.52; lL.castShadow = true
    const lR = new THREE.Mesh(legGeo, pants); lR.position.y = -0.52; lR.castShadow = true
    this.pLegL.add(lL); this.pLegR.add(lR)
    this.pLegL.position.set(-0.26, 1.05, 0); this.pLegR.position.set(0.26, 1.05, 0)
    g.add(this.pLegL, this.pLegR)

    this.police = g
    this.scene.add(g)
  }

  reset() {
    this.targetLane = 1
    this.laneX = 0
    this.y = 0
    this.vy = 0
    this.groundY = 0
    this.grounded = true
    this.rolling = 0
    this.speed = 20
    this.dist = 0
    this.score = 0
    this.coins = 0           // pièces ramassées — pilote le biome (≠ distance)
    this.spawnTimer = 0
    this.running = false
    this.gameOver = false
    this.time = 0
    this.shake = 0
    // police (poursuite)
    this.policeX = 0
    this.policeZ = POLICE_FAR    // au repos, la police est loin (jeu propre)
    this._policeTargetZ = POLICE_FAR
    this.stumbleT = 0            // temps restant au sol après un choc latéral
    this.caught = false
    this.caughtT = 0
    this._over = false
    this.crashType = null
    // power-ups
    this.magnetT = 0             // temps restant d'aimant
    this.bootsT = 0              // temps restant de bottes (super-saut)
    this.cb.onPower?.(0, 0)
    // vide les objets dynamiques éventuels
    if (this.items) for (const it of this.items) this.scene.remove(it.mesh)
    this.items = []
    if (this.player) { this.player.position.set(0, 0, 0); this.player.rotation.set(0, 0, 0); this.player.scale.y = 1 }
    if (this.police) { this.police.position.set(0, 0, POLICE_FAR); this.police.rotation.set(0, 0, 0) }
    this._setPoliceCaught(false)   // police en état course (pas boxe)
    // Recommence toujours dans la ville (décor + ambiance).
    this._snapBiome(0)
    if (this._decorReady) this._rebuildDecor(BIOMES[0].decor)
    this.cb.onBiome?.(BIOMES[0].name)
  }

  _bindResize() {
    this.resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      // plafonné à 1.5 : sur écran haute densité, rendre en 2× = 4× de pixels
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      this.renderer.setSize(w, h)
      this.camera.aspect = w / h
      this.camera.updateProjectionMatrix()
    }
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize)
    this.canvas.removeEventListener('webglcontextlost', this._onCtxLost)
    this.canvas.removeEventListener('webglcontextrestored', this._onCtxRestored)
    this.renderer.dispose()
  }

  start() {
    this.reset()
    this.activateGameModels()   // bascule sur course/saut préchargés (fallback : perso reste)
    this.running = true
    this.last = performance.now()
    if (!this.raf) this._loop(this.last)
  }

  // Change l'apparence du joueur (couleurs) selon le personnage choisi.
  setCharacter(colors, avatarId = 1) {
    if (colors && this._pMat) {
      if (colors.skin)  this._pMat.skin.color.set(colors.skin)
      if (colors.shirt) this._pMat.shirt.color.set(colors.shirt)
      if (colors.pants) this._pMat.pants.color.set(colors.pants)
      if (colors.cap)   this._pMat.cap.color.set(colors.cap)
    }
    this._activeAvatar = avatarId   // sélectionne le set de modèles pour activateGameModels
  }

  // ---------- Contrôles ----------
  moveLeft() { if (this.running && this.stumbleT <= 0) this.targetLane = Math.max(0, this.targetLane - 1) }
  moveRight() { if (this.running && this.stumbleT <= 0) this.targetLane = Math.min(2, this.targetLane + 1) }
  setLane(i) { if (this.running && this.stumbleT <= 0) this.targetLane = Math.max(0, Math.min(2, i)) }
  jump() {
    if (this.running && this.stumbleT <= 0 && this.grounded && this.rolling <= 0) {
      this.vy = this.bootsT > 0 ? BOOTS_JUMP_V : JUMP_V
      this._jumpEntry?.mixer?.setTime(0)   // rejoue l'animation de saut depuis le début
    }
  }
  roll() {
    if (this.running && this.stumbleT <= 0 && this.grounded) {
      this.rolling = ROLL_TIME
      this.vy = 0
      this._plongeEntry?.mixer?.setTime(0)  // rejoue l'animation de plongeon depuis le début
    }
  }

  // ---------- Spawn ----------
  _spawn() {
    const r = Math.random()
    const lane = Math.floor(Math.random() * 3)
    // power-ups : rares, apparaissent seulement quand la difficulté monte (après ~25 s).
    const pPower = this.time > 25 ? Math.min(0.05, 0.012 + (this.time - 25) * 0.0008) : 0
    if (Math.random() < pPower) {
      this._addPower(lane, Math.random() < 0.5 ? 'magnet' : 'boots')
      return
    }
    if (r < 0.06) {
      // deux trains montables qui se suivent : on grimpe (rampe avant du 1er) et on
      // court d'un toit à l'autre. Seul le 1er porte la rampe visible (toits jointifs).
      this._addObstacle(lane, 'train', SPAWN_Z, { climb: true, ramp: true })
      this._addObstacle(lane, 'train', SPAWN_Z - 22, { climb: true, ramp: false })
      this._addRoofCoins(lane, SPAWN_Z)             // pièces à ramasser sur le toit
    } else if (r < 0.55) {
      const kinds = ['barrier', 'train', 'lowbar']
      const kind = kinds[Math.floor(Math.random() * kinds.length)]
      let opts = {}
      if (kind === 'train') {
        // les trains immobiles NON montables (mur à esquiver) sont largement majoritaires ;
        // quelques locomotives en mouvement et de rares trains montables.
        const t = Math.random()
        if (t < 0.18) opts = { moving: true }        // ~18 % locomotive en mouvement
        else if (t < 0.30) opts = { climb: true }    // ~12 % immobile montable
        // sinon (~70 %) immobile NON montable
      }
      this._addObstacle(lane, kind, SPAWN_Z, opts)
      // pièces au-dessus du train UNIQUEMENT s'il est montable (toit accessible
      // sans les bottes) — sinon elles seraient impossibles à atteindre.
      if (kind === 'train' && opts.climb && Math.random() < 0.7) this._addRoofCoins(lane, SPAWN_Z)
    } else {
      const n = 4 + Math.floor(Math.random() * 4)
      for (let i = 0; i < n; i++) this._addCoin(lane, SPAWN_Z - i * 2.6)
    }
  }

  // Rangée de pièces posées au-dessus d'un train (le long du toit).
  _addRoofCoins(lane, zCenter) {
    for (let i = -2; i <= 2; i++) this._addCoin(lane, zCenter + i * 3, ROOF_COIN_Y)
  }

  _addCoin(lane, z, y = 1.1) {
    const m = new THREE.Mesh(this._geo.coin, this._mat.coin)
    m.rotation.x = Math.PI / 2
    m.position.set(LANES[lane], y, z)
    m.castShadow = true
    this.scene.add(m)
    this.items.push({ mesh: m, type: 'coin', lane, z, zHalf: 0.4, baseY: y })
  }

  // Power-up : 'magnet' (blouson-aimant qui attire les pièces) ou 'boots' (bottes de super-saut).
  _addPower(lane, kind, z = SPAWN_Z) {
    const grp = new THREE.Group()
    if (kind === 'magnet') {
      // aimant en fer à cheval : arc rouge + deux embouts gris
      const arc = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.2, 12, 20, Math.PI), this._mat.magnet)
      arc.rotation.z = Math.PI                     // ouverture vers le bas
      arc.position.y = 0.1; grp.add(arc)
      for (const sx of [-0.55, 0.55]) {
        const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.35, 12), this._mat.magnetTip)
        tip.position.set(sx, -0.17, 0); grp.add(tip)
      }
    } else {
      // botte ailée : semelle + tige marron + petite aile claire
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 1.0), this._mat.boots)
      foot.position.set(0, -0.25, 0.15); grp.add(foot)
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.8, 0.5), this._mat.boots)
      leg.position.set(0, 0.25, -0.15); grp.add(leg)
      for (const sx of [-0.32, 0.32]) {
        const wing = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.4, 0.5), this._mat.bootsWing)
        wing.position.set(sx, 0.1, -0.1); wing.rotation.z = sx > 0 ? -0.5 : 0.5; grp.add(wing)
      }
    }
    grp.position.set(LANES[lane], 1.5, z)
    grp.traverse(o => { if (o.isMesh) o.castShadow = true })
    this.scene.add(grp)
    this.items.push({ mesh: grp, type: 'power', kind, lane, z, zHalf: 0.7 })
  }

  _addObstacle(lane, kind, z0 = SPAWN_Z, opts = {}) {
    const { moving = false, climb = false, ramp = climb } = opts
    let mesh, zHalf, clear, wheels
    if (kind === 'train') {
      // 3 variantes : locomotive en mouvement (bleue, chauffeur) / train immobile
      // montable (jaune, rampe) / train immobile NON montable (gris, mur plein)
      const bodyMat = moving ? this._mat.loco : (climb ? this._mat.train : this._mat.trainBlock)
      const t = this._makeTrainMesh(bodyMat, 22, { loco: moving, ramp: climb && ramp })
      mesh = t.grp; wheels = t.wheels
      zHalf = 11; clear = 'top'
    } else if (kind === 'barrier') {
      mesh = new THREE.Mesh(this._geo.barrier, this._mat.barrier)
      mesh.position.y = 0.55; mesh.castShadow = true
      zHalf = 0.5; clear = 'jump'                     // barrière basse -> SAUTER
    } else {
      const grp = new THREE.Group()
      const bar = new THREE.Mesh(this._geo.lowbar, this._mat.lowbar)
      bar.position.y = 2.1; bar.castShadow = true; grp.add(bar)
      for (const sx of [-LANE * 0.42, LANE * 0.42]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.3, 0.18), this._mat.lowbar)
        post.position.set(sx, 1.15, 0); grp.add(post)
      }
      mesh = grp; zHalf = 0.4; clear = 'roll'          // barre haute -> ROULER dessous
    }
    mesh.position.x = LANES[lane]
    mesh.position.z = z0
    this.scene.add(mesh)
    // roll : vitesse propre du train. Immobile => 1 (défile avec le monde) ;
    // locomotive en mouvement => 1.35 (elle avance / dépasse le décor).
    const roll = kind === 'train' && moving ? 1.35 : 1
    this.items.push({ mesh, type: 'obs', kind, lane, z: z0, zHalf, clear, wheels, roll, climb: kind === 'train' && climb, topY: kind === 'train' ? 3.5 : 0 })
  }

  // ---------- Update ----------
  _update(dt) {
    this.time += dt
    this.speed += dt * 0.32
    const move = this.speed * dt
    this.dist += move
    this.score += move * 1.2
    this.cb.onScore?.(Math.floor(this.score), this.coins)
    this._tickBiome(dt)

    // déplacement latéral lissé
    this.laneX += ((this.targetLane - 1) - this.laneX) * Math.min(1, dt * 13)
    if (this.rolling > 0) this.rolling -= dt
    if (this.stumbleT > 0) this.stumbleT -= dt
    if (this.shake > 0) this.shake -= dt
    // power-ups : décompte + notification HUD au changement
    if (this.magnetT > 0 || this.bootsT > 0) {
      const wasM = this.magnetT, wasB = this.bootsT
      if (this.magnetT > 0) this.magnetT = Math.max(0, this.magnetT - dt)
      if (this.bootsT > 0) this.bootsT = Math.max(0, this.bootsT - dt)
      if ((wasM > 0) !== (this.magnetT > 0) || (wasB > 0) !== (this.bootsT > 0)) {
        this.cb.onPower?.(this.magnetT, this.bootsT)
      }
    }
    // La police suit sa CIBLE (_policeTargetZ) en douceur → plus de téléportation.
    // En jeu propre, la cible recule vers POLICE_FAR ; après une faute elle est
    // déjà rapprochée (cf. _stumble). La vitesse de suivi détermine la fluidité.
    if (this.stumbleT <= 0) this._policeTargetZ += (POLICE_FAR - this._policeTargetZ) * dt * POLICE_RECEDE
    this.policeZ += (this._policeTargetZ - this.policeZ) * Math.min(1, dt * 3.5)

    // spawn
    this.spawnTimer -= dt
    const interval = Math.max(0.5, 1.2 - this.time * 0.006)
    if (this.spawnTimer <= 0) { this._spawn(); this.spawnTimer = interval }

    // défilement traverses
    for (const s of this.sleepers) {
      s.position.z += move
      if (s.position.z > DESPAWN_Z) s.position.z -= this._sleeperCount * this._sleeperSpacing
    }
    // défilement décor (+ recyclage : change de modèle si le biome a changé)
    for (const d of this.decor) {
      d.obj.position.z += move
      if (d.obj.position.z > DESPAWN_Z + 6) {
        d.obj.position.z -= this._decorSpan
        if (this._biomeKeys && !this._biomeKeys.includes(d.key)) this._replaceDecorSlot(d)
      }
    }
    // trains de décor : roulent sur les voies parallèles et se recyclent
    for (const t of this.sideTrains) {
      const adv = move * t.speed
      t.z += adv
      t.mesh.position.z = t.z
      for (const w of t.wheels) w.rotation.x += adv / 0.45
      if (t.z > DESPAWN_Z + 20) t.z -= this._sideSpan
    }

    // avance des objets dynamiques
    const px = this.laneX * LANE
    const magnet = this.magnetT > 0
    for (const it of this.items) {
      const adv = it.type === 'obs' && it.kind === 'train' ? move * it.roll : move
      it.z += adv
      it.mesh.position.z = it.z
      if (it.wheels) for (const w of it.wheels) w.rotation.x += adv / 0.45
      if (it.type === 'coin') {
        it.mesh.rotation.z += dt * 6
        // aimant actif : la pièce à portée est aspirée vers le joueur ; sinon flottement
        if (magnet && !it.taken && it.z > -MAGNET_RANGE && it.z < 8) {
          it.mesh.position.x += (px - it.mesh.position.x) * Math.min(1, dt * 9)
          it.mesh.position.y += ((this.y + 0.6) - it.mesh.position.y) * Math.min(1, dt * 9)
        } else {
          it.mesh.position.x += (LANES[it.lane] - it.mesh.position.x) * Math.min(1, dt * 6)
          it.mesh.position.y = it.baseY + Math.sin(this.time * 4 + it.z) * 0.12
        }
      } else if (it.type === 'power') {
        it.mesh.rotation.y += dt * 2.2
        it.mesh.position.y = 1.5 + Math.sin(this.time * 3 + it.z) * 0.18
      }
    }

    // --- sol dynamique : rampes (montée) + toit des trains (plateforme) ---
    let groundY = 0
    // laneIdx : voie "physique" actuelle du joueur (0/1/2) calculée sur sa position
    // réelle (laneX), pas sur sa voie cible. Permet de savoir EXACTEMENT dans quelle
    // voie il se trouve au pixel près.
    const laneIdx = Math.round(this.laneX + 1)   // laneX ∈ [-1,1] → index 0/1/2
    for (const it of this.items) {
      if (it.type !== 'obs') continue
      const dxLane = Math.abs(LANES[it.lane] - px)
      const overX = dxLane < LANE * 0.55
      if (!overX) continue
      if (it.kind === 'train') {
        if (Math.abs(it.z) < it.zHalf) {
          const le = it.z + it.zHalf          // longueur dont le bord avant a dépassé le joueur
          if (this.y >= it.topY - 0.5) {
            // Déjà sur le toit : on reste dessus seulement si on est dans la bonne voie
            if (laneIdx === it.lane) groundY = Math.max(groundY, it.topY)
          } else if (it.climb) {
            if (laneIdx === it.lane && this.targetLane === it.lane && le <= TRAIN_CLIMB) {
              // Montée par la rampe AVANT : joueur centré dans la voie ET dans la zone
              // de rampe (premiers TRAIN_CLIMB=5 unités du train). Au-delà = flanc.
              groundY = Math.max(groundY, it.topY * Math.max(0, le / TRAIN_CLIMB))
            } else if (le > TRAIN_CLIMB) {
              // Entrée latérale sur un train montable (arrivée par le flanc) : choc
              if (!it.hit) {
                it.hit = true
                if (this.policeZ - POLICE_SIDE_GAIN <= POLICE_CATCH) { this._crash('side', it); return }
                this._stumble(it.lane, px)
              }
            }
          } else if (!it.climb && le < 3) {
            // train NON montable : le bord avant nous percute de plein fouet -> perdu
            this._crash('front', it); return
          } else {
            // on rentre dans le flanc (changement de voie contre le train) -> chute
            if (!it.hit) {
              it.hit = true
              if (this.policeZ - POLICE_SIDE_GAIN <= POLICE_CATCH) { this._crash('side', it); return } // …sauf si trop proche
              this._stumble(it.lane, px)
            }
          }
        }
      }
    }
    this.groundY = groundY

    // gravité / suivi du sol courant (0, pente de rampe, ou toit de train)
    if (this.vy === 0 && groundY > this.y) {
      this.y = groundY                             // on gravit la rampe (le sol monte)
    } else {
      this.vy -= GRAVITY * dt
      this.y += this.vy * dt
      if (this.y <= groundY) { this.y = groundY; this.vy = 0 }
    }
    this.grounded = this.y <= groundY + 0.05

    // pièces, power-ups & obstacles bas (barrière / barre)
    const collectCoin = (it) => {
      it.taken = true
      this.coins += 1; this.score += COIN_PTS
      this.cb.onScore?.(Math.floor(this.score), this.coins)
    }
    for (const it of this.items) {
      if (it.type === 'coin') {
        if (it.taken) continue
        if (magnet && it.z > -MAGNET_RANGE && it.z < 8) {
          // aimant : collecte par proximité réelle, toutes voies confondues
          const dx = it.mesh.position.x - px, dy = it.mesh.position.y - (this.y + 0.6)
          if (dx * dx + dy * dy + it.z * it.z < 4) collectCoin(it)
        } else {
          const near = Math.abs(it.z) < it.zHalf + 0.6
          const sameLane = Math.abs(LANES[it.lane] - px) < LANE * 0.55
          if (near && sameLane && Math.abs(this.y - it.mesh.position.y) < 1.4) collectCoin(it)
        }
        continue
      }
      const near = Math.abs(it.z) < it.zHalf + 0.6
      const sameLane = Math.abs(LANES[it.lane] - px) < LANE * 0.55
      if (!near || !sameLane) continue
      if (it.type === 'power') {
        if (!it.taken && Math.abs(this.y - it.mesh.position.y) < 1.8) {
          it.taken = true
          if (it.kind === 'magnet') this.magnetT = MAGNET_TIME
          else this.bootsT = BOOTS_TIME
          this.cb.onPower?.(this.magnetT, this.bootsT)
        }
      } else if (it.kind === 'barrier') {
        if (!it.hit && !(this.y > 1.3)) { this._crash('front', it); return }
        it.hit = true
      } else if (it.kind === 'lowbar') {
        if (!it.hit && !(this.rolling > 0) && this.y < 2.6) { this._crash('front', it); return }
        it.hit = true
      }
      // 'train' est géré par le sol dynamique ci-dessus
    }

    // nettoyage
    this.items = this.items.filter(it => {
      const keep = it.z < DESPAWN_Z && !it.taken
      if (!keep) this.scene.remove(it.mesh)
      return keep
    })

    this._animatePlayer(dt)
  }

  _animatePlayer(dt) {
    const p = this.player
    p.position.x += (this.laneX * LANE - p.position.x) * Math.min(1, dt * 13)
    p.position.y = this.y

    // Modèles de jeu riggés : plongeon en roulade, saut en l'air, sinon course.
    if (this._usingGameModels && this._runEntry && this._jumpEntry) {
      const run    = this._activeRun   || this._runEntry
      const jump   = this._activeJump  || this._jumpEntry
      const plonge = this._activeAvatar === 1 ? (this._activePlonge || this._plongeEntry) : null
      const isRolling = this.rolling > 0
      const jumping   = !isRolling && !this.grounded
      // Avatar1 : bascule sur le modèle plonge. Avatar2 : reste sur run (figé).
      const active = (isRolling && plonge) ? plonge : jumping ? jump : run
      run.obj.visible  = active === run
      jump.obj.visible = active === jump
      if (this._activePlonge) this._activePlonge.obj.visible = active === plonge

      if (isRolling) {
        // Glissade : ne PAS avancer le mixer → animation figée sur la frame actuelle.
        // Avatar1 : on force la frame 0.12 s de la pose plongeon.
        // Avatar2 : on gèle la course où elle en était → bras et pieds immobiles.
        if (plonge && active.mixer && active.mixer.time > 0.12) active.mixer.setTime(0.12)
        // Pour avatar2 : aucun update → mixer ne bouge pas
      } else {
        if (active.mixer) active.mixer.update(dt)
      }
      // reset le buste (pas de rebond procédural sur les modèles riggés)
      this.model.position.y += (0 - this.model.position.y) * Math.min(1, dt * 20)
      this.model.rotation.x += (0 - this.model.rotation.x) * Math.min(1, dt * 15)
      this.model.rotation.z += (0 - this.model.rotation.z) * Math.min(1, dt * 15)
    }

    // Modèle GLB non riggé : pas d'articulations -> on simule la course par un
    // rebond vertical + tangage du buste (ignoré si un clip d'animation existe).
    const m = this.model
    if (m && !this.mixer && !this._usingGameModels) {
      const running = this.rolling <= 0 && this.stumbleT <= 0 && this.grounded
      const t = this.time * 9
      const bob = running ? Math.abs(Math.sin(t)) * 0.2 : 0
      m.position.y += (bob - m.position.y) * Math.min(1, dt * 20)
      // tangage avant/arrière (foulée) + balancement latéral
      m.rotation.x += ((running ? -0.12 + Math.sin(t) * 0.08 : 0) - m.rotation.x) * Math.min(1, dt * 15)
      m.rotation.z += ((running ? Math.sin(t) * 0.06 : 0) - m.rotation.z) * Math.min(1, dt * 15)
    }

    // chute latérale : le joueur est à terre, puis se relève
    if (this.stumbleT > 0) {
      p.rotation.x += (1.45 - p.rotation.x) * Math.min(1, dt * 14)   // face contre le sol
      p.rotation.z += (0 - p.rotation.z) * Math.min(1, dt * 14)
      p.scale.y += (0.7 - p.scale.y) * Math.min(1, dt * 14)
      this.legL.rotation.x = 0.5; this.legR.rotation.x = 0.3
      this.armL.rotation.x = 0.4; this.armR.rotation.x = 0.6
      return
    }
    // glissade : le joueur s'abaisse et s'incline en arrière, puis se relève
    // automatiquement quand le minuteur de roulade se termine.
    const rolling = this.rolling > 0
    // Modèle riggé : on n'écrase PAS le mesh (pas de scale.y), mais on penche le
    // personnage vers l'avant pour rendre la glissade visible (l'anim tourne sur
    // place). Primitif : ancien comportement (abaissement + inclinaison arrière).
    const riggedRoll = rolling && this._usingGameModels && this._plongeEntry
    const tScale = (rolling && !riggedRoll) ? 0.42 : 1
    p.scale.y += (tScale - p.scale.y) * Math.min(1, dt * 16)
    const tRotX = rolling ? (riggedRoll ? 1.15 : 0.95) : 0   // riggé : penché arrière (glissade)
    p.rotation.x += (tRotX - p.rotation.x) * Math.min(1, dt * 16)
    // légère inclinaison dans le virage
    p.rotation.z += ((this.targetLane - 1 - this.laneX) * -0.4 - p.rotation.z) * Math.min(1, dt * 10)

    // membres — "en l'air" seulement si on n'est pas posé sur un sol (toit de train inclus),
    // sinon le joueur doit continuer à courir (bras/jambes qui bougent) sur le toit.
    const airborne = !this.grounded
    if (rolling) {
      // glissade : bras et jambes immobiles (pose tendue), pas de course
      this.legL.rotation.x = 0.15
      this.legR.rotation.x = 0.15
      this.armL.rotation.x = 0.1
      this.armR.rotation.x = 0.1
    } else {
      const swing = airborne ? 0.5 : Math.sin(this.time * 15) * 0.9
      this.legL.rotation.x = swing
      this.legR.rotation.x = -swing
      this.armL.rotation.x = -swing
      this.armR.rotation.x = swing
    }

    // power-ups portés : aimant brandi dans la main levée, bottes aux pieds
    this.heldMagnet.visible = this.magnetT > 0
    if (this.magnetT > 0) {
      this.armR.rotation.x += (-2.7 - this.armR.rotation.x) * Math.min(1, dt * 12)  // bras levé
    }
    for (const b of this.boots) b.visible = this.bootsT > 0

    this._animatePolice(dt)
  }

  // L'inspecteur suit le joueur avec un léger retard, en courant.
  _animatePolice(dt) {
    if (!this.police) return
    this.policeX += (this.player.position.x - this.policeX) * Math.min(1, dt * 4)
    this.police.position.set(this.policeX, 0, this.policeZ)
    if (this._usingPoliceModel) { this._policeEntry.mixer?.update(dt); return }
    const sw = Math.sin(this.time * 15 + 0.6)
    this.pLegL.rotation.x = sw; this.pLegR.rotation.x = -sw
    this.pArmL.rotation.x = -sw * 0.8; this.pArmR.rotation.x = sw * 0.8
  }

  // Choc latéral : le joueur est projeté au sol, éjecté dans la voie voisine,
  // la police se rapproche ; il se relève ensuite et continue.
  _stumble(trainLane, px) {
    this.stumbleT = STUMBLE_TIME
    // Rapproche la CIBLE (policeZ suit en douceur → pas de téléportation).
    // 1er choc : cible passe à POLICE_BASE.
    // Chocs suivants : cible recule de POLICE_SIDE_GAIN.
    if (this._policeTargetZ >= POLICE_FAR - 0.5) {
      this._policeTargetZ = POLICE_BASE
    } else {
      this._policeTargetZ = Math.max(POLICE_CATCH + 0.5, this._policeTargetZ - POLICE_SIDE_GAIN)
    }
    const dir = px <= LANES[trainLane] ? -1 : 1        // repoussé du côté d'où on venait
    this.targetLane = Math.max(0, Math.min(2, trainLane + dir))
    this.vy = 0; this.y = 0
    this.shake = 0.35
  }

  // Choc : 'front' (bord avant / obstacle) ou 'side' (on rentre dans le flanc).
  _crash(type, item = null) {
    if (this.caught) return
    this.running = false
    this.gameOver = true
    this.caught = true
    this.caughtT = 0
    this.crashType = type
    this.shake = 0.5
    // Empêche le joueur de finir DANS l'objet : on cale la face avant de
    // l'obstacle juste devant lui (au lieu de le laisser chevaucher le joueur).
    if (item && item.mesh) {
      const zHalf = item.zHalf || 0.5
      const frontFace = -0.8               // face avant de l'obstacle un peu devant le joueur (z<0)
      if (item.z + zHalf > frontFace) {    // seulement s'il chevauche vraiment
        item.z = frontFace - zHalf
        item.mesh.position.z = item.z
      }
    }
    // choc latéral : l'inspecteur est déjà tout proche et bondit
    if (type === 'side') { this._policeTargetZ = POLICE_CATCH + 0.3; this.policeZ = Math.min(this.policeZ, 4) }
    this._setPoliceCaught(true)   // la police passe en animation de boxe
  }

  // Séquence de capture : la police se rue et attrape le joueur.
  _updateCaught(dt) {
    this.caughtT += dt
    this.policeX += (this.player.position.x - this.policeX) * Math.min(1, dt * 9)
    // écart de capture : plus grand avec le modèle riggé (volume) pour éviter que
    // la police et le joueur se chevauchent pendant la boxe.
    const caughtGap = this._usingPoliceModel ? 2.8 : 1.3
    this.policeZ += ((this.player.position.z + caughtGap) - this.policeZ) * Math.min(1, dt * 5)
    this.police.position.set(this.policeX, this.player.position.y, this.policeZ)
    if (this._usingPoliceModel) {
      // pendant la capture : animation de boxe (policeBox), sinon course
      const entry = this._policeBoxEntry || this._policeEntry
      entry.mixer?.update(dt)
    } else {
      // bras tendus pour attraper
      this.pArmL.rotation.x = -1.5; this.pArmR.rotation.x = -1.5
      const sw = Math.sin(this.caughtT * 24) * 0.7
      this.pLegL.rotation.x = sw; this.pLegR.rotation.x = -sw
    }
    // le joueur bascule
    this.player.rotation.x += ((this.crashType === 'front' ? 0.5 : 0.2) - this.player.rotation.x) * Math.min(1, dt * 8)
    if (!this._over && this.caughtT > 0.7) {
      this._over = true
      this.cb.onGameOver?.(Math.floor(this.score), this.coins)
    }
  }

  _render() {
    // Au repos (menus), la caméra dérive doucement -> fond cinématique vivant.
    const idle = !this.running && !this.caught
    const t = this.clock
    let baseX = 0, baseY = 8.8
    let lx = 0, ly = 0.6, lz = -20
    if (idle) {
      baseX = Math.sin(t * 0.28) * 2.6
      baseY = 8.8 + Math.sin(t * 0.2) * 0.8
      lx = Math.sin(t * 0.28) * 2.0
      ly = 1.4
      lz = -24
    }
    if (this.shake > 0) {
      this.camera.position.x = baseX + (Math.random() - 0.5) * this.shake * 2
      this.camera.position.y = baseY + (Math.random() - 0.5) * this.shake * 2
    } else {
      const k = idle ? 0.04 : 0.2
      this.camera.position.x += (baseX - this.camera.position.x) * k
      this.camera.position.y += (baseY - this.camera.position.y) * k
    }
    this.camera.lookAt(lx, ly, lz)
    this.renderer.render(this.scene, this.camera)
  }

  _loop(now) {
    let dt = (now - this.last) / 1000
    this.last = now
    if (dt > 0.05) dt = 0.05
    this.clock += dt
    if (this.mixer) this.mixer.update(dt)
    if (this.running) this._update(dt)
    else {
      if (this.shake > 0) this.shake -= dt
      if (this.caught) this._updateCaught(dt)
    }
    if (!this._ctxLost) this._render()   // pas de rendu tant que le contexte WebGL est perdu
    this.raf = requestAnimationFrame(t => this._loop(t))
  }
}
