import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <span className="brand-badge">React 19</span>
        <span className="brand-title">Starter Template</span>
      </div>
      <nav className="nav-links">
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
