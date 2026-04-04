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
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-teal/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-brand-orange/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Qué Hacemos</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-dark p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(17,76,90,0.3)] border border-brand-teal/20 hover:border-brand-teal/50"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 border border-brand-teal/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={skill.icon} className="text-3xl text-brand-orange" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors">
                {skill.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
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
