import React from 'react';
import { 
  faLinkedin, 
  faTwitter, 
  faFacebook 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  const quickLinks = ['About Us', 'Services', 'Projects', 'Contact'];
  const serviceLinks = ['Robotics', 'Automation', 'AI Solutions', 'Consulting'];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">4Tech</h4>
            <p className="text-gray-400">
              Pioneering the future of technology through innovation and excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg border-none focus:ring-0 text-gray-900"
              />
              <button className="!rounded-button bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 4Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;