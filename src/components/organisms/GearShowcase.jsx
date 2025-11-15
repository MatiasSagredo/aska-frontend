import PropTypes from 'prop-types'
import '../../styles/organisms/gear-showcase.css'

const gearCategories = [
  {
    id: 'combate-pro',
    name: 'Combate Pro',
    description: 'Guantes, vendas y protecciones homologadas para MMA, boxeo y muay thai.',
    tags: ['MMA', 'Muay Thai', 'Boxeo'],
  },
  {
    id: 'entrenamiento-funcional',
    name: 'Entrenamiento funcional',
    description: 'Kettlebells, cuerdas y sacos de potencia pensados para rutinas explosivas.',
    tags: ['Fuerza', 'Cardio', 'HIIT'],
  },
  {
    id: 'textil-tecnico',
    name: 'Textil técnico',
    description: 'Prendas de compresión y uniformes resistentes con diseños exclusivos Aska.',
    tags: ['Rashguards', 'Doboks', 'Compresión'],
  },
  {
    id: 'suplementos-recovery',
    name: 'Suplementos y recovery',
    description: 'Apoya tu rendimiento con nutrición y accesorios de masaje de grado deportivo.',
    tags: ['Proteínas', 'Electrolitos', 'Recovery'],
  },
]

function GearShowcase({ onCatalogNavigate }) {
  return (
    <section className="gear" id="colecciones">
      <div className="gear__header">
        <span className="gear__eyebrow">Colección 2025</span>
        <h2>Material diseñado para atletas implacables</h2>
        <p>
          Seleccionamos equipamiento probado en el dojo y aprobado por campeones para
          ayudarte a entrenar más duro, más seguro y con estilo.
        </p>
      </div>

      <div className="gear__grid">
        {gearCategories.map((category) => (
          <article key={category.name} className="gear__card">
            <div className="gear__card-glow" aria-hidden="true" />
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <ul className="gear__tags">
              {category.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <button
              type="button"
              className="gear__cta"
              onClick={() => onCatalogNavigate?.(category.id)}
            >
              Ver catálogo
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

GearShowcase.propTypes = {
  onCatalogNavigate: PropTypes.func,
}

GearShowcase.defaultProps = {
  onCatalogNavigate: undefined,
}

export default GearShowcase
