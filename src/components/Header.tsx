import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-md">
      <div className="h-1 bg-gradient-to-r from-primary to-accent" style={{ width: `${scrollProgress}%` }} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo_header.svg" alt="SR Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg text-primary dark:text-white">Sergio de la Rosa</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {[
              ['Inicio', 'home'],
              ['Servicios', 'services'],
              ['Sobre Mí', 'about'],
              ['Contacto', 'contact']
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-primary dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary-light transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary-light transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            {[
              ['Inicio', 'home'],
              ['Servicios', 'services'],
              ['Sobre Mí', 'about'],
              ['Contacto', 'contact']
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="block py-2 text-primary dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
