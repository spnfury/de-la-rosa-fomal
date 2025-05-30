import React from 'react';
import { Workflow, Phone, Video, Image, Users, Globe, ShoppingCart } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: 'centralita-virtual-con-ia',
    icon: <Phone className="w-12 h-12" />,
    title: 'Agentes con IA',
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
    id: 'ecommerce-ia',
    icon: <ShoppingCart className="w-12 h-12" />,
    title: 'Ecommerce con IA',
    shortDescription: 'Tiendas online inteligentes con IA para maximizar tus ventas.',
    longDescription: 'Desarrollo de tiendas online avanzadas con integración de IA para personalización, recomendaciones y optimización de conversiones. Incluye pasarelas de pago, gestión de inventario y análisis predictivo.',
    videoUrl: 'https://www.instagram.com/p/DIGnZkgoNnt/embed/',
    features: [
      'Diseño personalizado con IA',
      'Recomendaciones inteligentes',
      'Optimización de conversiones',
      'Gestión de inventario automática',
      'Pasarelas de pago integradas',
      'Análisis predictivo de ventas',
      'Chatbot de atención al cliente',
      'SEO avanzado'
    ],
    benefits: [
      'Aumento de conversiones',
      'Experiencia de usuario personalizada',
      'Gestión eficiente del inventario',
      'Reducción de carritos abandonados',
      'Mejor posicionamiento en buscadores',
      'Atención al cliente 24/7',
      'Escalabilidad garantizada',
      'Integración con múltiples plataformas'
    ]
  },
  {
    id: 'automatizaciones',
    icon: <Workflow className="w-12 h-12" />,
    title: 'Automatizaciones con Make & N8N',
    shortDescription: 'Optimiza tus procesos empresariales con automatizaciones inteligentes.',
    longDescription: 'Implementamos soluciones de automatización personalizadas utilizando Make (anteriormente Integromat) para conectar tus aplicaciones y automatizar flujos de trabajo complejos, ahorrando tiempo y recursos.',
    videoUrl: 'https://www.instagram.com/p/DHnWpxEI1T3/embed/',
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
    id: 'generacion-videos-ia',
    icon: <Video className="w-12 h-12" />,
    title: 'Generación de Videos con IA',
    shortDescription: 'Crea contenido video profesional con inteligencia artificial.',
    longDescription: 'Producción de videos de alta calidad utilizando las últimas tecnologías de IA, perfectos para marketing, formación o comunicación corporativa.',
    videoUrl: 'https://www.instagram.com/p/DHjfjkwIvNM/embed/',
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
    videoUrl: 'https://www.instagram.com/p/DH_biP7IvGg/embed/',
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
    videoUrl: 'https://www.instagram.com/p/DIGnZkgoNnt/embed/',

    
    
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
    title: 'Apps & Páginas Web PRO en 24h',
    shortDescription: 'Desarrollo web profesional con IA + Hosting gratuito y SEO optimizado.',
    longDescription: 'Creación de páginas web profesionales en tiempo récord utilizando IA para diseño, contenido y optimización SEO. Incluye hosting gratuito y configuración completa.',
    videoUrl: 'https://www.instagram.com/p/DIOJKc_oQP5/embed/',
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
