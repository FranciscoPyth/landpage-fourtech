import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">4Tech</h4>
            <p className="text-gray-400">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.quickLinks.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.quickLinks.services}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.quickLinks.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.quickLinks.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">{t.footer.services.title}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.services.robotics}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.services.automation}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.services.ai}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  {t.footer.services.consulting}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">{t.footer.newsletter.title}</h4>
            <div className="flex">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="px-4 py-2 rounded-l-lg border-none focus:ring-0 text-gray-900"
              />
              <button className="!rounded-button bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                {t.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;