import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'NextAI',
      role: 'Desarrollador de Software / Soporte Técnico',
      period: 'Mayo 2025 – Actualidad',
      description: 'Participación en el desarrollo, integración y soporte de soluciones empresariales basadas en tecnologías web, cloud e inteligencia artificial.',
      achievements: [
        'Desarrollo de aplicaciones backend y APIs REST con Python y FastAPI',
        'Implementación y mantención de soluciones sobre Odoo',
        'Desarrollo de interfaces web con React y aplicaciones móviles con React Native',
        'Despliegue en entornos cloud Azure y AWS con Docker',
        'Automatización de procesos mediante integraciones entre plataformas y APIs',
      ],
    },
    {
      company: 'SIKA Chile',
      role: 'Práctica Profesional — Soporte TI',
      period: 'Enero 2025 – Abril 2025',
      description: 'Participación en el soporte y continuidad operativa de la infraestructura tecnológica corporativa.',
      achievements: [
        'Soporte técnico de primer nivel a usuarios finales',
        'Configuración y mantención de equipos computacionales y periféricos',
        'Instalación y soporte de sistemas operativos y aplicaciones empresariales',
        'Administración básica de redes y conectividad',
        'Documentación de procedimientos técnicos e inventario de equipos',
      ],
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <h2>Experiencia Laboral</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
              </div>
              <span className="period">{exp.period}</span>
            </div>
            <p className="description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
