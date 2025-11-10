import PropTypes from 'prop-types'
import '../../styles/organisms/hero.css'

const highlights = [
  {
    title: 'Equipamiento premium',
    description:
      'Guantes, protecciones y textil de marcas top seleccionadas por entrenadores.',
  },
  {
    title: 'Envíos en 24h',
    description:
      'Logística express para que recibas tu gear antes de tu próximo entrenamiento.',
  },
  {
    title: 'Asesoría técnica',
    description:
      'Experts del dojo recomiendan tallas y materiales según tu disciplina.',
  },
]

function Hero({ onPrimaryAction, onSecondaryAction }) {
  return (
    <section className="hero" id="top">
      <div className="hero__backdrop">
        <span className="hero__glow" aria-hidden="true" />
      </div>
      <div className="hero__content">
        <span className="hero__eyebrow">Aska Gear</span>
        <h1 className="hero__title">Arsenal deportivo para dominar el tatami</h1>
        <p className="hero__description">
          Equípate con tecnología avanzada para artes marciales, boxeo y entrenamiento
          funcional. Diseñamos bundles profesionales y packs personalizados para tu
          próxima victoria.
        </p>
        <div className="hero__actions">
          <button
            type="button"
            className="hero__cta hero__cta--primary"
            onClick={onPrimaryAction}
          >
            Comprar ahora
          </button>
          <button
            type="button"
            className="hero__cta hero__cta--secondary"
            onClick={onSecondaryAction}
          >
            Ver catálogos
          </button>
        </div>
        <ul className="hero__highlights">
          {highlights.map((item) => (
            <li key={item.title} className="hero__highlight">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

Hero.propTypes = {
  onPrimaryAction: PropTypes.func,
  onSecondaryAction: PropTypes.func,
}

Hero.defaultProps = {
  onPrimaryAction: () => {},
  onSecondaryAction: () => {},
}

export default Hero
