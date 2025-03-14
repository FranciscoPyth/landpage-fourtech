import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h3>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/assets/fondo_equipo.png" // Cambiar por imagen local
                alt="Early days"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">About Fourtech</h4>
            <p className="text-gray-600 mb-6">
              Founded in 2023 by a group of passionate university students, 4Tech began as team building academic projects that quickly evolved into something much bigger. What started with university assignments soon transformed into professional solutions for real-world challenges. Our journey from classroom projects to industry-leading solutions represents our commitment to innovation and excellence in technology.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;