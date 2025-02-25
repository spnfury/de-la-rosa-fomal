import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const [updatedAt, setUpdatedAt] = useState(new Date());

  useEffect(() => {
    const handleInteraction = () => {
      setUpdatedAt(new Date());
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicio/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <footer className="py-8 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} Sergio de la Rosa. Todos los derechos reservados.</p>
            <p className="mt-2">Web actualizada: {updatedAt.toLocaleString()}</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
