import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
      });

      // Animación del contenido
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4
      });

      // Animación de la imagen
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.6
      });

      // Animación de los botones
      gsap.from(ctaRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.8
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 
              ref={titleRef} 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400"
            >
              Especialistas<br />en IA para<br />Empresas
            </h1>
            
            <div ref={contentRef} className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              <p>
                Desbloquea el potencial de tu empresa con soluciones innovadoras de IA. 
                Automatización, contenido inteligente y transformación digital para llevar tu 
                negocio al siguiente nivel.
              </p>
            </div>
            
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium rounded-full flex items-center transition-all group"
              >
                Empezar Ahora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#services" 
                className="px-8 py-4 bg-white dark:bg-gray-700 text-violet-600 dark:text-violet-400 font-medium rounded-full border border-violet-200 dark:border-gray-600 hover:border-violet-300 dark:hover:border-gray-500 transition-all"
              >
                Ver Servicios Premium
              </a>
            </div>
          </div>
          
          <div ref={imageRef} className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-3xl" />
            <img 
              src="https://eu2.contabostorage.com/58a0e4fa2cfc4610a684c56ae55223bf:inteligencia-artificial/5841395010392672217.jpg" 
              alt="Sergio de la Rosa - Especialistas en IA" 
              className="relative z-10 w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
