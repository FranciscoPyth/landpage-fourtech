import React from 'react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const menuItems = ['Home', 'About', 'Projects', 'Services', 'Contact'];

  return (
    <div className="fixed inset-0 bg-white z-40 md:hidden pt-20">
      <nav className="flex flex-col space-y-4 p-4">
        {menuItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={onClose}
            className="text-gray-600 hover:text-blue-600 font-medium text-lg cursor-pointer"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;