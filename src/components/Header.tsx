import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const menuItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 py-4 ${scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo4.png" alt="4Tech" className="h-20 scale-[1.5] md:scale-[2] origin-left object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <nav className="flex space-x-8">
                {menuItems.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={(e) => handleScroll(e, item.id)}
                    className="text-gray-300 hover:text-white hover:text-gradient font-medium cursor-pointer transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-full glass-effect text-white hover:bg-white/20 transition-colors duration-300 text-sm font-medium border border-white/10"
              >
                {language.toUpperCase()}
              </button>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden cursor-pointer text-white p-2"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <MobileMenu 
          onClose={() => setIsMenuOpen(false)} 
          menuItems={menuItems.map(item => item.label)} 
          onItemClick={handleScroll}
        />
      )}
    </>
  );
};

export default Header;