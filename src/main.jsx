import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter : permet d'ouvrir /datax directement (sans #) en le réécrivant
// vers /#/datax, pour un lien partageable propre.
if (window.location.pathname === '/datax' && !window.location.hash) {
  window.history.replaceState(null, '', '/#/datax')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
