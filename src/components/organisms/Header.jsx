import PropTypes from 'prop-types'
import { useAuth } from '../templates/AuthProvider.jsx'
import '../../styles/organisms/header.css'

function Header({ onAuthTrigger, onNavigate }) {
  const { user, isSuperUser, logout } = useAuth()

  const handleNavigation = (target) => {
    if (typeof onNavigate === 'function') {
      onNavigate(target)
    }
  }

  return (
    <header className="header">
      <button type="button" className="header__brand" onClick={() => handleNavigation('top')}>
        <span className="header__logo">Aska</span>
        <span className="header__wordmark">Gear Supply</span>
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
            <button type="button" className="header__button" onClick={logout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <button type="button" className="header__button" onClick={onAuthTrigger}>
            Iniciar sesión
          </button>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  onAuthTrigger: PropTypes.func,
  onNavigate: PropTypes.func,
}

export default Header
