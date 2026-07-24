// Réseau multijoueur du Rallye — WebRTC via PeerJS (serveur d'appairage public).
// L'écran = hôte (arbitre + affichage), chaque téléphone = manette (pair distant).
import Peer from 'peerjs'

// Serveurs ICE : indispensables une fois EN LIGNE (kilalao.vercel.app) pour que
// le téléphone (souvent en 4G / autre réseau) traverse les NAT jusqu'à l'hôte.
// STUN (Google) suffit pour la plupart des NAT domestiques ; les serveurs TURN
// publics (OpenRelay) servent de relais quand le NAT est symétrique (data mobile).
const ICE_CONFIG = {
  iceServers: [
    { urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] },
    { urls: 'turn:openrelay.metered.ca:80',            username: 'openrelayproject', credential: 'openrelayproject' },
    { urls: 'turn:openrelay.metered.ca:443',           username: 'openrelayproject', credential: 'openrelayproject' },
    { urls: 'turn:openrelay.metered.ca:443?transport=tcp', username: 'openrelayproject', credential: 'openrelayproject' },
  ],
}

const PREFIX = 'sublive-rallye-'
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // sans I/O/0/1 ambigus

function randomCode(n = 4) {
  let s = ''
  for (let i = 0; i < n; i++) {
    s += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)]
  }
  return s
}

// URL que le QR code encode : ouvre l'app sur la route manette avec le code.
// Si l'app est ouverte en localhost, on substitue l'IP LAN (injectée par Vite)
// pour que le téléphone puisse joindre le PC sur le WiFi.
export function joinUrl(code) {
  const loc = window.location
  // __LAN_HOST__ est remplacé au build par vite.config.js (IP LAN ou null)
  const lan = typeof __LAN_HOST__ !== 'undefined' ? __LAN_HOST__ : null
  let host = loc.host   // hostname:port
  if (lan && /^(localhost|127\.|0\.0\.0\.0|\[?::1)/.test(loc.hostname)) {
    host = loc.port ? `${lan}:${loc.port}` : lan
  }
  return `${loc.protocol}//${host}${loc.pathname}#/rallye-join/${code}`
}

// ── Hôte (grand écran) ──────────────────────────────────────────────
// callbacks: { onConnect(id), onInput(id, input), onDisconnect(id), onReady(code) }
export function createHost(callbacks) {
  const conns = new Map()   // peerId → DataConnection
  let peer = null
  let destroyed = false
  let code = null

  const tryOpen = (attempt = 0) => {
    if (destroyed) return
    code = randomCode()
    peer = new Peer(PREFIX + code, { debug: 1, config: ICE_CONFIG })

    peer.on('open', () => {
      if (destroyed) { peer.destroy(); return }
      callbacks.onReady?.(code)
    })

    peer.on('connection', (conn) => {
      conn.on('open', () => {
        conns.set(conn.peer, conn)
        callbacks.onConnect?.(conn.peer, conn)
      })
      conn.on('data', (data) => {
        if (data && data.type === 'input') callbacks.onInput?.(conn.peer, data)
      })
      const drop = () => {
        if (conns.delete(conn.peer)) callbacks.onDisconnect?.(conn.peer)
      }
      conn.on('close', drop)
      conn.on('error', drop)
    })

    peer.on('error', (err) => {
      // Code déjà pris sur le serveur public → réessaie avec un autre
      if (err.type === 'unavailable-id' && attempt < 6) {
        peer.destroy()
        tryOpen(attempt + 1)
      } else {
        callbacks.onError?.(err)
      }
    })
  }
  tryOpen()

  return {
    getCode: () => code,
    send(id, msg) { const c = conns.get(id); if (c && c.open) c.send(msg) },
    broadcast(msg) { for (const c of conns.values()) if (c.open) c.send(msg) },
    destroy() {
      destroyed = true
      for (const c of conns.values()) { try { c.close() } catch (_) {} }
      conns.clear()
      if (peer) { try { peer.destroy() } catch (_) {} }
    },
  }
}

// ── Manette (téléphone) ─────────────────────────────────────────────
// callbacks: { onOpen(), onMessage(msg), onClose(), onError(err) }
export function createController(code, name, callbacks) {
  const peer = new Peer({ debug: 1, config: ICE_CONFIG })
  let conn = null
  let destroyed = false

  peer.on('open', () => {
    if (destroyed) return
    // canal fiable+ordonné ; le nom du joueur voyage dans les métadonnées
    conn = peer.connect(PREFIX + code.toUpperCase(), { reliable: true, metadata: { name } })
    conn.on('open', () => callbacks.onOpen?.())
    conn.on('data', (msg) => callbacks.onMessage?.(msg))
    conn.on('close', () => callbacks.onClose?.())
    conn.on('error', (err) => callbacks.onError?.(err))
  })
  peer.on('error', (err) => callbacks.onError?.(err))

  return {
    send(input) { if (conn && conn.open) conn.send({ type: 'input', ...input }) },
    destroy() {
      destroyed = true
      if (conn) { try { conn.close() } catch (_) {} }
      try { peer.destroy() } catch (_) {}
    },
  }
}
