import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Presentation from '../components/Presentation';
import MyCompanies from '../components/MyCompanies';

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Sergio de la Rosa | Consultor de Automatización y Estrategia Digital</title>
        <meta name="description" content="Sergio de la Rosa - Consultor especializado en automatización de procesos, estrategia digital y transformación empresarial. Ayudo a empresas a optimizar sus operaciones con soluciones tecnológicas innovadoras." />
        <meta name="keywords" content="consultor digital, automatización, estrategia digital, transformación digital, Sergio de la Rosa" />
        <meta property="og:title" content="Sergio de la Rosa | Consultor de Automatización y Estrategia Digital" />
        <meta property="og:description" content="Consultor especializado en automatización de procesos, estrategia digital y transformación empresarial." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sergiodelarosa.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sergio de la Rosa | Consultor de Automatización y Estrategia Digital" />
        <meta name="twitter:description" content="Consultor especializado en automatización de procesos, estrategia digital y transformación empresarial." />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header
          aboutRef={aboutRef}
          servicesRef={servicesRef}
          clientsRef={clientsRef}
          contactRef={contactRef}
        />
        <Presentation />
        <Hero />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Clients ref={clientsRef} />
        <Contact ref={contactRef} />
        <MyCompanies />
      </div>
    </>
  );
}
