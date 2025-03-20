import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import MyCompanies from '../components/MyCompanies';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      {/* Move MyCompanies below (just above or near the footer) */}
      <MyCompanies />
    </main>
  );
}
