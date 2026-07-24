import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'os'

// IP LAN à mettre dans le QR code multijoueur (le téléphone doit joindre le PC).
// Ignore loopback / docker / tailscale ; préfère le WiFi/Ethernet en 192.168.x puis 10.x.
// Forçable avec la variable d'env HOST_IP (ex: HOST_IP=192.168.1.42 npm run dev).
function lanIp() {
  if (process.env.HOST_IP) return process.env.HOST_IP
  const skip = /^(lo|docker|br-|veth|tailscale|tun|virbr)/
  const cands = []
  for (const [name, nets] of Object.entries(os.networkInterfaces())) {
    if (skip.test(name)) continue
    for (const net of nets || []) {
      if (net.family !== 'IPv4' || net.internal) continue
      let score = 0
      if (/^(wl|wlan|wlo)/.test(name)) score += 100      // WiFi en priorité
      else if (/^(en|eth)/.test(name)) score += 50       // puis Ethernet
      if (net.address.startsWith('192.168.')) score += 20
      else if (net.address.startsWith('10.')) score += 10
      else if (net.address.startsWith('172.')) score -= 20 // souvent docker
      cands.push({ ip: net.address, score })
    }
  }
  cands.sort((a, b) => b.score - a.score)
  return cands.length ? cands[0].ip : null
}

export default defineConfig(() => {
  const ip = lanIp()
  if (ip) console.log(`\n  ➜  Multijoueur : QR / manette accessibles via http://${ip}:5173\n`)
  return {
    plugins: [react()],
    server: { host: true, port: 5173 },
    define: { __LAN_HOST__: JSON.stringify(ip) },
  }
})
