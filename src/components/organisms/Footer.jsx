import '../../styles/organisms/footer.css'

const socials = [
  { name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com/' },
  { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://facebook.com/' },
  { name: 'YouTube', icon: 'fa-youtube', url: 'https://youtube.com/' },
  { name: 'TikTok', icon: 'fa-tiktok', url: 'https://www.tiktok.com/' },
]

const quickLinks = [
  { label: 'Colecciones', href: '#colecciones' },
  { label: 'Bundles Pro', href: '#bundles' },
  { label: 'Uniformes', href: '#uniformes' },
  { label: 'Soporte', href: '#soporte' },
]

const contactInfo = [
  { label: '+34 600 123 456', icon: 'fa-phone' },
  { label: 'support@askagear.com', icon: 'fa-envelope' },
  { label: 'Av. Rendimiento 45, Madrid', icon: 'fa-location-dot' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contacto">
      <div className="footer__gradient" aria-hidden="true" />
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logomark">Aska</span>
          <p>
            Equipamos a atletas con materiales de combate, fuerza y recuperación
            diseñados para soportar el ritmo profesional. Productos testados en
            el dojo y listos para tu siguiente desafío.
          </p>
          <div className="footer__socials">
            {socials.map((network) => (
              <a key={network.name} href={network.url} aria-label={network.name}>
                <i className={`fa-brands ${network.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__column">
            <h3>Accesos rápidos</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3>Contacto</h3>
            <ul>
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3>Atención</h3>
            <ul>
              <li>
                <strong>Lunes a Viernes</strong>
                <span>09:00 – 20:00</span>
              </li>
              <li>
                <strong>Sábados</strong>
                <span>10:00 – 16:00</span>
              </li>
              <li>
                <strong>Domingos</strong>
                <span>Soporte vía email</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__legal">
  <span>© {currentYear} Aska Gear Supply. Todos los derechos reservados.</span>
        <div className="footer__legal-links">
          <a href="#privacidad">Política de privacidad</a>
          <a href="#terminos">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
