import React from 'react';

interface MobileMenuProps {
  onClose: () => void;
  menuItems: string[];
  onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, menuItems, onItemClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    onItemClick(e, item.toLowerCase());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white z-40 md:hidden pt-20">
      <nav className="flex flex-col space-y-4 p-4">
        {menuItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            onClick={(e) => handleClick(e, item)}
            className="text-gray-600 hover:text-blue-600 font-medium text-lg cursor-pointer transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;