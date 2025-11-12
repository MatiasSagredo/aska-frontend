import PropTypes from 'prop-types'
import Tag from '../atoms/Tag.jsx'
import Button from '../atoms/Button.jsx'
import '../../styles/molecules/gear-card.css'

function GearCard({ name, description, tags, onClick }) {
  return (
    <article className="gear-card">
      <div className="gear-card__glow" aria-hidden="true" />
      <h3>{name}</h3>
      <p>{description}</p>
      <ul className="gear-card__tags">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
      <Button variant="primary" className="gear-card__button" type="button" onClick={onClick}>
        Ver catálogo
      </Button>
    </article>
  )
}

GearCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
}

GearCard.defaultProps = {
  onClick: undefined,
}

export default GearCard
