import { useState } from 'react'
import { submitReview } from '../lib/supabase.js'
import { getDevice } from '../lib/profile.js'

// Modal « Laisser un avis » : note (facultative) + commentaire. L'avis est
// enregistré dans Supabase et consultable par l'admin dans /datax.
export default function ReviewModal({ onClose }) {
  const [pseudo, setPseudo] = useState('')
  const [rating, setRating] = useState(0)
  const [msg, setMsg] = useState('')
  const [state, setState] = useState('idle')   // idle | sending | done | error

  const send = async () => {
    if (!msg.trim() || state === 'sending') return
    setState('sending')
    const ok = await submitReview({ pseudo, device: getDevice(), rating, message: msg })
    setState(ok ? 'done' : 'error')
  }

  return (
    <div className="review-overlay" onClick={onClose}>
      <div className="review-panel" onClick={(e) => e.stopPropagation()}>
        {state === 'done' ? (
          <div className="review-done">
            <div className="review-done__icon">💜</div>
            <h2 className="review-panel__title">Merci pour ton avis !</h2>
            <p className="review-panel__sub">Ton retour nous aide à améliorer le jeu.</p>
            <button className="btn" onClick={onClose}>Fermer</button>
          </div>
        ) : (
          <>
            <h2 className="review-panel__title">💬 Laisser un avis</h2>
            <p className="review-panel__sub">Dis-nous ce que tu penses de Dashikara.</p>

            <input
              className="review-input"
              placeholder="Ton nom (facultatif)"
              maxLength={24}
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />

            <div className="review-stars" role="group" aria-label="Note">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`review-star${n <= rating ? ' on' : ''}`}
                  onClick={() => setRating(n === rating ? 0 : n)}
                  aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
                >★</button>
              ))}
            </div>

            <textarea
              className="review-text"
              placeholder="Ton commentaire…"
              maxLength={500}
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />

            {state === 'error' && <p className="review-err">Envoi impossible. Réessaie plus tard.</p>}

            <div className="review-actions">
              <button className="btn" disabled={!msg.trim() || state === 'sending'} onClick={send}>
                {state === 'sending' ? 'Envoi…' : 'Envoyer'}
              </button>
              <button className="btn ghost" onClick={onClose}>Annuler</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
