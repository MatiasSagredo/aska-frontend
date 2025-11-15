import { useMemo } from 'react'
import Footer from '../components/organisms/Footer.jsx'
import '../styles/pages/contact.css'

const contactChannels = [
  {
    id: 'ventas',
    title: 'Ventas mayoristas',
    description:
      'Abastece tu dojo, centro de alto rendimiento o cadena de academias con líneas exclusivas Aska diseñadas para soportar volumen profesional.',
    tags: ['Dojo', 'Centros elite', 'Distribuidores'],
    contacts: [
      { label: 'wholesale@askagear.com', icon: 'fa-envelope', href: 'mailto:wholesale@askagear.com' },
      { label: '+34 600 765 432', icon: 'fa-phone', href: 'tel:+34600765432' },
    ],
    ctaLabel: 'Agendar demo mayorista',
    ctaLink: 'mailto:wholesale@askagear.com?subject=Demo%20Mayorista%20Aska',
  },
  {
    id: 'soporte',
    title: 'Soporte técnico y postventa',
    description:
      'Gestionamos garantías, mantenimiento preventivo y asesoría técnica para que tu equipamiento mantenga el rendimiento del primer día.',
    tags: ['Garantías', 'Mantenimiento', 'Repuestos'],
    contacts: [
      { label: 'support@askagear.com', icon: 'fa-headset', href: 'mailto:support@askagear.com' },
      { label: '+34 600 123 456', icon: 'fa-phone', href: 'tel:+34600123456' },
      { label: 'Chat en vivo', icon: 'fa-comments', href: 'https://askagear.com/soporte' },
    ],
    ctaLabel: 'Abrir ticket prioritario',
    ctaLink: 'mailto:support@askagear.com?subject=Ticket%20prioritario%20Aska',
  },
  {
    id: 'partnerships',
    title: 'Programas de colaboración',
    description:
      'Trabaja con nuestro team de innovación para desarrollar colecciones signature, eventos o bundles limitados para tus atletas.',
    tags: ['Branding', 'Eventos', 'Signature'],
    contacts: [
      { label: 'alliances@askagear.com', icon: 'fa-handshake', href: 'mailto:alliances@askagear.com' },
      { label: 'Calendario Aska Lab', icon: 'fa-calendar-days', href: 'https://askagear.com/lab' },
    ],
    ctaLabel: 'Coordinar sesión estratégica',
    ctaLink: 'mailto:alliances@askagear.com?subject=Sesion%20Aska%20Lab',
  },
]

const availability = [
  { title: 'Soporte general', detail: 'Lunes a viernes · 09:00 a 20:00 CET', channel: 'support@askagear.com' },
  { title: 'Urgencias competición', detail: 'Sábados · 10:00 a 16:00 CET', channel: '+34 600 765 999' },
  { title: 'Atletas internacionales', detail: '24/7 · Respuesta en 12h', channel: 'intl@askagear.com' },
]

const belts = ['Blanco', 'Azul', 'Marrón', 'Negro', 'Entrenador', 'Club']

function Contact() {
  const beltOptions = useMemo(() => belts.map((belt) => ({ value: belt.toLowerCase(), label: belt })), [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="contact" id="contacto">
        <div className="contact__backdrop" aria-hidden="true" />
        <header className="contact__intro">
          <span className="contact__eyebrow">Equipo Aska</span>
          <h1>Conecta con especialistas que viven el tatami</h1>
          <p>
            Escríbenos para configurar tu equipamiento, coordinar entrenamientos o desplegar
            nuestra logística express en tu academia. Respondemos con un plan accionable en menos
            de 24 horas hábiles.
          </p>
        </header>

        <div className="contact__grid">
          {contactChannels.map((channel) => (
            <article key={channel.id} className="contact__card">
              <span className="contact__card-glow" aria-hidden="true" />
              <h2>{channel.title}</h2>
              <p>{channel.description}</p>
              <ul className="contact__tags">
                {channel.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <ul className="contact__links">
                {channel.contacts.map((contact) => (
                  <li key={contact.label}>
                    <a href={contact.href}>
                      <i className={`fa-solid ${contact.icon}`} aria-hidden="true" />
                      <span>{contact.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              {channel.ctaLink && (
                <a className="contact__cta" href={channel.ctaLink}>
                  {channel.ctaLabel}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="contact__form-block">
          <div className="contact__support">
            <h3>Agenda tu asesoría</h3>
            <p>
              Comparte tus necesidades y un especialista asignado preparará una propuesta con
              bundles, tiempos de entrega y beneficios de cinturón acorde a tu perfil.
            </p>
            <ul className="contact__availability">
              {availability.map((slot) => (
                <li key={slot.title}>
                  <strong>{slot.title}</strong>
                  <span>{slot.detail}</span>
                  <em>{slot.channel}</em>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <label htmlFor="contact-name">Nombre completo</label>
              <input id="contact-name" name="name" type="text" placeholder="Daniela Sensei" required />
            </div>
            <div className="contact__form-row">
              <label htmlFor="contact-email">Correo</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="nombre@dojo.com"
                inputMode="email"
                required
              />
            </div>
            <div className="contact__form-row contact__form-row--split">
              <div>
                <label htmlFor="contact-belt">Rol o cinturón</label>
                <select id="contact-belt" name="belt" defaultValue="">
                  <option value="" disabled>
                    Selecciona tu nivel
                  </option>
                  {beltOptions.map((belt) => (
                    <option key={belt.value} value={belt.value}>
                      {belt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-topic">Interés principal</label>
                <select id="contact-topic" name="topic" defaultValue="">
                  <option value="" disabled>
                    Elige una opción
                  </option>
                  <option value="equipamiento">Equipamiento completo</option>
                  <option value="bundles">Bundles para cinturones</option>
                  <option value="colaboracion">Colaboraciones</option>
                  <option value="mantenimiento">Mantenimiento / soporte</option>
                </select>
              </div>
            </div>
            <div className="contact__form-row">
              <label htmlFor="contact-message">Cuéntanos qué necesitas</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Describe tu academia, cantidad de atletas y objetivos de tu próxima temporada."
                required
              />
            </div>
            <button type="submit" className="contact__form-submit">
              Enviar consulta
            </button>
            <span className="contact__form-hint">
              Respuesta estimada en 24 horas hábiles. Revisa tu bandeja de spam por si acaso.
            </span>
          </form>
        </div>
      </section>
      <Footer includeAnchorId={false} />
    </>
  )
}

export default Contact
