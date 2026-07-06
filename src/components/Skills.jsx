import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Python', 'FastAPI', 'APIs REST', 'SQL', '.NET (básico)', 'Node.js'],
    },
    {
      title: 'Frontend/Móvil',
      skills: ['JavaScript', 'React', 'React Native', 'HTML', 'CSS', 'Vite'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Azure', 'AWS Lambda', 'Docker', 'CI/CD', 'Azure Container Apps'],
    },
    {
      title: 'Integración',
      skills: ['Odoo', 'Microsoft Graph API', 'APIs REST', 'XML-RPC', 'Bot Framework'],
    },
    {
      title: 'Bases de Datos',
      skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'SQL'],
    },
    {
      title: 'Infraestructura TI',
      skills: ['Linux', 'Windows Server', 'TCP/IP', 'DNS', 'DHCP', 'Soporte técnico'],
    },
    {
      title: 'Herramientas',
      skills: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Jira', 'VS Code'],
    },
    {
      title: 'Metodologías',
      skills: ['Scrum', 'Agile', 'CI/CD', 'DevOps'],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <h2>Habilidades Técnicas</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
