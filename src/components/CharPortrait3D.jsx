import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js'

const _cache = {}    // chemin → gltf
const _pending = {}  // chemin → [callbacks]

function loadModel(path, cb) {
  if (_cache[path]) { cb(_cache[path]); return }
  if (!_pending[path]) _pending[path] = []
  _pending[path].push(cb)
  if (_pending[path].length > 1) return
  new GLTFLoader().load(
    path,
    (gltf) => {
      _cache[path] = gltf
      _pending[path].forEach(fn => fn(gltf))
      delete _pending[path]
    },
    undefined,
    (err) => console.error('[Avatar] ÉCHEC du chargement', path, err),
  )
}

// Déclenche le chargement des modèles de sélection à l'avance (ex. pendant l'intro).
export function preloadSelectionModel() {
  loadModel('/modeleAvatar.glb', () => {})
  loadModel('/modelAvatar2.glb', () => {})
}

// UN SEUL contexte WebGL partagé par TOUS les portraits (offscreen). Le navigateur
// limite le nombre de contextes WebGL (~16) : en créer un par portrait, EN PLUS du
// jeu (Three.js) et du contexte interne de MediaPipe (webcam), dépassait la limite.
// Le navigateur renvoyait alors un contexte déjà perdu → `getShaderPrecisionFormat`
// nul → crash de tout le SetupScreen (et gel de la caméra). Ici on rend chaque
// portrait dans ce renderer unique puis on recopie l'image dans un canvas 2D local.
let _sharedRenderer = null
let _sharedFailed = false
function getSharedRenderer() {
  if (_sharedRenderer || _sharedFailed) return _sharedRenderer
  try {
    const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })
    r.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    r.outputColorSpace = THREE.SRGBColorSpace
    _sharedRenderer = r
  } catch (err) {
    // Aucun contexte WebGL disponible : on renonce aux portraits 3D (fallback 2D)
    // plutôt que de faire planter l'application.
    _sharedFailed = true
    console.warn('[Avatar] contexte WebGL indisponible, portraits en repli', err)
  }
  return _sharedRenderer
}

export default function CharPortrait3D({ char, size = 100, modelPath = '/modeleAvatar.glb' }) {
  const canvasRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = getSharedRenderer()
    const ctx2d = canvas.getContext('2d')
    if (!renderer || !ctx2d) { setFailed(true); return }

    let disposed = false

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100)

    scene.add(new THREE.HemisphereLight('#cfe9ff', '#6b7a5a', 1.2))
    const sun = new THREE.DirectionalLight('#fff6e0', 2.0)
    sun.position.set(-3, 6, 4)
    scene.add(sun)
    scene.add(new THREE.AmbientLight('#ffffff', 0.5))

    let raf = null
    let pivot = null
    let mixer = null
    const clock = new THREE.Clock()

    // Hauteur cible du modèle en unités monde ; la caméra est calée dessus.
    const TARGET_H = 2.0
    const fov = camera.fov * (Math.PI / 180)
    const dist = (TARGET_H / 2) / Math.tan(fov / 2) * 1.15   // marge 15 %
    camera.position.set(0, 0, dist)
    camera.lookAt(0, 0, 0)

    let deferId = null
    loadModel(modelPath, (gltf) => {
      if (disposed) return
      // Différé après le paint : le clone du SkinnedMesh + l'upload GPU sont lourds
      // et gèleraient l'affichage de la page. On laisse la page s'afficher d'abord.
      deferId = requestAnimationFrame(() => {
        if (disposed) return
        const model = cloneSkinned(gltf.scene)

        // Dimensions calculées UNE seule fois sur le gltf partagé (même géométrie
        // pour toutes les cartes) puis mises en cache, au lieu d'un setFromObject
        // coûteux par carte.
        if (!gltf._dims) {
          const box = new THREE.Box3().setFromObject(gltf.scene)
          gltf._dims = {
            center: box.getCenter(new THREE.Vector3()),
            size: box.getSize(new THREE.Vector3()),
          }
        }
        const { center, size: dims } = gltf._dims
        const s = TARGET_H / (dims.y || 1)
        model.scale.setScalar(s)
        model.position.set(-center.x * s, -center.y * s, -center.z * s)

        pivot = new THREE.Group()
        pivot.add(model)
        scene.add(pivot)

        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model)
          mixer.clipAction(gltf.animations[0]).play()
        }
      })
    })

    // Résolution physique du buffer (device pixels) pour recopier au bon ratio.
    const dpr = Math.min(window.devicePixelRatio, 2)
    canvas.width = Math.round(size * dpr)
    canvas.height = Math.round(size * dpr)

    let angle = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      const dt = clock.getDelta()
      if (mixer) mixer.update(dt)
      angle += 0.008
      if (pivot) pivot.rotation.y = angle
      // Rend dans le renderer partagé (offscreen) à la taille de CE portrait, puis
      // recopie le résultat dans le canvas 2D local. Le contexte WebGL reste unique.
      try {
        renderer.setSize(size, size, false)
        renderer.render(scene, camera)
        ctx2d.clearRect(0, 0, canvas.width, canvas.height)
        ctx2d.drawImage(renderer.domElement, 0, 0, canvas.width, canvas.height)
      } catch (err) {
        cancelAnimationFrame(raf)
        setFailed(true)
        console.warn('[Avatar] rendu du portrait interrompu, repli 2D', err)
      }
    }
    loop()

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      if (deferId) cancelAnimationFrame(deferId)
      // Ne PAS libérer le renderer : il est partagé et persistant. On relâche juste
      // les références de cette scène (les géométries/matériaux appartiennent au
      // cache gltf partagé et ne doivent pas être disposés ici).
    }
  }, [size, modelPath])

  if (failed) {
    // Repli sans WebGL : pastille colorée aux couleurs du personnage + initiale.
    const shirt = char?.colors?.shirt || '#888'
    const initial = (char?.name || '?').trim().charAt(0).toUpperCase()
    return (
      <div style={{
        width: size, height: size, flexShrink: 0, borderRadius: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `radial-gradient(ellipse at 50% 35%, ${shirt} 0%, #1a1a1a 80%)`,
        color: '#fff', fontWeight: 800, fontSize: size * 0.42,
        textShadow: '0 2px 6px rgba(0,0,0,.5)',
      }}>
        {initial}
      </div>
    )
  }

  return (
    <div style={{ width: size, height: size, overflow: 'hidden', flexShrink: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: size, height: size }} />
    </div>
  )
}
