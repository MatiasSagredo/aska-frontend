import PropTypes from 'prop-types'
import '../../styles/atoms/button.css'

function Button({ variant, className, children, ...props }) {
  const variantClass = variant ? `button--${variant}` : ''

  return (
    <button className={['button', variantClass, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  variant: 'primary',
  className: '',
}

export default Button
