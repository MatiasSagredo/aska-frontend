import { useMemo, useState } from 'react'
import '../../styles/organisms/belt-unlock.css'

const belts = [
  {
    id: 'blanco',
    label: 'Cinturón Blanco',
    tagline: 'Inicio del camino',
    gradient: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(197,197,197,0.6))',
    perks: [
      'Acceso a kits esenciales de protección y textil básico',
      'Guías de entrenamiento en casa y rutinas de fundamentos',
      'Bonos de bienvenida para equipar tu primera bolsa de deporte',
    ],
  },
  {
    id: 'azul',
    label: 'Cinturón Azul',
    tagline: 'Refina tu técnica',
    gradient: 'linear-gradient(135deg, rgba(69,117,255,0.8), rgba(35,70,200,0.75))',
    perks: [
      'Bundles avanzados con protecciones reforzadas',
      'Acceso a clases digitales de intermedios y análisis de sparring',
      'Promociones especiales en guantes elite y rashguards técnicos',
    ],
  },
  {
    id: 'marron',
    label: 'Cinturón Marrón',
    tagline: 'Estrategia y potencia',
    gradient: 'linear-gradient(135deg, rgba(139,94,51,0.85), rgba(110,75,38,0.8))',
    perks: [
      'Equipamiento profesional testado en campeonatos',
      'Coworking con coaches para periodizar tu temporada',
      'Reservas anticipadas de colecciones limitadas Aska Gear Pro',
    ],
  },
  {
    id: 'negro',
    label: 'Cinturón Negro',
    tagline: 'Dominio absoluto',
    gradient: 'linear-gradient(135deg, rgba(25,25,25,0.95), rgba(5,5,5,0.82))',
    perks: [
      'Acceso a la línea Signature con numeración exclusiva',
      'Customización de uniformes y protecciones a medida',
      'Laboratorio de innovación: prueba prototipos antes del lanzamiento',
    ],
    exclusive: true,
  },
]

function BeltUnlock() {
  const [selectedId, setSelectedId] = useState('blanco')

  const selected = useMemo(() => belts.find((belt) => belt.id === selectedId) ?? belts[0], [selectedId])

  return (
    <section className="belt" id="bundles">
      <div className="belt__header">
        <span className="belt__eyebrow">Progresión Aska</span>
        <h2>Desbloquea beneficios exclusivos según tu cinturón</h2>
        <p>
          Cada nivel libera equipamiento, contenido y ventajas diseñadas para la etapa de tu
          entrenamiento. Elige tu cinturón y descubre lo que Aska Gear tiene reservado para ti.
        </p>
      </div>

      <div className="belt__selector" role="tablist" aria-label="Selecciona tu cinturón">
        {belts.map((belt) => {
          const isActive = belt.id === selected.id

          return (
            <button
              key={belt.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`belt__chip${isActive ? ' belt__chip--active' : ''}`}
              onClick={() => setSelectedId(belt.id)}
              style={{ '--belt-gradient': belt.gradient }}
            >
              <span>{belt.label}</span>
              {belt.exclusive ? (
                <i className={`fa-solid ${isActive ? 'fa-crown' : 'fa-lock'}`} aria-hidden="true" />
              ) : (
                <i className={`fa-solid ${isActive ? 'fa-unlock' : 'fa-lock'}`} aria-hidden="true" />
              )}
            </button>
          )
        })}
      </div>

      <article className="belt__panel" role="tabpanel">
        <header className="belt__panel-header">
          <div className="belt__panel-badge" style={{ '--belt-gradient': selected.gradient }}>
            <span>{selected.label}</span>
          </div>
          <div>
            <h3>{selected.tagline}</h3>
            <p>
              {selected.exclusive
                ? 'La cúspide del programa Aska. Beneficios diseñados para atletas que lideran el tatami.'
                : 'Ventajas pensadas para potenciar tu progreso en esta etapa del cinturón.'}
            </p>
          </div>
        </header>
        <ul className="belt__perks">
          {selected.perks.map((perk) => (
            <li key={perk}>
              <i className="fa-solid fa-check" aria-hidden="true" />
              <span>{perk}</span>
            </li>
          ))}
        </ul>
        <div className="belt__actions">
          <button type="button" className="belt__cta belt__cta--primary">
            Activar beneficios
          </button>
          <button type="button" className="belt__cta belt__cta--secondary">
            Hablar con asesor
          </button>
        </div>
      </article>
    </section>
  )
}

export default BeltUnlock
