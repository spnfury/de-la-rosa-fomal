import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialLinks from './SocialLinks';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del contenido
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Animación de la imagen
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Efecto parallax suave
      gsap.to(imageRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={contentRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Sobre Mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experto en soluciones de Inteligencia Artificial y automatización
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
            <div ref={imageRef} className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
              <img
                src="https://eu2.contabostorage.com/58a0e4fa2cfc4610a684c56ae55223bf:inteligencia-artificial/avatar.jpeg"
                alt="Sergio de la Rosa"
                className="w-48 h-48 rounded-full object-cover mx-auto hover:scale-105 transition-transform duration-500 shadow-2xl relative z-10"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
              Sergio de la Rosa
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Especialista en Inteligencia Artificial y Automatización
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Con años de experiencia en el desarrollo de soluciones de IA, me especializo en crear soluciones 
              innovadoras que ayudan a las empresas a optimizar sus procesos y mejorar su presencia digital.
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
