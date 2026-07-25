import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchPlays, fetchLeaderboard, fetchPlayerCount, dbReady } from '../lib/supabase.js'

// Tableau de bord privé (protégé par mot de passe). Affiche l'activité Kilalao :
// jeu le plus joué, classement Dashikara et courbe des parties par joueur
// (par semaine / par mois). Le contrôle du mot de passe est CÔTÉ CLIENT — c'est
// un garde-fou léger, pas une vraie sécurité.
const PASSWORD = 'nananjygame'
const AUTH_KEY = 'datax.auth'

const GAME_LABELS = { dashikara: 'Dashikara', penopeno: 'Penopeno', rallye: '2Rally' }
const GAME_COLORS = { dashikara: '#f5a623', penopeno: '#4caf50', rallye: '#e53935' }
const MEDALS = ['🥇', '🥈', '🥉']

// ─── Buckets temporels ───
const startOfWeek = (d) => {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  x.setDate(x.getDate() - ((x.getDay() + 6) % 7))   // ramène au lundi
  return x
}
const dayKey   = (d) => { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}` }
const weekKey  = (d) => startOfWeek(d).toISOString().slice(0, 10)
const monthKey = (d) => { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}` }
const yearKey  = (d) => String(new Date(d).getFullYear())

const MOIS  = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
const JOURS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const weekLabel  = (k) => { const d = new Date(k); return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}` }
const monthLabel = (k) => { const [y, m] = k.split('-'); return `${MOIS[Number(m) - 1]} ${y.slice(2)}` }
// Libellés complets (avec l'année) pour les info-bulles et la période affichée.
const weekFull   = (k) => { const d = new Date(k); return `Semaine du ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}` }
const monthFull  = (k) => { const [y, m] = k.split('-'); return `${MOIS[Number(m) - 1]} ${y}` }

export default function DataxPage() {
  const navigate = useNavigate()
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === '1')
  const [pw, setPw] = useState('')
  const [err, setErr] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (pw === PASSWORD) { sessionStorage.setItem(AUTH_KEY, '1'); setAuthed(true); setErr(false) }
    else { setErr(true) }
  }

  if (!authed) {
    return (
      <div className="datax-gate">
        <form className="datax-gate__box" onSubmit={submit}>
          <div className="datax-gate__logo">🔒</div>
          <h1 className="datax-gate__title">DataX</h1>
          <p className="datax-gate__sub">Espace privé — mot de passe requis</p>
          <input
            className={`datax-gate__input${err ? ' is-err' : ''}`}
            type="password" autoFocus value={pw}
            onChange={(e) => { setPw(e.target.value); setErr(false) }}
            placeholder="Mot de passe"
          />
          {err && <p className="datax-gate__err">Mot de passe incorrect</p>}
          <button className="datax-gate__btn" type="submit">Entrer</button>
          <button className="datax-gate__back" type="button" onClick={() => navigate('/')}>← Retour</button>
        </form>
      </div>
    )
  }

  return <Dashboard onExit={() => navigate('/')} />
}

function Dashboard({ onExit }) {
  const [allPlays, setAllPlays] = useState(null)
  const [dashPlays, setDashPlays] = useState(null)
  const [ranking, setRanking] = useState(null)
  const [players, setPlayers] = useState(null)        // nb total de joueurs Dashikara
  const [scale, setScale] = useState('days')          // 'days' | 'weeks' | 'months' | 'years'

  useEffect(() => {
    let on = true
    Promise.all([fetchPlays(null), fetchPlays('dashikara'), fetchLeaderboard(20), fetchPlayerCount()])
      .then(([all, dash, rank, count]) => {
        if (!on) return
        setAllPlays(all); setDashPlays(dash); setRanking(rank); setPlayers(count)
      })
    return () => { on = false }
  }, [])

  // Comptage des parties par jeu → jeu le plus joué.
  const gameStats = useMemo(() => {
    if (!allPlays) return null
    const counts = {}
    for (const p of allPlays) counts[p.game] = (counts[p.game] || 0) + 1
    const rows = Object.entries(counts).map(([game, n]) => ({ game, n })).sort((a, b) => b.n - a.n)
    return { rows, total: allPlays.length, top: rows[0] || null }
  }, [allPlays])

  // Parties Dashikara aujourd'hui (« a joué X fois aujourd'hui »).
  const todayCount = useMemo(() => {
    if (!dashPlays) return 0
    const t0 = new Date(); t0.setHours(0, 0, 0, 0)
    return dashPlays.filter(p => new Date(p.played_at) >= t0).length
  }, [dashPlays])

  // Courbe du TOTAL de parties Dashikara lancées par période (pas par joueur).
  // 'days' = les 7 jours de la semaine en cours ; sinon buckets par semaine/mois/année.
  const chart = useMemo(() => {
    if (!dashPlays || dashPlays.length === 0) return null
    const countBy = (keyOf) => {
      const c = {}
      for (const p of dashPlays) { const k = keyOf(p.played_at); c[k] = (c[k] || 0) + 1 }
      return c
    }

    let buckets, labels, fullLabels
    if (scale === 'days') {
      const monday = startOfWeek(new Date())
      const days = Array.from({ length: 7 }, (_, i) => { const d = new Date(monday); d.setDate(monday.getDate() + i); return d })
      buckets = days.map(dayKey)
      labels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
      fullLabels = days.map((d, i) => `${JOURS[i]} ${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`)
    } else if (scale === 'weeks') {
      buckets = [...new Set(dashPlays.map(p => weekKey(p.played_at)))].sort()
      labels = buckets.map(weekLabel); fullLabels = buckets.map(weekFull)
    } else if (scale === 'years') {
      buckets = [...new Set(dashPlays.map(p => yearKey(p.played_at)))].sort()
      labels = buckets.slice(); fullLabels = buckets.map(y => `Année ${y}`)
    } else { // months
      buckets = [...new Set(dashPlays.map(p => monthKey(p.played_at)))].sort()
      labels = buckets.map(monthLabel); fullLabels = buckets.map(monthFull)
    }

    const keyOf = scale === 'days' ? dayKey : scale === 'weeks' ? weekKey : scale === 'years' ? yearKey : monthKey
    const counts = countBy(keyOf)
    const values = buckets.map(b => counts[b] || 0)
    const period = fullLabels.length ? `${fullLabels[0]} → ${fullLabels[fullLabels.length - 1]}` : ''
    const series = [{ name: 'Parties', color: GAME_COLORS.dashikara, values }]
    return { buckets, labels, fullLabels, period, series }
  }, [dashPlays, scale])

  // Top 3 des joueurs les plus actifs (nb de parties Dashikara depuis le début).
  const active = useMemo(() => {
    if (!dashPlays) return null
    const c = {}
    for (const p of dashPlays) { const who = p.device || p.pseudo || 'Anonyme'; c[who] = (c[who] || 0) + 1 }
    return Object.entries(c).map(([name, n]) => ({ name, n })).sort((a, b) => b.n - a.n).slice(0, 3)
  }, [dashPlays])

  const loading = allPlays == null

  return (
    <div className="datax">
      <header className="datax__top">
        <h1 className="datax__brand">📊 DataX <span>· Kilalao</span></h1>
        <button className="datax__exit" onClick={onExit}>← Quitter</button>
      </header>

      {!dbReady && <div className="datax__warn">Base de données non configurée — aucune donnée à afficher.</div>}
      {loading ? (
        <div className="datax__loading">Chargement des statistiques…</div>
      ) : (
        <div className="datax__grid">
          {/* Jeu le plus joué */}
          <section className="datax__card">
            <div className="datax__card-title">Jeu le plus joué</div>
            {gameStats?.top ? (
              <>
                <div className="datax__hero">
                  <span className="datax__hero-name" style={{ color: GAME_COLORS[gameStats.top.game] || '#fff' }}>
                    {GAME_LABELS[gameStats.top.game] || gameStats.top.game}
                  </span>
                  <span className="datax__hero-n">{gameStats.top.n} parties</span>
                </div>
                <div className="datax__bars">
                  {gameStats.rows.map(r => (
                    <div key={r.game} className="datax__bar-row">
                      <span className="datax__bar-lbl">{GAME_LABELS[r.game] || r.game}</span>
                      <div className="datax__bar-track">
                        <div className="datax__bar-fill" style={{
                          width: `${gameStats.rows[0].n ? (r.n / gameStats.rows[0].n) * 100 : 0}%`,
                          background: GAME_COLORS[r.game] || '#00e5ff',
                        }} />
                      </div>
                      <span className="datax__bar-n">{r.n}</span>
                    </div>
                  ))}
                </div>
                <div className="datax__foot-note">{gameStats.total} parties au total · {todayCount} sur Dashikara aujourd'hui</div>
              </>
            ) : <div className="datax__empty">Aucune partie enregistrée.</div>}
          </section>

          {/* Classement Dashikara */}
          <section className="datax__card">
            <div className="datax__card-head">
              <div className="datax__card-title">Classement Dashikara</div>
              {players != null && <span className="datax__badge">{players} joueur{players > 1 ? 's' : ''}</span>}
            </div>
            {ranking && ranking.length > 0 ? (
              <div className="datax__rank">
                {ranking.map((r, i) => (
                  <div key={r.pseudo + '·' + r.device} className={`datax__rank-row${i === 0 ? ' is-lead' : ''}`}>
                    <span className="datax__rank-pos">{i + 1}</span>
                    <span className="datax__rank-name">{i === 0 && <span className="datax__crown">👑</span>}{r.device} <i>({r.pseudo})</i></span>
                    <span className="datax__rank-score">🪙 {Number(r.best_score).toLocaleString('fr-FR')}</span>
                  </div>
                ))}
              </div>
            ) : <div className="datax__empty">Aucun score.</div>}
          </section>

          {/* Top 3 des joueurs les plus actifs */}
          <section className="datax__card">
            <div className="datax__card-title">Top 3 · Joueurs les plus actifs</div>
            {active && active.length > 0 ? (
              <div className="datax__rank">
                {active.map((a, i) => (
                  <div key={a.name} className="datax__rank-row">
                    <span className="datax__rank-medal">{MEDALS[i]}</span>
                    <span className="datax__rank-name">{a.name}</span>
                    <span className="datax__rank-score">{a.n} partie{a.n > 1 ? 's' : ''}</span>
                  </div>
                ))}
                <div className="datax__foot-note">Parties Dashikara jouées depuis le début</div>
              </div>
            ) : <div className="datax__empty">Aucune partie enregistrée.</div>}
          </section>

          {/* Courbe du total de parties Dashikara lancées par période */}
          <section className="datax__card datax__card--wide">
            <div className="datax__card-head">
              <div className="datax__card-title">Parties lancées · Dashikara</div>
              <div className="datax__toggle">
                <button className={scale === 'days'   ? 'is-on' : ''} onClick={() => setScale('days')}>7 jours</button>
                <button className={scale === 'weeks'  ? 'is-on' : ''} onClick={() => setScale('weeks')}>Semaines</button>
                <button className={scale === 'months' ? 'is-on' : ''} onClick={() => setScale('months')}>Mois</button>
                <button className={scale === 'years'  ? 'is-on' : ''} onClick={() => setScale('years')}>Année</button>
              </div>
            </div>
            {chart ? (
              <>
                {chart.period && <div className="datax__period">📅 {chart.period}</div>}
                <LineChart labels={chart.labels} fullLabels={chart.fullLabels} series={chart.series} showValues />
              </>
            ) : <div className="datax__empty">Pas encore de parties Dashikara.</div>}
          </section>
        </div>
      )}
    </div>
  )
}

// Graphe en ligne (SVG, aucune dépendance). `series[i].values` est aligné sur
// `labels` (même longueur = axe X). `showValues` affiche le nombre au-dessus des points.
function LineChart({ labels, fullLabels = [], series, showValues = false }) {
  const W = 720, H = 260, PL = 34, PR = 12, PT = 22, PB = 34
  const iw = W - PL - PR, ih = H - PT - PB
  const n = labels.length
  const maxY = Math.max(1, ...series.flatMap(s => s.values))
  const x = (i) => PL + (n <= 1 ? iw / 2 : (i / (n - 1)) * iw)
  const y = (v) => PT + ih - (v / maxY) * ih

  // Graduations Y (0..maxY, jusqu'à 4 pas entiers).
  const step = Math.max(1, Math.ceil(maxY / 4))
  const ticks = []
  for (let v = 0; v <= maxY; v += step) ticks.push(v)

  // N'affiche qu'une étiquette X sur k pour ne pas surcharger.
  const every = Math.ceil(n / 8)

  return (
    <svg className="datax__chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
      {ticks.map(v => (
        <g key={v}>
          <line x1={PL} y1={y(v)} x2={W - PR} y2={y(v)} stroke="rgba(255,255,255,0.08)" />
          <text x={PL - 8} y={y(v) + 4} textAnchor="end" className="datax__chart-tick">{v}</text>
        </g>
      ))}
      {labels.map((lb, i) => (i % every === 0 || i === n - 1) && (
        <text key={i} x={x(i)} y={H - 12} textAnchor="middle" className="datax__chart-tick">{lb}</text>
      ))}
      {series.map(s => {
        const d = s.values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')
        return (
          <g key={s.name}>
            <path d={d} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            {s.values.map((v, i) => (
              <g key={i}>
                {showValues && n <= 20 && v > 0 && (
                  <text x={x(i)} y={y(v) - 8} textAnchor="middle" className="datax__chart-val">{v}</text>
                )}
                <circle cx={x(i)} cy={y(v)} r="3.5" fill={s.color}>
                  <title>{`${fullLabels[i] || labels[i]} : ${v} partie${v > 1 ? 's' : ''}`}</title>
                </circle>
              </g>
            ))}
          </g>
        )
      })}
    </svg>
  )
}
