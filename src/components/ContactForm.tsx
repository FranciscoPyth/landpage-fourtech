import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

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
    const whatsappNumber = '5493513244486'; // Format: country code + number without +
    
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
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {t.contact.title}
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.form.name}
              className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.contact.form.email}
              className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.form.message}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="!rounded-button bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              {t.contact.form.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;