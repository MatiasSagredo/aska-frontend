import { useState } from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '../templates/AuthProvider.jsx'
import '../../styles/organisms/header.css'

function Header({ onAuthTrigger, onNavigate }) {
  const { user, isSuperUser, logout } = useAuth()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleNavigation = (target) => {
    setMenuOpen(false)
    if (typeof onNavigate === 'function') {
      onNavigate(target)
    }
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleLogout = () => {
    setMenuOpen(false)
    logout()
  }

  return (
    <header className="header">
      <button type="button" className="header__brand" onClick={() => handleNavigation('top')}>
        <span className="header__logo">Aska</span>
        <span className="header__wordmark">Gear Supply</span>
      </button>
      <button
        type="button"
        className="header__menu-toggle"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        aria-controls="headerMobileNav"
      >
        <i className="fa-solid fa-ellipsis" aria-hidden="true" />
      </button>
      <nav className="header__nav" aria-label="Navegación principal">
        <button type="button" onClick={() => handleNavigation('bundles')}>
          Niveles
        </button>
        <button type="button" onClick={() => handleNavigation('colecciones')}>
          Colecciones
        </button>
        <button type="button" onClick={() => handleNavigation('contacto')}>
          Contacto
        </button>
      </nav>
      <div className="header__auth">
        {user ? (
          <>
            <div className="header__auth-info">
              <span className="header__auth-name">{user.name}</span>
              <span className="header__auth-role">
                {isSuperUser ? 'Superusuario' : `Cinturón ${user.belt ?? 'N/A'}`}
              </span>
            </div>
            <button type="button" className="header__button" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <button type="button" className="header__button" onClick={onAuthTrigger}>
            Iniciar sesión
          </button>
        )}
      </div>
      <nav
        id="headerMobileNav"
        className={`header__nav-responsive${isMenuOpen ? ' is-open' : ''}`}
        aria-label="Navegación móvil"
      >
        <button type="button" onClick={() => handleNavigation('bundles')}>
          Niveles
        </button>
        <button type="button" onClick={() => handleNavigation('colecciones')}>
          Colecciones
        </button>
        <button type="button" onClick={() => handleNavigation('contacto')}>
          Contacto
        </button>
        {user ? (
          <button type="button" onClick={handleLogout} className="header__responsive-auth">
            Cerrar sesión
          </button>
        ) : (
          <button type="button" onClick={() => { setMenuOpen(false); onAuthTrigger?.() }}>
            Iniciar sesión
          </button>
        )}
      </nav>
    </header>
  )
}

Header.propTypes = {
  onAuthTrigger: PropTypes.func,
  onNavigate: PropTypes.func,
}

export default Header
