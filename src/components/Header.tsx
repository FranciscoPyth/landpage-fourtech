import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Projects', 'Services', 'Contact'];

  return (
    <>
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600">4Tech</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-blue-600 font-medium cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden cursor-pointer"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-600" />
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};

export default Header;