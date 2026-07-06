# Portafolio Personal - Enoc García de la Huerta Sariego

Portafolio profesional desarrollado con React + Vite, diseñado para mostrar mi experiencia como Ingeniero Informático especializado en desarrollo de software, integración de sistemas y cloud.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🌓 Modo oscuro/claro
- 📱 Optimizado para móviles
- 🎨 Animaciones sutiles
- ⚡ Rendimiento optimizado con Vite
- 📄 Descarga de CV en PDF
- 🔗 Enlaces a proyectos en GitHub

## 🛠️ Tecnologías

- **React** - Biblioteca de UI
- **Vite** - Build tool
- **CSS3** - Estilos y animaciones
- **GitHub Pages** - Hosting

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/enocghs/enocghs.github.io.git

# Entrar al directorio
cd enocghs.github.io

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

## 🚀 Despliegue en GitHub Pages

### Opción 1: Despliegue automático con gh-pages

```bash
# Construir y desplegar
npm run deploy
```

### Opción 2: Despliegue manual

1. **Construir el proyecto:**
```bash
npm run build
```

2. **Crear repositorio en GitHub:**
   - Nombre del repositorio: `enocghs.github.io`
   - Debe ser público

3. **Inicializar Git y subir cambios:**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio"
git branch -M main
git remote add origin https://github.com/enocghs/enocghs.github.io.git
git push -u origin main
```

4. **Desplegar la carpeta dist:**
```bash
# Instalar gh-pages si no está instalado
npm install -D gh-pages

# Desplegar
npm run deploy
```

5. **Configurar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/root`
   - Guardar

6. **Esperar 1-5 minutos y visitar:**
   - https://enocghs.github.io

## 📁 Estructura del Proyecto

```
portfolio/
├── public/
│   └── CV-Enoc-Garcia-de-la-Huerta-Sariego.pdf
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Secciones

1. **Hero** - Presentación principal con nombre y rol
2. **Sobre mí** - Perfil profesional y datos de contacto
3. **Experiencia** - Historial laboral detallado
4. **Proyectos** - Portafolio de proyectos con enlaces a GitHub
5. **Habilidades** - Stack tecnológico organizado por categorías
6. **Contacto** - Información de contacto y descarga de CV

## 🔧 Personalización

Para personalizar el contenido:

1. **Datos personales**: Editar componentes en `src/components/`
2. **Proyectos**: Modificar array en `src/components/Projects.jsx`
3. **Experiencia**: Actualizar en `src/components/Experience.jsx`
4. **Habilidades**: Editar en `src/components/Skills.jsx`
5. **CV**: Reemplazar archivo en `public/`
6. **Colores**: Modificar variables CSS en `src/App.css`

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run deploy` - Desplegar a GitHub Pages
- `npm run lint` - Linter de código

## 📄 Licencia

© 2025 Enoc García de la Huerta Sariego. Todos los derechos reservados.

## 📧 Contacto

- **Email**: enoc.ghs@gmail.com
- **Teléfono**: +56 9 8602 4963
- **GitHub**: [github.com/enocghs](https://github.com/enocghs)

---

Desarrollado con ❤️ usando React + Vite
