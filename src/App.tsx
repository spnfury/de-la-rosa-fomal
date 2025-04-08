import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  useEffect(() => {
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Por defecto, modo claro
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Helmet>
            <script defer data-domain="sergiodelarosa.online" src="https://plausible.miprimermvp.com/js/script.js"></script>
          </Helmet>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicio/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <footer className="py-8 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
              <p>&copy; {new Date().getFullYear()} Sergio de la Rosa. Todos los derechos reservados.</p>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
