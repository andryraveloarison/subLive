// Moteur du runner "subLive" — VRAI 3D avec Three.js.
// Le monde défile vers la caméra (forward = -z). Le joueur reste en z=0.

import * as THREE from 'three'

const LANE = 2.2                 // écart entre voies (unités monde)
const LANES = [-LANE, 0, LANE]
const SPAWN_Z = -140             // profondeur d'apparition
const DESPAWN_Z = 14             // au-delà (derrière la caméra) on supprime
const GRAVITY = 34
const JUMP_V = 12.5
const ROLL_TIME = 0.75           // durée de la glissade avant de se relever
const TRACK_HALF = LANE * 1.8    // demi-largeur de la voie ballastée
const TRAIN_CLIMB = 5            // longueur de la rampe avant du train : on grimpe dessus sans sauter
const POLICE_BASE = 7.5          // distance de poursuite en jeu normal
const POLICE_CATCH = 1.7         // en-deçà, la police attrape -> perdu
const POLICE_SIDE_GAIN = 2.6     // rapprochement à chaque choc latéral
const STUMBLE_TIME = 0.8         // durée où le joueur est à terre avant de se relever
const MAGNET_TIME = 8            // durée de l'aimant (attire les pièces)
const BOOTS_TIME = 8            // durée des bottes (super-saut)
const MAGNET_RANGE = 20          // portée d'attraction de l'aimant (en profondeur)
const BOOTS_JUMP_V = 20.5        // vitesse de saut avec les bottes (franchit les trains)
const ROOF_COIN_Y = 4.3          // hauteur des pièces posées au-dessus des trains

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
    this._initThree()
    this._buildWorld()
    this.reset()
    this._bindResize()
    this.last = performance.now()
    this._loop(this.last)
  }

  // ---------- Three.js ----------
  _initThree() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#8fd0ff')
    this.scene.fog = new THREE.Fog('#bfe6ff', 55, 150)

    this.camera = new THREE.PerspectiveCamera(62, 1, 0.1, 400)
    this.camera.position.set(0, 8.8, 13)
    this.camera.lookAt(0, 0.6, -20)

    // lumières (jour ensoleillé)
    const hemi = new THREE.HemisphereLight('#cfe9ff', '#6b7a5a', 1.0)
    this.scene.add(hemi)
    const sun = new THREE.DirectionalLight('#fff6e0', 1.7)
    sun.position.set(-14, 30, 8)
    sun.castShadow = true
    sun.shadow.mapSize.set(1024, 1024)
    sun.shadow.camera.left = -30; sun.shadow.camera.right = 30
    sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30
    sun.shadow.camera.far = 90
    this.scene.add(sun)
    this.scene.add(new THREE.AmbientLight('#bcd4ff', 0.55))
  }

  // ---------- Décor & sol (statiques / recyclés) ----------
  _buildWorld() {
    const S = this.scene

    // ciel dégradé (grand dôme)
    const skyGeo = new THREE.SphereGeometry(300, 32, 16)
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      uniforms: {
        top: { value: new THREE.Color('#1e78d8') },
        bot: { value: new THREE.Color('#bfe9ff') },
      },
      vertexShader: `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `varying vec3 vP; uniform vec3 top; uniform vec3 bot;
        void main(){ float h = clamp((vP.y/300.0)*0.5+0.5,0.0,1.0); gl_FragColor = vec4(mix(bot,top,h),1.0);} `,
    })
    S.add(new THREE.Mesh(skyGeo, skyMat))

    // soleil
    const sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(14, 24, 24),
      new THREE.MeshBasicMaterial({ color: '#ffe6ad' })
    )
    sunMesh.position.set(-30, 24, -180)
    S.add(sunMesh)

    // sol général (herbe/béton sombre de chaque côté)
    const groundMat = new THREE.MeshStandardMaterial({ color: '#232a3a', roughness: 1 })
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.position.set(0, -0.02, -100)
    ground.receiveShadow = true
    S.add(ground)

    // ballast (voie)
    const ballastMat = new THREE.MeshStandardMaterial({ color: '#3a3d47', roughness: 1 })
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

    // DÉCOR gauche / droite : immeubles, arbres, lampadaires (recyclés)
    this.decor = []
    this._decorSpan = 260
    const buildingMats = ['#3b4a6b', '#4a3b5f', '#2f5a52', '#5f4a3b', '#404a5c']
      .map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 }))
    const winMat = new THREE.MeshStandardMaterial({
      color: '#ffd98a', emissive: '#ffcf6e', emissiveIntensity: 0.8, roughness: 0.5,
    })
    const trunkMat = new THREE.MeshStandardMaterial({ color: '#6b4a2f', roughness: 1 })
    const leafMat = new THREE.MeshStandardMaterial({ color: '#2f7d4f', roughness: 1 })
    const poleMat = new THREE.MeshStandardMaterial({ color: '#7a8290', metalness: 0.6, roughness: 0.5 })
    const lampMat = new THREE.MeshStandardMaterial({ color: '#fff2c0', emissive: '#ffe08a', emissiveIntensity: 1 })

    const makeBuilding = (side, seed) => {
      const g = new THREE.Group()
      const h = 8 + (seed % 5) * 4
      const w = 4 + (seed % 3) * 1.5
      const d = 4 + ((seed >> 1) % 3) * 1.5
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        buildingMats[seed % buildingMats.length]
      )
      body.position.y = h / 2
      body.castShadow = true
      g.add(body)
      // fenêtres (grille sur la face intérieure)
      const cols = 3, rows = Math.max(3, Math.floor(h / 2.5))
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if ((r + c + seed) % 4 === 0) continue
          const win = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1, 0.1), winMat)
          win.position.set(
            (c - (cols - 1) / 2) * (w / cols) * 0.8,
            1.6 + r * (h / rows) * 0.9,
            (side < 0 ? d / 2 : -d / 2) + (side < 0 ? 0.05 : -0.05)
          )
          g.add(win)
        }
      }
      return g
    }
    const makeTree = () => {
      const g = new THREE.Group()
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 2.2, 6), trunkMat)
      trunk.position.y = 1.1; trunk.castShadow = true; g.add(trunk)
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(1.6, 3.4, 8), leafMat)
      leaf.position.y = 3.4; leaf.castShadow = true; g.add(leaf)
      return g
    }
    const makeLamp = () => {
      const g = new THREE.Group()
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 5, 6), poleMat)
      pole.position.y = 2.5; g.add(pole)
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 10), lampMat)
      head.position.y = 5; g.add(head)
      return g
    }

    // deux rangées de chaque côté, réparties en profondeur
    let seed = 1
    for (let side of [-1, 1]) {
      for (let i = 0; i < 26; i++) {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff
        const kind = seed % 5
        let obj, baseX
        if (kind < 3) { obj = makeBuilding(side, seed); baseX = side * (9 + (seed % 4)) }
        else if (kind === 3) { obj = makeTree(); baseX = side * (6.5 + (seed % 3)) }
        else { obj = makeLamp(); baseX = side * 5.2 }
        obj.position.set(baseX, 0, -(i / 26) * this._decorSpan + DESPAWN_Z - Math.random() * 4)
        S.add(obj)
        this.decor.push({ obj, side, baseX })
      }
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
    this._sideSpan = 220
    const railMat = new THREE.MeshStandardMaterial({ color: '#c7cfdd', metalness: 0.8, roughness: 0.35 })
    for (const side of [-1, 1]) {
      const baseX = side * 13
      // deux rails continus sous la voie de décor
      for (const dx of [-0.7, 0.7]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.14, 400), railMat)
        rail.position.set(baseX + dx, 0.07, -100)
        this.scene.add(rail)
      }
      // deux rames par côté, décalées en profondeur, qui se recyclent
      for (let k = 0; k < 2; k++) {
        const { grp, wheels } = this._makeTrainMesh(this._mat.sideTrain, 34)
        const z = DESPAWN_Z - k * (this._sideSpan / 2) - side * 30
        grp.position.set(baseX, 0, z)
        this.scene.add(grp)
        this.sideTrains.push({ mesh: grp, wheels, baseX, z, speed: 1.7 })
      }
    }
  }

  _buildPlayer() {
    const g = new THREE.Group()
    // matériaux stockés -> l'apparence (personnage) est modifiable via setCharacter()
    const skin = new THREE.MeshStandardMaterial({ color: '#f6cfa8', roughness: 0.8 })
    const shirt = new THREE.MeshStandardMaterial({ color: '#22d3ee', roughness: 0.6 })
    const pants = new THREE.MeshStandardMaterial({ color: '#22406a', roughness: 0.8 })
    const cap = new THREE.MeshStandardMaterial({ color: '#ef4444', roughness: 0.7 })
    this._pMat = { skin, shirt, pants, cap }

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.1, 0.55), shirt)
    torso.position.y = 1.55; torso.castShadow = true; g.add(torso)

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 16), skin)
    head.position.y = 2.45; head.castShadow = true; g.add(head)
    const capMesh = new THREE.Mesh(new THREE.SphereGeometry(0.44, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), cap)
    capMesh.position.y = 2.5; g.add(capMesh)
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.4), cap)
    visor.position.set(0, 2.5, 0.42); g.add(visor)

    // bras
    const armGeo = new THREE.BoxGeometry(0.24, 0.9, 0.24)
    this.armL = new THREE.Group(); this.armR = new THREE.Group()
    const aL = new THREE.Mesh(armGeo, shirt); aL.position.y = -0.45; aL.castShadow = true
    const aR = new THREE.Mesh(armGeo, shirt); aR.position.y = -0.45; aR.castShadow = true
    this.armL.add(aL); this.armR.add(aR)
    this.armL.position.set(-0.58, 2.0, 0); this.armR.position.set(0.58, 2.0, 0)
    g.add(this.armL, this.armR)

    // jambes
    const legGeo = new THREE.BoxGeometry(0.3, 1.0, 0.3)
    this.legL = new THREE.Group(); this.legR = new THREE.Group()
    const lL = new THREE.Mesh(legGeo, pants); lL.position.y = -0.5; lL.castShadow = true
    const lR = new THREE.Mesh(legGeo, pants); lR.position.y = -0.5; lR.castShadow = true
    this.legL.add(lL); this.legR.add(lR)
    this.legL.position.set(-0.22, 1.0, 0); this.legR.position.set(0.22, 1.0, 0)
    g.add(this.legL, this.legR)

    // aimant tenu dans la main droite (visible seulement quand l'aimant est actif)
    this.heldMagnet = new THREE.Group()
    const hArc = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.08, 10, 16, Math.PI), this._mat.magnet)
    hArc.rotation.z = Math.PI; this.heldMagnet.add(hArc)
    for (const sx of [-0.2, 0.2]) {
      const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.14, 10), this._mat.magnetTip)
      tip.position.set(sx, -0.07, 0); this.heldMagnet.add(tip)
    }
    this.heldMagnet.position.set(0, -0.95, 0)      // au bout du bras (dans la main)
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
      b.position.set(0, -1.0, 0)                    // au pied de la jambe
      b.visible = false
      leg.add(b); this.boots.push(b)
    }

    this.player = g
    this.playerTorso = torso
    this.scene.add(g)
    this._buildPolice()
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
    this.coins = 0
    this.spawnTimer = 0
    this.running = false
    this.gameOver = false
    this.time = 0
    this.shake = 0
    // police (poursuite)
    this.policeX = 0
    this.policeZ = POLICE_BASE   // distance derrière le joueur en jeu normal
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
    if (this.police) { this.police.position.set(0, 0, POLICE_BASE); this.police.rotation.set(0, 0, 0) }
  }

  _bindResize() {
    this.resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
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
    this.renderer.dispose()
  }

  start() {
    this.reset()
    this.running = true
    this.last = performance.now()
    if (!this.raf) this._loop(this.last)
  }

  // Change l'apparence du joueur (couleurs) selon le personnage choisi.
  setCharacter(colors) {
    if (!this._pMat || !colors) return
    if (colors.skin) this._pMat.skin.color.set(colors.skin)
    if (colors.shirt) this._pMat.shirt.color.set(colors.shirt)
    if (colors.pants) this._pMat.pants.color.set(colors.pants)
    if (colors.cap) this._pMat.cap.color.set(colors.cap)
  }

  // ---------- Contrôles ----------
  moveLeft() { if (this.running && this.stumbleT <= 0) this.targetLane = Math.max(0, this.targetLane - 1) }
  moveRight() { if (this.running && this.stumbleT <= 0) this.targetLane = Math.min(2, this.targetLane + 1) }
  setLane(i) { if (this.running && this.stumbleT <= 0) this.targetLane = Math.max(0, Math.min(2, i)) }
  jump() { if (this.running && this.stumbleT <= 0 && this.grounded && this.rolling <= 0) this.vy = this.bootsT > 0 ? BOOTS_JUMP_V : JUMP_V }
  roll() { if (this.running && this.stumbleT <= 0 && this.grounded) { this.rolling = ROLL_TIME; this.vy = 0 } }

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
      // des pièces au-dessus de certains trains (atteignables sur le toit, ou en
      // super-saut avec les bottes — y compris au-dessus des trains qui bougent)
      if (kind === 'train' && Math.random() < 0.5) this._addRoofCoins(lane, SPAWN_Z)
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
    // la police récupère lentement du terrain quand on ne se fait pas toucher
    if (this.stumbleT <= 0) this.policeZ += (POLICE_BASE - this.policeZ) * dt * 0.12

    // spawn
    this.spawnTimer -= dt
    const interval = Math.max(0.5, 1.2 - this.time * 0.006)
    if (this.spawnTimer <= 0) { this._spawn(); this.spawnTimer = interval }

    // défilement traverses
    for (const s of this.sleepers) {
      s.position.z += move
      if (s.position.z > DESPAWN_Z) s.position.z -= this._sleeperCount * this._sleeperSpacing
    }
    // défilement décor
    for (const d of this.decor) {
      d.obj.position.z += move
      if (d.obj.position.z > DESPAWN_Z + 6) d.obj.position.z -= this._decorSpan
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
    for (const it of this.items) {
      if (it.type !== 'obs') continue
      const overX = Math.abs(LANES[it.lane] - px) < LANE * 0.55
      if (!overX) continue
      if (it.kind === 'train') {
        if (Math.abs(it.z) < it.zHalf) {
          const le = it.z + it.zHalf          // longueur dont le bord avant a dépassé le joueur
          if (this.y >= it.topY - 0.5) {
            groundY = Math.max(groundY, it.topY)               // déjà sur le toit -> on marche dessus
          } else if (it.climb && le <= TRAIN_CLIMB) {
            // train MONTABLE : rampe avant, le sol monte, on grimpe SANS sauter
            groundY = Math.max(groundY, it.topY * Math.max(0, le / TRAIN_CLIMB))
          } else if (!it.climb && le < 3) {
            // train NON montable : le bord avant nous percute de plein fouet -> perdu
            this._crash('front'); return
          } else {
            // on rentre dans le flanc (changement de voie contre le train) -> chute
            if (!it.hit) {
              it.hit = true
              if (this.policeZ - POLICE_SIDE_GAIN <= POLICE_CATCH) { this._crash('side'); return } // …sauf si trop proche
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
      this.coins += 1; this.score += 15
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
        if (!it.hit && !(this.y > 1.3)) { this._crash('front'); return }
        it.hit = true
      } else if (it.kind === 'lowbar') {
        if (!it.hit && !(this.rolling > 0) && this.y < 2.6) { this._crash('front'); return }
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
    const tScale = rolling ? 0.42 : 1
    p.scale.y += (tScale - p.scale.y) * Math.min(1, dt * 16)
    p.rotation.x += ((rolling ? 0.95 : 0) - p.rotation.x) * Math.min(1, dt * 16)
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
    const sw = Math.sin(this.time * 15 + 0.6)
    this.pLegL.rotation.x = sw; this.pLegR.rotation.x = -sw
    this.pArmL.rotation.x = -sw * 0.8; this.pArmR.rotation.x = sw * 0.8
  }

  // Choc latéral : le joueur est projeté au sol, éjecté dans la voie voisine,
  // la police se rapproche ; il se relève ensuite et continue.
  _stumble(trainLane, px) {
    this.stumbleT = STUMBLE_TIME
    this.policeZ = Math.max(POLICE_CATCH, this.policeZ - POLICE_SIDE_GAIN)
    const dir = px <= LANES[trainLane] ? -1 : 1        // repoussé du côté d'où on venait
    this.targetLane = Math.max(0, Math.min(2, trainLane + dir))
    this.vy = 0; this.y = 0
    this.shake = 0.35
  }

  // Choc : 'front' (bord avant / obstacle) ou 'side' (on rentre dans le flanc).
  _crash(type) {
    if (this.caught) return
    this.running = false
    this.gameOver = true
    this.caught = true
    this.caughtT = 0
    this.crashType = type
    this.shake = 0.5
    // choc latéral : l'inspecteur est déjà tout proche et bondit
    if (type === 'side') this.policeZ = Math.min(this.policeZ, 3)
  }

  // Séquence de capture : la police se rue et attrape le joueur.
  _updateCaught(dt) {
    this.caughtT += dt
    this.policeX += (this.player.position.x - this.policeX) * Math.min(1, dt * 9)
    this.policeZ += ((this.player.position.z + 1.3) - this.policeZ) * Math.min(1, dt * 5)
    this.police.position.set(this.policeX, this.player.position.y, this.policeZ)
    // bras tendus pour attraper
    this.pArmL.rotation.x = -1.5; this.pArmR.rotation.x = -1.5
    const sw = Math.sin(this.caughtT * 24) * 0.7
    this.pLegL.rotation.x = sw; this.pLegR.rotation.x = -sw
    // le joueur bascule
    this.player.rotation.x += ((this.crashType === 'front' ? 0.5 : 0.2) - this.player.rotation.x) * Math.min(1, dt * 8)
    if (!this._over && this.caughtT > 0.7) {
      this._over = true
      this.cb.onGameOver?.(Math.floor(this.score), this.coins)
    }
  }

  _render() {
    // secousse caméra
    const baseX = 0, baseY = 8.8
    if (this.shake > 0) {
      this.camera.position.x = baseX + (Math.random() - 0.5) * this.shake * 2
      this.camera.position.y = baseY + (Math.random() - 0.5) * this.shake * 2
    } else {
      this.camera.position.x += (baseX - this.camera.position.x) * 0.2
      this.camera.position.y += (baseY - this.camera.position.y) * 0.2
    }
    this.renderer.render(this.scene, this.camera)
  }

  _loop(now) {
    let dt = (now - this.last) / 1000
    this.last = now
    if (dt > 0.05) dt = 0.05
    if (this.running) this._update(dt)
    else {
      if (this.shake > 0) this.shake -= dt
      if (this.caught) this._updateCaught(dt)
    }
    this._render()
    this.raf = requestAnimationFrame(t => this._loop(t))
  }
}
