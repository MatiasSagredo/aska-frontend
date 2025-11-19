import { useMemo, useState } from 'react'
import '../styles/pages/levels.css'

const levels = [
  {
    id: 'blanco',
    title: 'Cinturón Blanco',
    eyebrow: 'Inicio del camino',
    description:
      'Fundamentos técnicos, protección esencial y recursos digitales para lanzar tu progreso con seguridad desde el primer día.',
    gradient: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(197,197,197,0.6))',
    perks: [
      'Kit de protecciones básicas y textil respirable',
      'Rutinas guiadas + biblioteca de fundamentos',
      'Acceso a comunidad Aska Beginner',
    ],
    bundles: [
      {
        name: 'Starter Pack',
        price: 'CLP $189.000',
        items: ['Guantes 10oz', 'Protectores tibia Basic', 'Gi ligero para iniciación'],
      },
      {
        name: 'Home Training Set',
        price: 'CLP $249.000',
        items: ['Saco colgante compacto', 'Cuerda y bandas', 'Guía técnica en video'],
      },
    ],
  },
  {
    id: 'azul',
    title: 'Cinturón Azul',
    eyebrow: 'Refina tu técnica',
    description:
      'Protecciones reforzadas, análisis de combate y planes semanales para consolidar transiciones y defensa.',
    gradient: 'linear-gradient(135deg, rgba(69,117,255,0.8), rgba(35,70,200,0.75))',
    perks: [
      'Bundles avanzados con materiales premium',
      'Video breakdown de luchas profesionales',
      'Entrenamiento de fuerza específico por disciplina',
    ],
    bundles: [
      {
        name: 'Flow Control Pack',
        price: 'CLP $340.000',
        items: ['Guantes 14oz Apex', 'Espinilleras reforzadas', 'Rashguard compresivo'],
      },
      {
        name: 'Sparring Upgrade',
        price: 'CLP $410.000',
        items: ['Headgear panorámico', 'Mouthguard moldeable', 'Mitones focos pro'],
      },
    ],
  },
  {
    id: 'marron',
    title: 'Cinturón Marrón',
    eyebrow: 'Estrategia y potencia',
    description:
      'Equipamiento profesional testado en campeonatos, planificación de campamentos y soporte nutricional.',
    gradient: 'linear-gradient(135deg, rgba(139,94,51,0.85), rgba(110,75,38,0.8))',
    perks: [
      'Equipamiento avalado por atletas pro',
      'Sesiones tácticas con entrenadores asociados',
      'Planificación de temporada personalizada',
    ],
    bundles: [
      {
        name: 'Camp Warrior',
        price: 'CLP $690.000',
        items: ['Guantes 16oz Pro', 'Espinilleras carbono', 'Cremas recovery + crioterapia'],
      },
      {
        name: 'Competition Kit',
        price: 'CLP $820.000',
        items: ['Gi numerado', 'Uniforme competición', 'Body protector ligero'],
      },
    ],
  },
  {
    id: 'negro',
    title: 'Cinturón Negro',
    eyebrow: 'Dominio absoluto',
    description:
      'Acceso a la línea Signature, prototipos Aska Lab y consultor dedicado para impulsar tu legado competitivo.',
    gradient: 'linear-gradient(135deg, rgba(25,25,25,0.95), rgba(5,5,5,0.82))',
    perks: [
      'Customización completa de gear y textil',
      'Testing de prototipos antes del lanzamiento',
      'Asesoría 1:1 con especialista Aska Elite',
    ],
    bundles: [
      {
        name: 'Legacy Set',
        price: 'CLP $1.250.000',
        items: ['Guantes Signature numerados', 'Gi edición limitada', 'Bolsa carbon fiber 60L'],
      },
      {
        name: 'Elite Performance',
        price: 'CLP $1.420.000',
        items: ['Pistola recovery Aska Pulse', 'Botas presoterapia', 'Stack suplementos Pro'],
      },
    ],
  },
]

function Levels() {
  const [activeId, setActiveId] = useState(levels[0].id)
  const activeLevel = useMemo(() => levels.find((level) => level.id === activeId) ?? levels[0], [activeId])

  return (
    <>
      <section className="levels" id="bundles">
        <header className="levels__intro">
          <span className="levels__eyebrow">Progresión Aska</span>
          <h1>Escala con beneficios que crecen junto a tu cinturón</h1>
          <p>
            Selecciona tu nivel y encuentra bundles, ventajas y soporte diseñados para acompañar cada
            transición en el tatami. Todo el programa está respaldado por atletas y sensei residentes.
          </p>
        </header>

        <div className="levels__chips" role="tablist" aria-label="Selecciona tu cinturón">
          {levels.map((level) => (
            <button
              key={level.id}
              type="button"
              role="tab"
              aria-selected={level.id === activeLevel.id}
              className={`levels__chip${level.id === activeLevel.id ? ' is-active' : ''}`}
              onClick={() => setActiveId(level.id)}
              style={{ '--levels-gradient': level.gradient }}
            >
              <span>{level.title}</span>
              <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            </button>
          ))}
        </div>

        <article className="levels__panel" role="tabpanel">
          <div className="levels__panel-header">
            <span className="levels__badge" style={{ '--levels-gradient': activeLevel.gradient }}>
              {activeLevel.eyebrow}
            </span>
            <h2>{activeLevel.title}</h2>
            <p>{activeLevel.description}</p>
          </div>

          <ul className="levels__perks">
            {activeLevel.perks.map((perk) => (
              <li key={perk}>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <div className="levels__bundle-grid">
            {activeLevel.bundles.map((bundle) => (
              <article key={bundle.name} className="levels__bundle-card">
                <header>
                  <h3>{bundle.name}</h3>
                  <span>{bundle.price}</span>
                </header>
                <ul>
                  {bundle.items.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-caret-right" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default Levels
