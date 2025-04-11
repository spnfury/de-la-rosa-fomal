import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, ExternalLink, Code, Users, TrendingUp, Calendar, Award } from 'lucide-react';
import gsap from 'gsap';

const companiesData = [
  {
    name: 'stockify.pro',
    category: 'Ecommerce y Software',
    tagline: 'La solución definitiva para la gestión de inventario y logística',
    description: 'Sistema CRM avanzado para fullfilment de ecommerce que optimiza la gestión de inventario, automatiza procesamiento de pedidos y mejora la eficiencia logística para empresas de comercio electrónico.',
    longDescription: 'Stockify es mi plataforma tecnológica que revoluciona cómo las empresas de ecommerce gestionan su logística. Diseñada para eliminar errores humanos y reducir tiempos de procesamiento, integra herramientas avanzadas de predicción de inventario y análisis.',
    foundedYear: '2021',
    achievements: '1500+ empresas usuarias',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: 'https://stockify.pro',
  },
  {
    name: 'selltok.es',
    category: 'Agencia de TikTok Shops',
    tagline: 'Especialistas en TikTok Shops para maximizar ventas',
    description: 'Agencia especializada exclusivamente en la creación y gestión de tiendas en TikTok Shop, ayudando a marcas a vender directamente a través de esta plataforma.',
    longDescription: 'Selltok es una agencia dedicada al 100% a TikTok Shops. Ayudamos a marcas a implementar estrategias efectivas para vender directamente en TikTok, aprovechando el poder del live shopping, la viralidad de contenidos y las características únicas de la plataforma para impulsar ventas inmediatas.',
    foundedYear: '2022',
    achievements: '+300% ROI promedio para clientes de TikTok Shops',
    tech: ['TikTok Shop API', 'Live Shopping', 'Content Creation', 'Performance Marketing'],
    link: 'https://selltok.es',
  },
  {
    name: 'opinionesde.org',
    category: 'Plataforma de Reseñas',
    tagline: 'Reseñas verificadas que construyen confianza',
    description: 'Portal independiente de reseñas verificadas que ayuda a consumidores a tomar decisiones informadas y a empresas a construir su reputación online con opiniones auténticas.',
    longDescription: 'Opinionesde surge para cubrir la necesidad de un sistema de reseñas transparente y sin conflictos de interés. Mediante un riguroso proceso de verificación, aseguramos que cada reseña sea auténtica, proporcionando información valiosa y fiable tanto para usuarios como para negocios.',
    foundedYear: '2023',
    achievements: '10,000+ reseñas verificadas',
    tech: ['Next.js', 'Firebase', 'AI Verification', 'Blockchain'],
    link: 'https://opinionesde.org',
  },
];

export default function MyCompanies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación más suave para cambios de slide
      gsap.fromTo(
        slideRef.current, 
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % companiesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? companiesData.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCompany = companiesData[currentIndex];

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      id="mis-empresas"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Mis Empresas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Proyectos empresariales que he fundado y lidero actualmente, donde aplico mi conocimiento en tecnología y estrategias de crecimiento digital.
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Cada empresa refleja mi compromiso con la innovación y la excelencia en el ámbito digital.
          </p>
        </div>

        {/* Selector de empresas (ahora arriba) */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full shadow-sm transform transition-transform hover:scale-105"
                aria-label="Empresa anterior"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>

              <div className="flex items-center gap-4 px-2">
                {companiesData.map((company, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 py-2 px-4 rounded-lg ${
                      currentIndex === index
                        ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium shadow-md'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    aria-label={`Ir a ${company.name}`}
                  >
                    {company.name.split('.')[0]}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full shadow-sm transform transition-transform hover:scale-105"
                aria-label="Siguiente empresa"
              >
                <ArrowRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            ref={slideRef}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-8 transform transition-all duration-300"
          >
            <div className="md:flex">
              {/* Banner superior con gradiente */}
              <div className="h-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full"></div>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="inline-block bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-medium">
                      {currentCompany.category}
                    </div>
                    <div className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Fundada en {currentCompany.foundedYear}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">{currentCompany.name}</h3>
                  <p className="text-xl text-violet-500 dark:text-violet-300 font-medium mb-4">
                    {currentCompany.tagline}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                    {currentCompany.description}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-200 mb-6">
                    {currentCompany.longDescription}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-700 dark:text-gray-200 font-medium">
                      {currentCompany.achievements}
                    </span>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-5 h-5 text-violet-500" />
                      <span className="font-medium text-gray-700 dark:text-gray-200">Tecnologías</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentCompany.tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={currentCompany.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Visitar sitio web
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="md:w-72 bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-lg overflow-hidden shadow-inner">
                  <div className="h-full py-10 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-24 h-24 mb-6 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                      <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                        {currentCompany.name.split('.')[0].charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-3">
                      {currentCompany.name.split('.')[0]}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {currentCompany.name.split('.')[1]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Estas empresas son parte de mi visión de crear soluciones digitales innovadoras 
            que respondan a necesidades reales del mercado, combinando tecnología avanzada con 
            estrategias efectivas.
          </p>
        </div>
      </div>
    </section>
  );
}
