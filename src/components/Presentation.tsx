import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Presentation() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold mb-3 leading-normal md:leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400"
          >
            Consultoría de Negocios con IA
          </h1>
          <h2
            ref={subtitleRef}
            className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Transformo tu negocio implementando soluciones de Inteligencia Artificial personalizadas. 
            Desde automatización de procesos hasta análisis predictivo, te ayudo a aprovechar el poder de la IA 
            para impulsar el crecimiento y la eficiencia de tu empresa.
          </h2>
        </div>
      </div>
    </section>
  );
} 