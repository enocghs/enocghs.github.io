import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Sobre mí</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Ingeniero en Informática con experiencia en desarrollo de software, backend,
            integración de sistemas, APIs REST e infraestructura cloud. He participado en el
            diseño e implementación de soluciones empresariales utilizando <strong>Python, Node.js,
            bases de datos relacionales</strong> y servicios en <strong>Azure y AWS</strong>.
          </p>
          <p>
            Cuento con experiencia en desarrollo fullstack, automatización de procesos,
            despliegue de aplicaciones y soporte técnico, adaptándome rápidamente a nuevas
            tecnologías y entornos de negocio.
          </p>
          <p>
            Me caracterizo por la <strong>resolución de problemas</strong>, la <strong>autonomía</strong> y
            la construcción de soluciones escalables, mantenibles y bien documentadas.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <h3>📧 Email</h3>
            <a href="mailto:enoc.ghs@gmail.com">enoc.ghs@gmail.com</a>
          </div>
          <div className="info-card">
            <h3>📱 Teléfono</h3>
            <a href="tel:+56986024963">+56 9 8602 4963</a>
          </div>
          <div className="info-card">
            <h3>🎓 Educación</h3>
            <p>Ingeniería en Informática</p>
            <p className="small">Universidad Tecnológica Metropolitana</p>
            <p className="small">2022 - 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
