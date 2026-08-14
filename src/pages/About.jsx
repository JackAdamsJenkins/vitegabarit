import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="page about-page">
      <h1 className="hero-title">À propos de ce gabarit</h1>
      <p className="hero-subtitle">
        Ce template sert de base propre pour démarrer un nouveau projet web en React.
      </p>

      <div className="info-section">
        <div className="info-card">
          <h2>📦 Structure du projet</h2>
          <ul className="info-list">
            <li><code>src/pages/</code> : Contient les vues principales (Home, About).</li>
            <li><code>src/components/</code> : Contient les composants réutilisables (Navbar, Layout).</li>
            <li><code>src/App.jsx</code> : Configuration des routes principales.</li>
            <li><code>src/main.jsx</code> : Point d&apos;entrée de l&apos;application.</li>
          </ul>
        </div>

        <div className="info-card">
          <h2>🚀 Comment ajouter une nouvelle route ?</h2>
          <ol className="info-list steps">
            <li>Créez un nouveau composant dans <code>src/pages/MaPage.jsx</code>.</li>
            <li>Importez-le dans <code>src/App.jsx</code>.</li>
            <li>Ajoutez <code>&lt;Route path=&quot;/ma-page&quot; element=&#123;&lt;MaPage /&gt;&#125; /&gt;</code>.</li>
            <li>Ajoutez un lien de navigation avec <code>NavLink</code> ou <code>Link</code>.</li>
          </ol>
        </div>
      </div>

      <div className="cta-container">
        <Link to="/" className="cta-button secondary">
          &larr; Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}

export default About
