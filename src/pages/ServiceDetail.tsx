import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === serviceId);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!service) {
      navigate('/');
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out"
      });
    });

    return () => ctx.revert();
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="pt-20">
      <div ref={headerRef} className="bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white py-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a servicios
          </button>
          <div className="flex items-center gap-6 mb-6">
            <div className="text-white/90 w-16 h-16">
              {service.icon}
            </div>
            <h1 className="text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div ref={contentRef} className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="prose dark:prose-invert max-w-none">
            <div className="aspect-video w-full mb-8">
              <iframe
                src={service.videoUrl}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-lg mb-8">{service.longDescription}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Características</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">¿Interesado en este servicio?</h3>
            <ContactForm serviceId={service.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
