import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';

// Importamos el JSON de textos dinámicos
import dynamicTexts from '../../src/data/dynamicTexts.json';

export default function ServiceDetail() {
  const router = useRouter();
  const { serviceId } = router.query;
  
  // Control de scroll al inicio al cargar la página o cambiar el serviceId.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  // Obtenemos el contenido del JSON según el id de servicio
  const serviceData = serviceId ? dynamicTexts.servicios[serviceId.toString()] : null;
  
  // Valores por defecto en caso de que no se encuentre el servicio
  const title = serviceData ? serviceData.title : 'Servicio';
  const description = serviceData ? serviceData.description : 'Descripción del servicio';
  const content = serviceData ? serviceData.content : 'Contenido no disponible para este servicio.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{content}</p>
      </main>
    </>
  );
}
