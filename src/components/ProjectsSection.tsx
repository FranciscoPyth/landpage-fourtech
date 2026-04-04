import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-brand-orange/5 rounded-full blur-[100px] -translate-y-1/2 -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Nuestro Trabajo</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent z-10"></div>
            
            <img
              src="/assets/fondo_code.jpg"
              alt="Code Projects"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
                {t.projects.githubTitle}
              </h4>
              <p className="text-gray-300 mb-8 max-w-2xl text-lg">
                {t.projects.description}
              </p>
              
              <a
                href="https://github.com/fourtechAR"
                target="_blank"
                rel="noopener noreferrer"
                className="!rounded-button inline-flex items-center gap-3 bg-brand-orange hover:bg-orange-500 text-white px-8 py-4 text-lg font-medium transition-all shadow-lg hover:shadow-orange-500/50"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                {t.projects.githubButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;