// Identité locale : le « nom de l'appareil » saisi au premier lancement
// (ex. « PC Rakoto »). Sert d'étiquette dans le classement : Pseudo (appareil).
const DEVICE_KEY = 'kilalao.device'

export function getDevice() {
  try { return localStorage.getItem(DEVICE_KEY) || '' } catch { return '' }
}

export function setDevice(name) {
  const v = String(name || '').trim().slice(0, 24)
  try { localStorage.setItem(DEVICE_KEY, v) } catch { /* stockage indispo */ }
  return v
}
