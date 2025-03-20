import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, ArrowRightCircle } from 'lucide-react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { services } from '../data/services'; // Importamos datos de Servicios Premium

// Convertimos los 'services' en un arreglo acorde al slider
const slidesData = services.map((service) => ({
  title: service.title,
  subtitle: service.shortDescription,
  description: service.longDescription,
  videoUrl: service.videoUrl,
}));

export default function Hero() {
  const heroRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sliderRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return slidesData.length - 1;
      }
      return prev - 1;
    });
  };

  const { title, subtitle, description, videoUrl } = slidesData[currentSlide];

  return (
    <section
      ref={heroRef}
      className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gray-50 dark:bg-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Controles de slider */}
          <div className="flex justify-between w-full max-w-4xl mb-8">
            <button
              onClick={goToPrevSlide}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNextSlide}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide actual */}
          <div ref={sliderRef} className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
              {title}
            </h2>
            <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              {subtitle}
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 whitespace-pre-wrap">
              {description}
            </p>

            {/* Video embebido */}
            <div className="aspect-video mb-8">
              <iframe
                src={videoUrl}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* CTA lateral */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium rounded-full flex items-center transition-all group"
              >
                Empezar Ahora
                <ArrowRightCircle className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white dark:bg-gray-700 text-violet-600 dark:text-violet-400 font-medium rounded-full border border-violet-200 dark:border-gray-600 hover:border-violet-300 dark:hover:border-gray-500 transition-all"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
