import './Header.css'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#hero" className="logo">EG</a>

        <ul className="nav-links">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

export default Header
