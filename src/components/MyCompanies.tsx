import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import gsap from 'gsap';

const companiesData = [
  {
    name: 'stockify.pro',
    category: 'Ecommerce y Software',
    description: 'CRM para fullfilment',
    link: 'https://stockify.pro',
  },
  {
    name: 'selltok.es',
    category: 'Agencia de tiktokShops',
    description: 'Plataforma innovadora para la gestión de redes sociales y marketing digital.',
    link: 'https://selltok.es',
  },
  {
    name: 'opinionesde.org',
    category: 'Plataforma de Reseñas',
    description: 'Portal de opiniones verificadas para empresas y servicios.',
    link: 'https://opinionesde.org',
  },
];

export default function MyCompanies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación más suave para cambios de slide
      gsap.fromTo(
        slideRef.current, 
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % companiesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? companiesData.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCompany = companiesData[currentIndex];

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      id="mis-empresas"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Mis Empresas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Proyectos y negocios en los que estoy involucrado actualmente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            ref={slideRef}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8 transform transition-all duration-300"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="md:flex-1">
                  <div className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {currentCompany.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{currentCompany.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                    {currentCompany.description}
                  </p>
                  <a
                    href={currentCompany.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Visitar sitio web
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="md:w-64 h-36 bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-800/20 dark:to-fuchsia-800/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    {currentCompany.name.split('.')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transform transition-transform hover:scale-105"
              aria-label="Empresa anterior"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="flex items-center gap-2">
              {companiesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-violet-500 w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Ir a la empresa ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shadow-md transform transition-transform hover:scale-105"
              aria-label="Siguiente empresa"
            >
              <ArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
