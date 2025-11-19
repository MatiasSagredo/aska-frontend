import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Hero from '../components/organisms/Hero.jsx'
import BeltUnlock from '../components/organisms/BeltUnlock.jsx'
import GearShowcase from '../components/organisms/GearShowcase.jsx'

function scrollToTarget(target) {
  if (!target) {
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
}

function Home({
  onAuthTrigger,
  onCatalogNavigate,
  onCatalogCategory,
  pendingScroll,
  onScrollHandled,
}) {
  useEffect(() => {
    if (!pendingScroll) {
      return
    }

    // Wait for the frame to ensure sections are mounted before scrolling
    const frame = requestAnimationFrame(() => {
      scrollToTarget(pendingScroll)
      onScrollHandled?.()
    })

    return () => cancelAnimationFrame(frame)
  }, [pendingScroll, onScrollHandled])

  return (
    <>
      <Hero onPrimaryAction={onAuthTrigger} onSecondaryAction={onCatalogNavigate} />
      <BeltUnlock />
      <GearShowcase onCatalogNavigate={onCatalogCategory} />
    </>
  )
}

Home.propTypes = {
  onAuthTrigger: PropTypes.func,
  onCatalogNavigate: PropTypes.func,
  onCatalogCategory: PropTypes.func,
  pendingScroll: PropTypes.string,
  onScrollHandled: PropTypes.func,
}

Home.defaultProps = {
  onAuthTrigger: undefined,
  onCatalogNavigate: undefined,
  onCatalogCategory: undefined,
  pendingScroll: undefined,
  onScrollHandled: undefined,
}

export default Home
