import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListCheck,
  faSitemap,
  faCode,
  faChartLine,
  faVial,
  faPaintBrush,
  faShieldHalved,
  faDatabase,
  faTerminal
} from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ServicesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    { icon: faListCheck, ...t.services.skills.agile },
    { icon: faSitemap, ...t.services.skills.analysis },
    { icon: faCode, ...t.services.skills.development },
    { icon: faChartLine, ...t.services.skills.data },
    { icon: faVial, ...t.services.skills.testing },
    { icon: faPaintBrush, ...t.services.skills.design },
    { icon: faShieldHalved, ...t.services.skills.security },
    { icon: faDatabase, ...t.services.skills.database },
    { icon: faTerminal, ...t.services.skills.languages }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          {t.services.title}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FontAwesomeIcon icon={skill.icon} className="text-2xl text-blue-600" />
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
    </section>
  );
};

export default ServicesSection;
