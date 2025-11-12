import PropTypes from 'prop-types'

function Icon({ prefix, name, className, labelled }) {
  return (
    <i
      className={[prefix, name, className].filter(Boolean).join(' ')}
      aria-hidden={labelled ? undefined : 'true'}
    />
  )
}

Icon.propTypes = {
  prefix: PropTypes.oneOf(['fa-solid', 'fa-regular', 'fa-light', 'fa-thin', 'fa-duotone', 'fa-brands']),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelled: PropTypes.bool,
}

Icon.defaultProps = {
  prefix: 'fa-solid',
  className: '',
  labelled: false,
}

export default Icon
