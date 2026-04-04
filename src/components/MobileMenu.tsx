import React from 'react';

interface MobileMenuProps {
  onClose: () => void;
  menuItems: string[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, menuItems, onItemClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    // We map the labels to their IDs based on standard expectations
    const labelToId: Record<string, string> = {
      'Home': 'home', 'Inicio': 'home',
      'About': 'about', 'Nosotros': 'about',
      'Projects': 'projects', 'Proyectos': 'projects',
      'Services': 'services', 'Servicios': 'services',
      'Contact': 'contact', 'Contacto': 'contact'
    };
    
    // Default fallback if not found
    const targetId = labelToId[item] || item.toLowerCase();
    
    onItemClick(e, targetId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#1a1a1a]/95 z-40 md:hidden pt-24 backdrop-blur-xl animate-fade-in">
      <div className="absolute inset-0 bg-[#1a1a1a]/95 -z-10"></div>
      <nav className="flex flex-col space-y-2 p-6">
        {menuItems.map((item) => (
          <a 
            key={item} 
            href={`#`} 
            onClick={(e) => handleClick(e, item)}
            className="text-gray-300 hover:text-brand-orange font-medium text-2xl py-4 border-b border-white/10 cursor-pointer transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;