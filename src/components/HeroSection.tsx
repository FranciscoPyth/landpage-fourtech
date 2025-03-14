import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center" 
      style={{
        backgroundImage: 'url(/assets/fondo_inicio.jpeg)', // Cambiar por imagen local
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Tu visión, nuestra creación. Bienvenido a 4Tech.
          </h2>
          <p className="text-xl font-bold text-gray-900 mb-8">
            Build and transform your ideas with us. In Fourtech everything is possible.
          </p>
          <button className="!rounded-button bg-blue-600 text-white px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Discover Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;