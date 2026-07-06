import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Agente IA Conversacional — Odoo + Microsoft Teams',
      description: 'Automatización de consultas y operaciones sobre Odoo 18 mediante lenguaje natural integrado con Microsoft Teams.',
      technologies: ['Python', 'FastAPI', 'Azure Container Apps', 'Azure OpenAI', 'Bot Framework', 'Docker', 'XML-RPC', 'Odoo 18'],
      github: 'https://github.com/enocghs/odoo-agent',
      featured: true,
    },
    {
      title: 'SENTINEL — Módulos de Inteligencia Artificial',
      description: 'Arquitectura modular para automatización de procesos y procesamiento de información con IA.',
      technologies: ['Python', 'Backend modular', 'Integración de servicios', 'AI'],
      github: 'https://github.com/enocghs/SENTINEL',
      featured: true,
    },
    {
      title: 'NextAI Odoo',
      description: 'Implementación y personalización de módulos Odoo para soluciones empresariales.',
      technologies: ['Odoo', 'Python', 'XML', 'PostgreSQL'],
      github: 'https://github.com/bastian-nextai/nextai-odoo',
      featured: false,
    },
    {
      title: 'Conecta Scripts',
      description: 'Scripts de automatización y utilidades para integración de sistemas.',
      technologies: ['Python', 'Bash', 'Automation'],
      github: 'https://github.com/EduardoPalma/conecta-scripts',
      featured: false,
    },
    {
      title: 'Conecta AWS Odoo',
      description: 'Integración de Odoo con servicios AWS para soluciones cloud.',
      technologies: ['Odoo', 'AWS', 'Python', 'Cloud'],
      github: 'https://github.com/conecta-aws/odoo',
      featured: false,
    },
    {
      title: 'Transmat Odoo',
      description: 'Solución Odoo personalizada para gestión empresarial.',
      technologies: ['Odoo', 'Python', 'ERP'],
      github: 'https://github.com/transmat-odoo/transmat-odoo',
      featured: false,
    },
    {
      title: 'Plataforma E-commerce de Productos Personalizados',
      description: 'Aplicación fullstack para gestión de pedidos, imágenes personalizadas y almacenamiento de datos.',
      technologies: ['Fullstack', 'REST API', 'SQL', 'Gestión de archivos'],
      github: 'https://github.com/TSSW2024',
      featured: false,
    },
    {
      title: 'UTEM Trading — App Móvil de Criptomonedas',
      description: 'App Android en Flutter para seguimiento de criptomonedas en tiempo real con integración de APIs financieras.',
      technologies: ['Flutter', 'Android', 'APIs externas', 'Datos en tiempo real'],
      github: 'https://github.com/TSSW2024',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.featured ? 'featured' : ''}`}
          >
            {project.featured && <span className="badge">Destacado</span>}
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>Ver en GitHub</span>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
