import { useCallback, useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import ParticleBackground from './components/templates/ParticleBackground.jsx'
import AuthModal from './components/templates/AuthModal.jsx'
import Header from './components/organisms/Header.jsx'
import Footer from './components/organisms/Footer.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Contact from './pages/Contact.jsx'
import Collections from './pages/Collections.jsx'
import Levels from './pages/Levels.jsx'

function App() {
  const [isAuthOpen, setAuthOpen] = useState(false)
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const openAuth = useCallback(() => setAuthOpen(true), [])
  const closeAuth = useCallback(() => setAuthOpen(false), [])

  const handleNavigate = useCallback(
    (target) => {
      if (!target) {
        return
      }

      if (target === 'catalogo') {
        navigate('/catalogo')
        return
      }

      if (target === 'colecciones') {
        navigate('/colecciones')
        return
      }

      if (target === 'bundles') {
        navigate('/niveles')
        return
      }

      if (target === 'contacto') {
        if (location.pathname === '/contacto') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          navigate('/contacto')
        }
        return
      }

      if (location.pathname !== '/') {
        setPendingScrollTarget(target)
        navigate('/')
        return
      }

      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const section = document.getElementById(target)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    [location.pathname, navigate],
  )

  const acknowledgeScroll = useCallback(() => setPendingScrollTarget(null), [])

  const navigateToCatalog = useCallback(() => {
    navigate('/catalogo')
  }, [navigate])

  const navigateToCatalogSection = useCallback(
    (sectionId) => {
      if (!sectionId) {
        navigate('/catalogo')
        return
      }

      navigate('/catalogo', { state: { focus: sectionId } })
    },
    [navigate],
  )

  return (
    <div className="app">
      <ParticleBackground />
      <Header onAuthTrigger={openAuth} onNavigate={handleNavigate} />
      <div className="app__content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAuthTrigger={openAuth}
                onCatalogNavigate={navigateToCatalog}
                onCatalogCategory={navigateToCatalogSection}
                pendingScroll={pendingScrollTarget}
                onScrollHandled={acknowledgeScroll}
              />
            }
          />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/colecciones" element={<Collections />} />
          <Route path="/niveles" element={<Levels />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
      <Footer includeAnchorId={location.pathname === '/'} />
      <AuthModal isOpen={isAuthOpen} onClose={closeAuth} />
    </div>
  )
}

export default App
