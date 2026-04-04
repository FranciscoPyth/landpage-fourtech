import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { BackgroundPaths } from './ui/background-paths';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section 
      id="home"
      className="relative" 
    >
      <BackgroundPaths title={t.hero.title} ctaText={t.hero.cta} />
    </section>
  );
};

export default HeroSection;
