import PropTypes from 'prop-types'
import '../../styles/atoms/eyebrow.css'

function Eyebrow({ as: Component, className, children, align }) {
  return (
    <Component
      className={['eyebrow', align ? `eyebrow--${align}` : '', className].filter(Boolean).join(' ')}
    >
      {children}
    </Component>
  )
}

Eyebrow.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['start', 'center', 'end']),
}

Eyebrow.defaultProps = {
  as: 'span',
  className: '',
  align: 'start',
}

export default Eyebrow
