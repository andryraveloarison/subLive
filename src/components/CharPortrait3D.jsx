import { useEffect, useRef } from 'react'
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

export default function CharPortrait3D({ char, size = 100, modelPath = '/modeleAvatar.glb' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let disposed = false

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(size, size)   // met à jour le buffer ET le style CSS (220px)
    renderer.outputColorSpace = THREE.SRGBColorSpace

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

    let angle = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      const dt = clock.getDelta()
      if (mixer) mixer.update(dt)
      angle += 0.008
      if (pivot) pivot.rotation.y = angle
      renderer.render(scene, camera)
    }
    loop()

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      if (deferId) cancelAnimationFrame(deferId)
      renderer.dispose()
    }
  }, [])

  return (
    <div style={{ width: size, height: size, overflow: 'hidden', flexShrink: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: size, height: size }} />
    </div>
  )
}
