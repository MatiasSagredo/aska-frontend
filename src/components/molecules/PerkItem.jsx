import PropTypes from 'prop-types'
import Icon from '../atoms/Icon.jsx'
import '../../styles/molecules/perk-item.css'

function PerkItem({ label }) {
  return (
    <li className="perk-item">
      <Icon prefix="fa-solid" name="fa-check" className="perk-item__icon" />
      <span>{label}</span>
    </li>
  )
}

PerkItem.propTypes = {
  label: PropTypes.string.isRequired,
}

export default PerkItem
