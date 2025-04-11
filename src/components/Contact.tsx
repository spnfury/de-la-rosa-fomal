import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StandardContactForm from './StandardContactForm';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
      
      // Animación del formulario
      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ¿Tienes alguna pregunta o quieres trabajar juntos? Me encantaría escucharte.
          </p>
        </div>

        <div className="max-w-2xl mx-auto" ref={formRef}>
          <StandardContactForm 
            title="Envíame un mensaje"
            subtitle="Completa el formulario y me pondré en contacto contigo lo antes posible."
            buttonText="Enviar consulta"
            successMessage="¡Gracias por tu mensaje! Te responderé a la mayor brevedad posible."
            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
