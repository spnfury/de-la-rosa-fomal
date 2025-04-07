import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, ArrowRightCircle } from 'lucide-react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { services } from '../data/services'; // Importamos datos de Servicios Premium

// Convertimos los 'services' en un arreglo acorde al slider
const slidesData = services.map((service) => ({
  id: service.id,
  title: service.title,
  subtitle: service.shortDescription,
  description: service.longDescription,
  videoUrl: service.videoUrl,
  isInstagramReel: service.videoUrl.includes('instagram.com'),
}));

// Verificar el orden de los servicios
console.log('Services order:', services.map(s => s.title));

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getDisplayedSlides = () => {
    const slides = [];
    const totalSlides = slidesData.length;
    
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % totalSlides;
      slides.push(slidesData[index]);
    }
    
    return slides;
  };

  return (
    <section
      ref={heroRef}
      className="pt-4 pb-12 md:pt-6 md:pb-16 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Controles de slider */}
          <div className="flex justify-between w-full max-w-6xl mb-4">
            <button
              onClick={goToPrevSlide}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-full transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNextSlide}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-full transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slides */}
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getDisplayedSlides().map((slide, index) => (
                <div
                  key={slide.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="aspect-[9/16] relative">
                    {slide.isInstagramReel ? (
                      <iframe
                        src={slide.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <iframe
                        src={slide.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
                      {slide.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {slide.subtitle}
                    </p>

                    {/* CTA */}
                    <Link
                      to={`/servicio/${slide.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full hover:from-violet-700 hover:to-fuchsia-700 transition-colors"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
