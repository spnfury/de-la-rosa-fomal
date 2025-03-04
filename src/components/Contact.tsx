import React, { useRef, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);

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

      // Animación de la información de contacto
      gsap.from(infoRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ¿Tienes alguna pregunta o quieres trabajar juntos? Me encantaría escucharte.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div ref={infoRef} className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-violet-50 dark:bg-gray-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-violet-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Email</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">thevega82@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-violet-50 dark:bg-gray-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-violet-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Teléfono</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">+34 666 532 143</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
