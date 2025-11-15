import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/organisms/Footer.jsx'
import '../styles/pages/catalog.css'

const catalogSections = [
  {
    id: 'combate-pro',
    title: 'Combate Pro',
    description: 'Guantes, vendas y protecciones homologadas para MMA, boxeo y muay thai.',
    tags: ['MMA', 'Muay Thai', 'Boxeo'],
    heroTitle: 'Impacto y control en cada golpe',
    heroCopy:
      'Colección desarrollada junto a competidores profesionales para resistir rounds extensos, proteger articulaciones y mejorar la precisión de golpeo.',
    highlights: [
      { label: 'Homologación', value: 'IMMAF 2025' },
      { label: 'Garantía', value: '24 meses' },
      { label: 'Material', value: 'Cuero granulado' },
    ],
    bundles: [
      {
        name: 'Strike Elite Pack',
        description: 'Kit completo para sesiones de sparring de alto volumen.',
        benefits: [
          'Guantes Aska Apex 12oz con tecnología ShockWeave',
          'Casco híbrido con visibilidad 360° y refuerzos orbitales',
          'Vendas elásticas pro (5 metros) y protector bucal moldeable',
        ],
      },
      {
        name: 'Arena Championship Set',
        description: 'Equipamiento homologado para rings y jaulas profesionales.',
        benefits: [
          'Guantes competition 10oz firmados por Aska Legends',
          'Espinilleras de carbono con agarre antideslizante',
          'Body protector ligero con cierre magnético reforzado',
        ],
      },
    ],
    services: [
      'Customizado de bordado y colores en 72h',
      'Programa de recambio express para competiciones',
      'Testeo de protecciones previo a campeonato',
    ],
    ctaLabel: 'Solicitar listado de precios Pro',
    ctaLink: 'mailto:ventas@askagear.com?subject=Cat%C3%A1logo%20Combate%20Pro',
  },
  {
    id: 'entrenamiento-funcional',
    title: 'Entrenamiento funcional',
    description: 'Kettlebells, cuerdas y sacos de potencia pensados para rutinas explosivas.',
    tags: ['Fuerza', 'Cardio', 'HIIT'],
    heroTitle: 'Potencia, estabilidad y ritmo en circuitos',
    heroCopy:
      'Herramientas calibradas para box de Cross Training y salas de preparación física que buscan durabilidad y feedback preciso en cada movimiento.',
    highlights: [
      { label: 'Calibración', value: '±100 g' },
      { label: 'Stock', value: 'Entrega 48h' },
      { label: 'Material', value: 'Acero vulcanizado' },
    ],
    bundles: [
      {
        name: 'Functional Engine Pack',
        description: 'Set versátil para clases grupales de alta rotación.',
        benefits: [
          'Kettlebells recubiertos 12-24 kg con agarre antideslizante',
          'Par de slam balls ArmourCore (9 y 12 kg)',
          'Battle rope ignífuga con extremos termo sellados',
        ],
      },
      {
        name: 'Power Endurance Kit',
        description: 'Pensado para microciclos de potencia-resistencia.',
        benefits: [
          'Trineo de arrastre compacto con placas intercambiables',
          'Chalecos lastrados modulares de 5 a 20 kg',
          'Cinturón de cadera con bandas de resistencia progresivas',
        ],
      },
    ],
    services: [
      'Planificación de mantenimiento preventivo',
      'Marcaje de cargas y codificación por colores',
      'Instalación in situ y anclajes certificados',
    ],
  ctaLabel: 'Solicitar fichas técnicas',
  ctaLink: 'mailto:ventas@askagear.com?subject=Fichas%20Entrenamiento%20Funcional',
  },
  {
    id: 'textil-tecnico',
    title: 'Textil técnico',
    description: 'Prendas de compresión y uniformes resistentes con diseños exclusivos Aska.',
    tags: ['Rashguards', 'Doboks', 'Compresión'],
    heroTitle: 'Textiles de combate para dominar el tatami',
    heroCopy:
      'Tejidos con filamentos inteligentes que regulan temperatura, evitan desgarros y respetan la movilidad completa durante la lucha.',
    highlights: [
      { label: 'Secado', value: '20 min' },
      { label: 'Protección', value: 'UPF 50+' },
      { label: 'Tecnología', value: 'Anti-tear Mesh' },
    ],
    bundles: [
      {
        name: 'Grappling Essential Set',
        description: 'Paquete listo para tatami y competiciones IBJJF.',
        benefits: [
          'Rashguard Aska Flow con costuras blindadas',
          'Spats compresivos con refuerzo en rodilla',
          'Shorts sin velcro con paneles termosellados',
        ],
      },
      {
        name: 'Dojo Prestige Pack',
        description: 'Uniformes premium para instructores y atletas pro.',
        benefits: [
          'Dobok trenzado ligero certificado por WT',
          'Gi híbrido 420 gsm con cuello anti agarre',
          'Chaqueta lifestyle con membrana Wind-Block',
        ],
      },
    ],
    services: [
      'Personalización con vinilos y bordados de club',
      'Tallaje híbrido y asesoría de patronaje',
      'Producciones limitadas bajo reserva',
    ],
    ctaLabel: 'Agendar showroom virtual',
    ctaLink: 'mailto:showroom@askagear.com?subject=Showroom%20Textil%20T%C3%A9cnico',
  },
  {
    id: 'suplementos-recovery',
    title: 'Suplementos y recovery',
    description: 'Apoya tu rendimiento con nutrición y accesorios de masaje de grado deportivo.',
    tags: ['Proteínas', 'Electrolitos', 'Recovery'],
    heroTitle: 'Recuperación inteligente y nutrición verificable',
    heroCopy:
      'Formulaciones certificadas y accesorios de percusión para acelerar la supercompensación y cuidar articulaciones después de cada campamento.',
    highlights: [
      { label: 'Certificación', value: 'Informed Sport' },
      { label: 'Entrega', value: 'Cadena en frío' },
      { label: 'Soporte', value: 'Nutriólogo Aska' },
    ],
    bundles: [
      {
        name: 'Performance Core Stack',
        description: 'Stack diario para entrenamiento doble jornada.',
        benefits: [
          'Proteína hidroaislada + BCAA ratio 4:1:1',
          'Complejo de electrolitos con magnesio quelado',
          'Pack de barritas low sugar certificadas',
        ],
      },
      {
        name: 'Recovery Lab Kit',
        description: 'Recuperación avanzada post campamento o pelea.',
        benefits: [
          'Pistola de masaje Aska Pulse con 6 cabezales',
          'Botas de presoterapia con presión regulada',
          'Suero oral con probióticos + plan de hidratación',
        ],
      },
    ],
    services: [
      'Consultoría con nutriólogo deportivo Aska',
      'Planificación de suplementos por categoría de peso',
      'Reposición automática para centros de alto rendimiento',
    ],
    ctaLabel: 'Contactar a especialista Recovery',
    ctaLink: 'mailto:recovery@askagear.com?subject=Asesor%C3%ADa%20Recovery',
  },
]

function scrollToDetail(id) {
  const target = document.getElementById(`${id}-detail`)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function Catalog() {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState(catalogSections[0].id)

  const sectionIds = useMemo(() => new Set(catalogSections.map((section) => section.id)), [])

  useEffect(() => {
    const focusFromState = location.state?.focus
    const focusFromHash = location.hash ? location.hash.replace('#', '') : undefined
    const target = focusFromState || focusFromHash

    if (target && sectionIds.has(target)) {
      setActiveSection(target)
      const frame = requestAnimationFrame(() => {
        scrollToDetail(target)
      })

      return () => cancelAnimationFrame(frame)
    }

    return undefined
  }, [location, sectionIds])

  const handleSelect = (id) => {
    setActiveSection(id)
    scrollToDetail(id)
  }

  return (
    <>
      <section className="catalog" id="catalogo">
        <header className="catalog__intro">
          <span className="catalog__eyebrow">Catálogo Aska 2025</span>
          <h1>Cuatro líneas para dominar cada fase del entrenamiento</h1>
          <p>
            Selecciona la categoría que necesitas y explora bundles, servicios y extras
            pensados para academias, centros de alto rendimiento y atletas que exigen
            resultados inmediatos.
          </p>
        </header>

        <div className="catalog__grid">
          {catalogSections.map((section) => {
            const isActive = section.id === activeSection
            return (
              <article
                key={section.id}
                className={`catalog__card${isActive ? ' is-active' : ''}`}
              >
                <div className="catalog__card-glow" aria-hidden="true" />
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul className="catalog__tags">
                  {section.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="catalog__cta"
                  onClick={() => handleSelect(section.id)}
                >
                  Ver selección
                </button>
              </article>
            )
          })}
        </div>

        <div className="catalog__panels">
          {catalogSections.map((section) => {
            const isActive = section.id === activeSection
            return (
              <article
                key={section.id}
                id={`${section.id}-detail`}
                className={`catalog__panel${isActive ? ' is-active' : ''}`}
                aria-labelledby={`${section.id}-title`}
              >
                <div className="catalog__panel-header">
                  <span className="catalog__badge">{section.title}</span>
                  <h3 id={`${section.id}-title`}>{section.heroTitle}</h3>
                  <p>{section.heroCopy}</p>
                </div>

                <ul className="catalog__highlights">
                  {section.highlights.map((item) => (
                    <li key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="catalog__bundles">
                  {section.bundles.map((bundle) => (
                    <div key={bundle.name} className="catalog__bundle">
                      <div className="catalog__bundle-header">
                        <h4>{bundle.name}</h4>
                        <span>{bundle.description}</span>
                      </div>
                      <ul>
                        {bundle.benefits.map((benefit) => (
                          <li key={benefit}>
                            <i className="fa-solid fa-check" aria-hidden="true" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="catalog__services">
                  <h5>Servicios incluidos</h5>
                  <ul>
                    {section.services.map((service) => (
                      <li key={service}>
                        <i className="fa-solid fa-bolt" aria-hidden="true" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {section.ctaLink && (
                  <a className="catalog__panel-cta" href={section.ctaLink}>
                    {section.ctaLabel}
                    <i className="fa-solid fa-arrow-trend-up" aria-hidden="true" />
                  </a>
                )}
              </article>
            )
          })}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Catalog
