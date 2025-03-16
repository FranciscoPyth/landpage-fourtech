import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {t.projects.title}
        </h3>
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
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {t.projects.githubTitle}
                  </h4>
                  <a
                    href="https://github.com/4tech-2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!rounded-button inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 font-medium hover:bg-white transition-colors whitespace-nowrap"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
                    {t.projects.githubButton}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;