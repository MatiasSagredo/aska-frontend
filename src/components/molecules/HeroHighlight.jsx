import PropTypes from 'prop-types'
import '../../styles/molecules/hero-highlight.css'

function HeroHighlight({ title, description }) {
  return (
    <li className="hero-highlight">
      <strong>{title}</strong>
      <span>{description}</span>
    </li>
  )
}

HeroHighlight.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HeroHighlight
