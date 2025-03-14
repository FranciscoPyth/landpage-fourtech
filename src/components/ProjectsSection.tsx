import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTasks, 
  faSitemap, 
  faCode, 
  faChartLine, 
  faVial, 
  faPaintBrush, 
  faShieldAlt, 
  faDatabase, 
  faCodeBranch 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const skills = [
  {
    icon: faTasks,
    title: 'Metodologías Ágiles',
    description: 'Marco de trabajo Scrum con gestión de Sprints, Planning, Daily Standups, Demo y sesiones de Retroalimentación para optimizar el desarrollo de proyectos.'
  },
  {
    icon: faSitemap,
    title: 'Análisis Funcional',
    description: 'Expertos en análisis y diseño de soluciones tecnológicas adaptadas a las necesidades específicas de cada cliente.'
  },
  {
    icon: faCode,
    title: 'Desarrollo',
    description: 'Desarrollo full-stack y software con experiencia en React, Node.js, Django y Spring Boot. Creamos soluciones web y aplicaciones robustas y escalables.'
  },
  {
    icon: faChartLine,
    title: 'Análisis de Datos',
    description: 'Procesamiento y análisis avanzado de datos utilizando Python y herramientas de BI para obtener insights valiosos.'
  },
  {
    icon: faVial,
    title: 'Testing',
    description: 'Testing automatizado y manual con Selenium, Jira, TFS y metodologías ágiles para garantizar calidad.'
  },
  {
    icon: faPaintBrush,
    title: 'Diseño UX/UI',
    description: 'Creación de interfaces intuitivas y atractivas usando Figma, siguiendo las últimas tendencias en diseño y experiencia de usuario para dar vida a los sistemas de nuestros clientes.'
  },
  {
    icon: faShieldAlt,
    title: 'Ciberseguridad',
    description: 'Implementación de soluciones de seguridad robustas y auditorías de vulnerabilidades para proteger activos digitales.'
  },
  {
    icon: faDatabase,
    title: 'Base de Datos',
    description: 'Gestión experta de bases de datos SQL, incluyendo MySQL para el manejo eficiente de datos.'
  },
  {
    icon: faCodeBranch,
    title: 'Lenguajes Dominados',
    description: 'Experiencia en JavaScript, TypeScript, Python, Java y otros lenguajes modernos de programación.'
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Accede a nuestros proyectos</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden relative group">
                <img
                  src="/assets/fondo_code.jpg"
                  alt="Code Projects"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <h4 className="text-2xl font-bold text-white mb-4">Código de Proyectos</h4>
                    <a
                      href="https://github.com/4tech-2023"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="!rounded-button inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 font-medium hover:bg-white transition-colors whitespace-nowrap"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-gray-600 text-center">
                  Explora nuestro repositorio de GitHub para acceder al código fuente de todos nuestros proyectos.
                  Aquí encontrarás ejemplos prácticos, documentación detallada y la oportunidad de colaborar con nuestro equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Habilidades de nuestro equipo</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className="text-2xl text-blue-600" 
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;