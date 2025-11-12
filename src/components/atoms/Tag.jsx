import PropTypes from 'prop-types'
import '../../styles/atoms/tag.css'

function Tag({ children, className }) {
  return <span className={['tag', className].filter(Boolean).join(' ')}>{children}</span>
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Tag.defaultProps = {
  className: '',
}

export default Tag
