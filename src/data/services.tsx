import React from 'react';
import { Workflow, Phone, Video, Image, Users, Globe } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: 'automatizaciones',
    icon: <Workflow className="w-12 h-12" />,
    title: 'Automatizaciones con Make',
    shortDescription: 'Optimiza tus procesos empresariales con automatizaciones inteligentes.',
    longDescription: 'Implementamos soluciones de automatización personalizadas utilizando Make (anteriormente Integromat) para conectar tus aplicaciones y automatizar flujos de trabajo complejos, ahorrando tiempo y recursos.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    features: [
      'Integración con más de 1000 aplicaciones',
      'Flujos de trabajo personalizados',
      'Automatización de tareas repetitivas',
      'Sincronización de datos en tiempo real'
    ],
    benefits: [
      'Ahorra hasta 40 horas mensuales por proceso automatizado',
      'Reduce errores humanos',
      'Mejora la eficiencia operativa',
      'Escalabilidad inmediata'
    ]
  },
  {
    id: 'centralita-virtual-con-ia',
    icon: <Phone className="w-12 h-12" />,
    title: 'Centralita Virtual con IA',
    shortDescription: 'Gestión inteligente de llamadas y reservas con IA.',
    longDescription: 'Sistema avanzado de atención telefónica que utiliza IA para gestionar llamadas, realizar reservas y proporcionar información las 24/7, mejorando la experiencia del cliente.',
    videoUrl: 'https://www.youtube.com/embed/zPVZM6Jq2hg',
    features: [
      'Atención 24/7',
      'Gestión automática de reservas',
      'Respuestas inteligentes',
      'Integración con CRM'
    ],
    benefits: [
      'Reducción de costes operativos',
      'Mejora en la satisfacción del cliente',
      'Sin tiempos de espera',
      'Escalabilidad instantánea'
    ]
  },
  {
    id: 'generacion-videos-ia',
    icon: <Video className="w-12 h-12" />,
    title: 'Generación de Videos con IA',
    shortDescription: 'Crea contenido video profesional con inteligencia artificial.',
    longDescription: 'Producción de videos de alta calidad utilizando las últimas tecnologías de IA, perfectos para marketing, formación o comunicación corporativa.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    features: [
      'Videos personalizados',
      'Múltiples estilos y formatos',
      'Locución natural con IA',
      'Edición automática'
    ],
    benefits: [
      'Reducción de costes de producción',
      'Creación rápida de contenido',
      'Consistencia en la marca',
      'Escalabilidad del contenido'
    ]
  },
  {
    id: 'logos-imagenes-ia',
    icon: <Image className="w-12 h-12" />,
    title: 'Logos e Imágenes con IA',
    shortDescription: 'Diseño gráfico profesional potenciado por IA.',
    longDescription: 'Creación de logos, imágenes y elementos gráficos únicos utilizando tecnología de IA avanzada para tu marca.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    features: [
      'Diseños únicos y personalizados',
      'Múltiples variaciones',
      'Alta resolución',
      'Formatos adaptables'
    ],
    benefits: [
      'Diseños únicos y originales',
      'Proceso de diseño rápido',
      'Costes reducidos',
      'Flexibilidad en las revisiones'
    ]
  },
  {
    id: 'personajes-virtuales',
    icon: <Users className="w-12 h-12" />,
    title: 'Personajes Virtuales para Instagram',
    shortDescription: 'Crea influencers virtuales únicos con IA.',
    longDescription: 'Desarrollo de personajes virtuales fotorrealistas para marketing en redes sociales, completamente personalizados para tu marca.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    features: [
      'Personajes personalizados',
      'Contenido regular',
      'Interacción con seguidores',
      'Gestión completa'
    ],
    benefits: [
      'Imagen de marca única',
      'Contenido consistente',
      'Control total sobre el mensaje',
      'Innovación en marketing'
    ]
  },
  {
    id: 'paginas-web-pro',
    icon: <Globe className="w-12 h-12" />,
    title: 'Páginas Web PRO en 24h',
    shortDescription: 'Desarrollo web profesional con IA + Hosting gratuito y SEO optimizado.',
    longDescription: 'Creación de páginas web profesionales en tiempo récord utilizando IA para diseño, contenido y optimización SEO. Incluye hosting gratuito y configuración completa.',
    videoUrl: 'https://www.youtube.com/embed/your-video-id',
    features: [
      'Diseño personalizado con IA',
      'Optimización SEO incluida',
      'Hosting gratuito',
      'Entrega en 24 horas',
      'Responsive design',
      'Panel de administración',
      'Certificado SSL gratuito',
      'Copias de seguridad automáticas'
    ],
    benefits: [
      'Presencia online inmediata',
      'Ahorro en costes de hosting',
      'Mejor posicionamiento en Google',
      'Máxima velocidad de carga',
      'Soporte técnico incluido',
      'Actualizaciones automáticas',
      'Seguridad avanzada',
      'Escalabilidad garantizada'
    ]
  }
];

export { services };
