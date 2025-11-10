import { useCallback, useState } from 'react'
import './App.css'
import Header from './components/organisms/Header.jsx'
import Hero from './components/organisms/Hero.jsx'
import BeltUnlock from './components/organisms/BeltUnlock.jsx'
import GearShowcase from './components/organisms/GearShowcase.jsx'
import Footer from './components/organisms/Footer.jsx'
import ParticleBackground from './components/templates/ParticleBackground.jsx'
import AuthModal from './components/templates/AuthModal.jsx'

function App() {
  const [isAuthOpen, setAuthOpen] = useState(false)

  const openAuth = () => setAuthOpen(true)
  const closeAuth = () => setAuthOpen(false)

  const handleNavigate = useCallback((target) => {
    if (target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const section = document.getElementById(target)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <div className="app">
      <ParticleBackground />
      <Header onAuthTrigger={openAuth} onNavigate={handleNavigate} />
      <div className="app__content">
        <Hero
          onPrimaryAction={openAuth}
          onSecondaryAction={() => handleNavigate('colecciones')}
        />
        <BeltUnlock />
        <GearShowcase />
        <Footer />
      </div>
      <AuthModal isOpen={isAuthOpen} onClose={closeAuth} />
    </div>
  )
}

export default App
