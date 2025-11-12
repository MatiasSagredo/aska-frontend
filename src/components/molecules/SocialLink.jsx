import PropTypes from 'prop-types'
import Icon from '../atoms/Icon.jsx'
import '../../styles/molecules/social-link.css'

function SocialLink({ href, label, icon }) {
  return (
    <a className="social-link" href={href} aria-label={label}>
      <Icon prefix="fa-brands" name={icon} />
    </a>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default SocialLink
