import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Enoc García</span>
          </h1>
          <p className="hero-subtitle">
            Ingeniero Informático · Desarrollo de Software · Integración de Sistemas
          </p>
          <p className="hero-description">
            Desarrollador con experiencia en backend, integración de sistemas, APIs REST
            e infraestructura cloud. Especializado en Python, FastAPI, React y servicios en Azure y AWS.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Contáctame
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver proyectos
            </a>
            <a
              href="https://github.com/enocghs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
