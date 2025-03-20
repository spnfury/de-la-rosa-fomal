import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
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
];

export default function MyCompanies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(slideRef.current, { x: 50, opacity: 0, duration: 1 });
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

  const currentCompany = companiesData[currentIndex];

  return (
    <section
      ref={containerRef}
      className="py-16 bg-white dark:bg-gray-900"
      id="mis-empresas"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Mis Empresas
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-between max-w-xl w-full">
            <button
              onClick={prevSlide}
              className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div
            ref={slideRef}
            className="max-w-xl text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{currentCompany.name}</h3>
            <p className="text-sm text-violet-600 dark:text-violet-400 mb-2 italic">
              {currentCompany.category}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {currentCompany.description}
            </p>
            <a
              href={currentCompany.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded-full transition-colors"
            >
              Visitar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
