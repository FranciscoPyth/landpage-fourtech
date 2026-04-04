import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-teal/5 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal to-brand-orange rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>
            <div className="overflow-hidden rounded-2xl shadow-2xl relative transform transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src="/assets/fondo_equipo.png" 
                alt="Early days" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Nosotros</h3>
            <h4 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">{t.about.title}</h4>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">{t.about.description}</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange mb-2">
                  2+
                </div>
                <div className="text-brand-dark font-medium">{t.about.stats.years}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange mb-2">
                  99%
                </div>
                <div className="text-brand-dark font-medium">{t.about.stats.satisfaction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;