import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

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
      const offset = 80; // Account for fixed header
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
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600">4Tech</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {menuItems.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={(e) => handleScroll(e, item.id)}
                    className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-300 text-sm font-medium text-gray-700"
              >
                {language.toUpperCase()}
              </button>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-600" />
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