import PropTypes from 'prop-types'
import '../../styles/molecules/tag.css'
import Text from '../atoms/Text.jsx'

function Tag({ children, className }) {
  return <Text className={['tag', className].filter(Boolean).join(' ')}>{children}</Text>
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Tag.defaultProps = {
  className: '',
}

export default Tag
