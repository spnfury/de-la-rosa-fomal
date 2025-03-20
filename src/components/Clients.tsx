import React, { useEffect, useState, useRef } from 'react';

interface Client {
  name: string;
  image: string;
}

const clients: Client[] = [
  {
    name: 'Lorena Morlote',
    image: 'https://s1.ppllstatics.com/lasprovincias/www/multimedia/2024/03/16/Lorena%20Morlote%20(1)-U190723778593q2E--1920x1080@Las%20Provincias.jpg',
  },
  {
    name: 'Coca Cola',
    image: 'https://www.cocacolaep.com/assets/legacy-assets/Uploads/resources/Coca-Cola-1210.jpg',
  },
  {
    name: 'Nestle',
    image: 'https://ieeb.fundacion-biodiversidad.es/sites/default/files/nestlelogor-with-wordmark-oak-784x800px-rgb.png',
  },
  {
    name: 'Chain4Ecconomy',
    image: 'https://www.c4e.club/wp-content/uploads/2024/07/C4E-Chain-for-economy-website-Publi.jpg',
  },
];

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change currentIndex every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % clients.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Basic parallax offset for a subtle movement
  const [offset, setOffset] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      setOffset(prev => prev + 1); // increment offset slightly each frame
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Calculate displayed clients
  const displayedClients = [
    clients[currentIndex],
    clients[(currentIndex + 1) % clients.length],
    clients[(currentIndex + 2) % clients.length],
    clients[(currentIndex + 3) % clients.length],
  ];

  // Parallax style function
  const parallaxStyle = (index: number) => {
    // Subtle vertical movement using sine wave
    const translateY = Math.sin((offset + index * 10) / 50) * 5;
    return {
      transform: `translateY(${translateY}px)`,
    };
  };

  return (
    <section id="clientes" className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Confían en nuestros servicios
          </p>
        </div>

        {/* Automatic sliding; arrows removed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {displayedClients.map((client, idx) => (
            <div
              key={client.name}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center"
              style={parallaxStyle(idx)}
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto hover:scale-105 transition-transform duration-500 shadow-2xl relative z-10"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
