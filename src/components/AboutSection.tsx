import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.about.title}</h3>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/fondo_equipo.png" 
                alt="Early days" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{t.about.subtitle}</h4>
            <p className="text-gray-600 mb-6">{t.about.description}</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-gray-600">{t.about.stats.years}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600">{t.about.stats.satisfaction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;