import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#0b161c] text-white pt-20 pb-10 relative overflow-hidden border-t border-brand-teal/20">
      <div className="absolute top-0 left-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src="/logo4.png" alt="4Tech" className="h-20 scale-[1.5] md:scale-[2] origin-left object-contain mb-8 md:mb-12" />
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-brand-orange hover:bg-white/10 transition-all">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-brand-orange hover:bg-white/10 transition-all">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-brand-orange hover:bg-white/10 transition-all">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://ar.linkedin.com/company/4techit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-300 hover:text-brand-orange hover:bg-white/10 transition-all">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-4">
              {['about', 'services', 'projects', 'contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-gray-400 hover:text-brand-orange transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal group-hover:bg-brand-orange transition-colors"></span>
                    {t.footer.quickLinks[link as keyof typeof t.footer.quickLinks]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.services.title}</h4>
            <ul className="space-y-4">
              {['robotics', 'automation', 'ai', 'consulting'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors cursor-pointer flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal group-hover:bg-brand-orange transition-colors"></span>
                    {t.footer.services[service as keyof typeof t.footer.services]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t.footer.newsletter.title}</h4>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-brand-orange text-white placeholder-gray-500 transition-colors"
              />
              <button className="!rounded-button w-full bg-brand-orange hover:bg-orange-500 text-white px-4 py-3 font-medium transition-all shadow-[0_0_15px_rgba(255,153,50,0.2)] hover:shadow-[0_0_25px_rgba(255,153,50,0.4)]">
                {t.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500">{t.footer.copyright}</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;