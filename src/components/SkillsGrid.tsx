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

const skillsData = [
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

const SkillsGrid: React.FC = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Habilidades de nuestro equipo</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
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
  );
};

export default SkillsGrid;