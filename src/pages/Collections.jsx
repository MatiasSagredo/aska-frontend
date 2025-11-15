import Footer from '../components/organisms/Footer.jsx'
import '../styles/pages/collections.css'

const collectionHighlights = [
  {
    id: 'shadowline',
    title: 'Shadowline Combat',
    eyebrow: 'Serie Elite',
    description:
      'Protecciones full black diseñadas junto a atletas de MMA y kickboxing para soportar campamentos de 8 semanas sin pérdida de amortiguación.',
    stats: [
      { label: 'Amortiguación', value: '93% shock absorb' },
      { label: 'Peso', value: 'Ultra ligero' },
      { label: 'Garantía', value: '24 meses' },
    ],
    features: [
      'Guantes Apex Shadow 12oz y 16oz con sistema PulseGuard',
      'Espinilleras articuladas con refuerzo de carbono y agarre antideslizante',
      'Headgear panorámico con visibilidad 360° y acolchado multicapa',
    ],
    ctaLabel: 'Reservar Shadowline',
    ctaLink: 'mailto:ventas@askagear.com?subject=Reserva%20Shadowline',
  },
  {
    id: 'primeflow',
    title: 'Primeflow Training',
    eyebrow: 'Colección Functional',
    description:
      'Equipamiento modular para boxes de cross training y centros de acondicionamiento que requieren material resistente a rotación constante.',
    stats: [
      { label: 'Capacidad', value: '20 atletas' },
      { label: 'Entrega', value: '72 horas' },
      { label: 'Instalación', value: 'Incluida' },
    ],
    features: [
      'Kettlebells recubiertos en uretano anti impacto con identificación luminosa',
      'Battle ropes ignífugas y trineos compactos con rieles silenciosos',
      'Chalecos lastrados modulables con cierre magnético quick-lock',
    ],
    ctaLabel: 'Solicitar plan Primeflow',
    ctaLink: 'mailto:ventas@askagear.com?subject=Plan%20Primeflow',
  },
  {
    id: 'neonstrike',
    title: 'Neon Strike Apparel',
    eyebrow: 'Drop Limitado',
    description:
      'Textil de compresión con fibras de grafeno, costuras blindadas y detalles fosforescentes para competencia nocturna y eventos streaming.',
    stats: [
      { label: 'Unidades', value: '500 sets' },
      { label: 'Regulación', value: 'IBJJF & WT' },
      { label: 'Producción', value: 'Hecho en EU' },
    ],
    features: [
      'Rashguard con paneles de ventilación inteligentes y protección UV 50+',
      'Spats compresivos con bandas antideslizantes y refuerzo en rodillas',
      'Chaqueta lifestyle con membrana WeatherShield y cierres termosellados',
    ],
    ctaLabel: 'Unirse a Neon Strike',
    ctaLink: 'mailto:marketing@askagear.com?subject=Neon%20Strike',
  },
]

const bundles = [
  {
    name: 'Bundle Competidor',
    price: 'CLP $729.000',
    description: 'Diseñado para atletas que compiten cada trimestre y necesitan rotación rápida.',
    contents: ['Guantes Apex Shadow 12oz', 'Rashguard Neon Strike', 'Battle rope Ignis 9m', 'Bolsa LockerRoom 45L'],
  },
  {
    name: 'Bundle Academia',
    price: 'CLP $1.980.000',
    description: 'Kit completo para equipar 8 puestos de entrenamiento funcional y sparring.',
    contents: [
      '4 pares de guantes Shadowline 16oz',
      '8 kettlebells Primeflow (12-24kg)',
      'Set de trineo + chalecos lastrados',
      'Pack textil Neon Strike (tallas S-XL)',
    ],
  },
  {
    name: 'Bundle Showcase',
    price: 'CLP $3.450.000',
    description: 'Ideal para inaugurar tu dojo con una selección premium y decoración integrada.',
    contents: [
      'Panel interactivo con branding Aska',
      'Colección completa Neon Strike (tallas XS-XXL)',
      'Set Shadowline Pro + accesorios personalizados',
      'Iluminación LED y señalética de impacto',
    ],
  },
]

function Collections() {
  return (
    <>
      <section className="collections" id="colecciones">
        <header className="collections__intro">
          <span className="collections__eyebrow">Selección Curada</span>
          <h1>Colecciones con ADN competitivo listas para tu dojo</h1>
          <p>
            Cada línea se diseña con atletas profesionales para resistir campamentos, giras y torneos.
            Explora los detalles, estadísticas y bundles para equipar a tu equipo bajo un mismo concepto.
          </p>
        </header>

        <div className="collections__highlights">
          {collectionHighlights.map((collection) => (
            <article key={collection.id} className="collections__card">
              <span className="collections__card-glow" aria-hidden="true" />
              <div className="collections__card-header">
                <span className="collections__badge">{collection.eyebrow}</span>
                <h2>{collection.title}</h2>
                <p>{collection.description}</p>
              </div>

              <ul className="collections__stats">
                {collection.stats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>

              <div className="collections__features">
                <h3>Qué incluye</h3>
                <ul>
                  {collection.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-sparkles" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {collection.ctaLink && (
                <a className="collections__cta" href={collection.ctaLink}>
                  {collection.ctaLabel}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>

        <section className="collections__bundles">
          <header>
            <h2>Bundles listos para implementar</h2>
            <p>Escala o lanza tu espacio con configuraciones creadas por entrenadores residentes Aska.</p>
          </header>
          <div className="collections__bundle-grid">
            {bundles.map((bundle) => (
              <article key={bundle.name} className="collections__bundle-card">
                <h3>{bundle.name}</h3>
                <span className="collections__bundle-price">{bundle.price}</span>
                <p>{bundle.description}</p>
                <ul>
                  {bundle.contents.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </section>
      <Footer includeAnchorId={false} />
    </>
  )
}

export default Collections
