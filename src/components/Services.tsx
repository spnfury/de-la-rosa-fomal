import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { services } from '../data/services';

export default function Services() {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out"
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={servicesRef} id="services" className="py-20 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Nuestros Servicios
          </h2>
          <h3 className="text-xl text-gray-600 dark:text-gray-300">
            Soluciones innovadoras para transformar y potenciar tu negocio
          </h3>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="service-card p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-2xl transition-all group cursor-pointer transform hover:-translate-y-2"
              onClick={() => navigate(`/servicio/${service.id}`)}
            >
              <div className="mb-6 text-violet-500 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.shortDescription}
              </p>
              <div className="flex items-center text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300 font-medium group">
                Ver más detalles
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
