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
const PLAYS = 'game_plays'
const REVIEWS = 'dashikara_reviews'

// Enregistre le score s'il bat le meilleur du couple (pseudo, appareil).
// Résout à `true` si le classement a été mis à jour (nouveau record), `false`
// sinon — utile pour rafraîchir l'affichage seulement quand c'est utile.
export async function submitScore(pseudo, device, score) {
  if (!supabase) return false
  const p = String(pseudo || '').trim().slice(0, 24)
  const d = String(device || '').trim().slice(0, 24)
  if (!p || !d) return false
  try {
    const { data } = await supabase.from(TABLE)
      .select('best_score').eq('pseudo', p).eq('device', d).maybeSingle()
    if (data && data.best_score >= score) return false     // pas mieux → rien à faire
    const { error } = await supabase.from(TABLE).upsert(
      { pseudo: p, device: d, best_score: Math.floor(score), updated_at: new Date().toISOString() },
      { onConflict: 'pseudo,device' },
    )
    if (error) throw error
    return true
  } catch (e) { console.warn('[supabase] submitScore', e); return false }
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

// Nombre de joueurs classés (une ligne du classement = un couple pseudo/appareil).
export async function fetchPlayerCount() {
  if (!supabase) return 0
  try {
    const { count, error } = await supabase.from(TABLE)
      .select('*', { count: 'exact', head: true })
    if (error) throw error
    return count || 0
  } catch (e) { console.warn('[supabase] fetchPlayerCount', e); return 0 }
}

// Journalise une partie lancée (tous jeux). Silencieux si la DB est absente
// ou si la table game_plays n'a pas encore été créée (voir sql/game_plays.sql).
export async function recordPlay(game, pseudo, device) {
  if (!supabase) return
  try {
    await supabase.from(PLAYS).insert({
      game: String(game || '').trim().slice(0, 32),
      pseudo: String(pseudo || '').trim().slice(0, 24),
      device: String(device || '').trim().slice(0, 24),
    })
  } catch (e) { console.warn('[supabase] recordPlay', e) }
}

// Toutes les parties (optionnellement filtrées par jeu), du plus ancien au plus
// récent. Agrégation faite côté client (volumes modestes d'un jeu de kiosque).
export async function fetchPlays(game = null, limit = 5000) {
  if (!supabase) return []
  try {
    let q = supabase.from(PLAYS)
      .select('game, pseudo, device, played_at')
      .order('played_at', { ascending: true })
      .limit(limit)
    if (game) q = q.eq('game', game)
    const { data, error } = await q
    if (error) throw error
    return data || []
  } catch (e) { console.warn('[supabase] fetchPlays', e); return [] }
}

// ── Avis / commentaires des joueurs (reçus dans /datax) ──────────────
// Enregistre un avis. Résout à `true` si l'envoi a réussi.
export async function submitReview({ pseudo, device, rating, message } = {}) {
  if (!supabase) return false
  const msg = String(message || '').trim().slice(0, 500)
  if (!msg) return false
  const r = Math.floor(Number(rating))
  try {
    const { error } = await supabase.from(REVIEWS).insert({
      pseudo: String(pseudo || '').trim().slice(0, 24),
      device: String(device || '').trim().slice(0, 24),
      rating: r >= 1 && r <= 5 ? r : null,
      message: msg,
    })
    if (error) throw error
    return true
  } catch (e) { console.warn('[supabase] submitReview', e); return false }
}

// Tous les avis, du plus récent au plus ancien (affichés dans /datax).
export async function fetchReviews(limit = 200) {
  if (!supabase) return []
  try {
    const { data, error } = await supabase.from(REVIEWS)
      .select('pseudo, device, rating, message, created_at')
      .order('created_at', { ascending: false })
      .limit(limit)
    if (error) throw error
    return data || []
  } catch (e) { console.warn('[supabase] fetchReviews', e); return [] }
}

if (import.meta.env.DEV) window.__db = { submitScore, fetchLeaderboard, fetchPlayerCount, recordPlay, fetchPlays, submitReview, fetchReviews, dbReady }
