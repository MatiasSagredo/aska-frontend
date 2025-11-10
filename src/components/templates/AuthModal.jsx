import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useAuth } from './AuthProvider.jsx'
import '../../styles/templates/auth-modal.css'

const INITIAL_LOGIN = { email: '', password: '' }
const INITIAL_REGISTER = { name: '', email: '', password: '', belt: 'blanco' }

function AuthModal({ isOpen, onClose }) {
  const { login, register, isSuperUser, superuserEmail } = useAuth()
  const [mode, setMode] = useState('login')
  const [loginForm, setLoginForm] = useState(INITIAL_LOGIN)
  const [registerForm, setRegisterForm] = useState(INITIAL_REGISTER)
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    if (!isOpen) {
      setFeedback(null)
      setMode('login')
      setLoginForm(INITIAL_LOGIN)
      setRegisterForm(INITIAL_REGISTER)
    }
  }, [isOpen])

  const handleModeChange = (nextMode) => {
    setMode(nextMode)
    setFeedback(null)
  }

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    const result = login(loginForm)

    setFeedback(result.message ?? null)

    if (result.success && typeof onClose === 'function') {
      onClose()
    }
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()
    const result = register(registerForm)

    setFeedback(result.message ?? null)

    if (result.success && typeof onClose === 'function') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="auth-modal" role="dialog" aria-modal="true">
      <div className="auth-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="auth-modal__panel">
        <button type="button" className="auth-modal__close" onClick={onClose} aria-label="Cerrar">
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>

        <div className="auth-modal__switcher" role="tablist" aria-label="Selecciona acción">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'login'}
            className={`auth-modal__tab${mode === 'login' ? ' is-active' : ''}`}
            onClick={() => handleModeChange('login')}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'register'}
            className={`auth-modal__tab${mode === 'register' ? ' is-active' : ''}`}
            onClick={() => handleModeChange('register')}
          >
            Registrarme
          </button>
        </div>

        {mode === 'login' ? (
          <form className="auth-modal__form" onSubmit={handleLoginSubmit}>
            <div className="auth-modal__field">
              <label htmlFor="loginEmail">Correo electrónico</label>
              <input
                id="loginEmail"
                type="email"
                value={loginForm.email}
                onChange={(event) =>
                  setLoginForm((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>
            <div className="auth-modal__field">
              <label htmlFor="loginPassword">Contraseña</label>
              <input
                id="loginPassword"
                type="password"
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm((prev) => ({ ...prev, password: event.target.value }))
                }
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="auth-modal__submit">
              Entrar
            </button>

            <p className="auth-modal__hint">
              Superusuario: <strong>{superuserEmail}</strong> / <strong>SuperAska#2025</strong>
            </p>
          </form>
        ) : (
          <form className="auth-modal__form" onSubmit={handleRegisterSubmit}>
            <div className="auth-modal__field-grid">
              <div className="auth-modal__field">
                <label htmlFor="registerName">Nombre</label>
                <input
                  id="registerName"
                  type="text"
                  value={registerForm.name}
                  onChange={(event) =>
                    setRegisterForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                  placeholder="Tu nombre o apodo"
                  required
                />
              </div>
              <div className="auth-modal__field">
                <label htmlFor="registerBelt">Cinturón</label>
                <select
                  id="registerBelt"
                  value={registerForm.belt}
                  onChange={(event) =>
                    setRegisterForm((prev) => ({ ...prev, belt: event.target.value }))
                  }
                >
                  <option value="blanco">Blanco</option>
                  <option value="azul">Azul</option>
                  <option value="marron">Marrón</option>
                  <option value="negro">Negro</option>
                </select>
              </div>
            </div>

            <div className="auth-modal__field">
              <label htmlFor="registerEmail">Correo electrónico</label>
              <input
                id="registerEmail"
                type="email"
                value={registerForm.email}
                onChange={(event) =>
                  setRegisterForm((prev) => ({ ...prev, email: event.target.value }))
                }
                required
              />
            </div>

            <div className="auth-modal__field">
              <label htmlFor="registerPassword">Contraseña</label>
              <input
                id="registerPassword"
                type="password"
                value={registerForm.password}
                onChange={(event) =>
                  setRegisterForm((prev) => ({ ...prev, password: event.target.value }))
                }
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="auth-modal__submit">
              Crear cuenta
            </button>
          </form>
        )}

        {feedback && <p className="auth-modal__feedback">{feedback}</p>}

        {isSuperUser && (
          <div className="auth-modal__superuser">
            <i className="fa-solid fa-crown" aria-hidden="true" />
            <p>
              Eres superusuario. Tienes acceso completo a configuraciones avanzadas y lanzamientos
              anticipados.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

AuthModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default AuthModal
