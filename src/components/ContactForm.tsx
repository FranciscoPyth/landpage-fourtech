import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí podrías añadir la lógica de envío de formulario
    console.log('Form submitted:', formData);
    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="!rounded-button bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Visit Us</h3>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h4>
              <p className="text-gray-600">123 Innovation Drive</p>
              <p className="text-gray-600">Silicon Valley, CA 94025</p>
              <p className="text-gray-600">United States</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 cursor-pointer"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;