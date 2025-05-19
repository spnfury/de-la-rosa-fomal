import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Header from '../src/components/Header';
import '../src/index.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [updatedAt, setUpdatedAt] = useState(new Date());

  useEffect(() => {
    const handleInteraction = () => {
      setUpdatedAt(new Date());
    };

    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  return (
    <>
      <Head>
        <script 
          src="https://widgets.leadconnectorhq.com/loader.js"  
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="682af2cfe4bd840b522b42c0"   
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <footer className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Sergio de la Rosa. Todos los derechos reservados.</p>
          <p className="mt-2">Web actualizada: {updatedAt.toLocaleString()}</p>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
