import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="page home-page">
      <div className="hero-logos">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="hero-title">Vite + React 19 + React Router 7</h1>
      <p className="hero-subtitle">
        Gabarit moderne et prêt à l&apos;emploi pour développer vos applications React.
      </p>

      <div className="card counter-card">
        <button 
          className="counter-btn" 
          onClick={() => setCount((prev) => prev + 1)}
        >
          Compteur : <span className="counter-value">{count}</span>
        </button>
        <p className="hint-text">
          Cliquez pour tester la réactivité avec <code>useState</code>.
        </p>
      </div>

      <div className="grid-features">
        <div className="feature-card">
          <h3>⚡ Vite</h3>
          <p>Démarrage instantané et Hot Module Replacement (HMR) ultra rapide.</p>
        </div>
        <div className="feature-card">
          <h3>⚛️ React 19</h3>
          <p>Dernières fonctionnalités React pour des interfaces performantes.</p>
        </div>
        <div className="feature-card">
          <h3>🧭 React Router</h3>
          <p>Navigation côté client fluide et déclarative sans rechargement.</p>
        </div>
      </div>

      <div className="cta-container">
        <Link to="/about" className="cta-button">
          Découvrir la page À propos &rarr;
        </Link>
      </div>
    </div>
  )
}

export default Home
