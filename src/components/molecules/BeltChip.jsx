import PropTypes from 'prop-types'
import Icon from '../atoms/Icon.jsx'
import '../../styles/molecules/belt-chip.css'

function BeltChip({ label, active, gradient, exclusive, onClick }) {
  return (
    <button
      type="button"
      className={['belt-chip', active ? 'belt-chip--active' : ''].filter(Boolean).join(' ')}
      onClick={onClick}
      style={{ '--belt-gradient': gradient }}
      role="tab"
      aria-selected={active}
    >
      <span>{label}</span>
      <Icon
        prefix="fa-solid"
        name={exclusive ? (active ? 'fa-crown' : 'fa-lock') : active ? 'fa-unlock' : 'fa-lock'}
        className="belt-chip__icon"
      />
    </button>
  )
}

BeltChip.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  gradient: PropTypes.string.isRequired,
  exclusive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

BeltChip.defaultProps = {
  active: false,
  exclusive: false,
}

export default BeltChip
