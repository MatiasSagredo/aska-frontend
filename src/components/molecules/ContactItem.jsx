import PropTypes from 'prop-types'
import Icon from '../atoms/Icon.jsx'
import Text from '../atoms/Text.jsx'
import '../../styles/molecules/contact-item.css'

function ContactItem({ icon, label }) {
  return (
    <li className="contact-item">
      <Icon prefix="fa-solid" name={icon} className="contact-item__icon" />
      <Text>{label}</Text>
    </li>
  )
}

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default ContactItem
