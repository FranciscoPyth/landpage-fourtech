import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center" 
      style={{
        backgroundImage: 'url(/assets/fondo_inicio.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            {t.hero.title}
          </h2>
          <p className="text-xl font-bold text-white mb-8 drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <button className="!rounded-button bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap shadow-lg">
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;