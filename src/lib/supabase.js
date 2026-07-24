// Client Supabase (leaderboard Dashikara). Optionnel : si les variables d'env
// ne sont pas configurées, le jeu fonctionne quand même (classement désactivé)
// au lieu de planter.
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = (url && key && !key.startsWith('REMPLACE'))
  ? createClient(url, key)
  : null
export const dbReady = !!supabase

const TABLE = 'dashikara_scores'

// Enregistre le score s'il bat le meilleur du couple (pseudo, appareil).
export async function submitScore(pseudo, device, score) {
  if (!supabase) return
  const p = String(pseudo || '').trim().slice(0, 24)
  const d = String(device || '').trim().slice(0, 24)
  if (!p || !d) return
  try {
    const { data } = await supabase.from(TABLE)
      .select('best_score').eq('pseudo', p).eq('device', d).maybeSingle()
    if (data && data.best_score >= score) return          // pas mieux → rien à faire
    await supabase.from(TABLE).upsert(
      { pseudo: p, device: d, best_score: Math.floor(score), updated_at: new Date().toISOString() },
      { onConflict: 'pseudo,device' },
    )
  } catch (e) { console.warn('[supabase] submitScore', e) }
}

// Top N du classement (meilleur score décroissant).
export async function fetchLeaderboard(limit = 10) {
  if (!supabase) return []
  try {
    const { data, error } = await supabase.from(TABLE)
      .select('pseudo, device, best_score')
      .order('best_score', { ascending: false })
      .limit(limit)
    if (error) throw error
    return data || []
  } catch (e) { console.warn('[supabase] fetchLeaderboard', e); return [] }
}

if (import.meta.env.DEV) window.__db = { submitScore, fetchLeaderboard, dbReady }
