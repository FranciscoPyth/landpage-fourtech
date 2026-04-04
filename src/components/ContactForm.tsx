import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*${t.contact.form.name}:* ${formData.name}%0A` +
      `*${t.contact.form.email}:* ${formData.email}%0A` +
      `*${t.contact.form.message}:* ${formData.message}`;
    
    // WhatsApp number - replace with your actual number
    const whatsappNumber = '5493513244486';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-dark pt-32">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-orange/5 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-teal/10 rounded-full blur-[120px] z-0"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Contacto</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="glass-dark p-8 md:p-12 rounded-3xl shadow-2xl border border-brand-teal/20 backdrop-blur-xl relative">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl"></div>
          
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¿En qué podemos ayudarte?"
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none"
                required
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="!rounded-button w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-10 py-4 font-medium hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(255,153,50,0.3)] hover:shadow-[0_0_30px_rgba(255,153,50,0.5)] active:scale-95"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                <span>{t.contact.form.submit}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;