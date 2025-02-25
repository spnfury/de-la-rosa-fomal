import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out"
      });

      gsap.from(buttonsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power4.out"
      });

      gsap.to(imageRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-8">
            <h1 className="text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
              Experto Premium de
              <span className="block mt-2">Inteligencia Artificial</span>
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300">
              Desbloquea el potencial de tu empresa con soluciones innovadoras de IA. Automatización, 
              contenido inteligente y transformación digital para llevar tu negocio al siguiente nivel.
            </h2>
            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                Empezar Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all border-2 border-violet-500/20 text-violet-600 dark:text-violet-400 hover:border-violet-500/40"
              >
                Ver Servicios Premium
              </a>
            </div>
          </div>
          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
            <img 
              src="/logo_full.png" 
              alt="Sergio de la Rosa - Experto en Inteligencia Artificial" 
              className="w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
