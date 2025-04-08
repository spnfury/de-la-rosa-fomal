import React from 'react';
import { Helmet } from 'react-helmet-async';
import StandardContactForm from '../components/StandardContactForm';

export default function QuickContact() {
  return (
    <>
      <Helmet>
        <title>Contacto Rápido | Sergio de la Rosa</title>
        <meta name="description" content="Contacta directamente con Sergio de la Rosa para consultas sobre automatización de procesos, estrategia digital y transformación empresarial." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
                Contacto Rápido
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                ¿Necesitas una consulta urgente o quieres información sobre alguno de mis servicios? Utiliza este formulario para contactarme directamente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">Información de contacto</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Email</p>
                      <p>thevega82@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p>+34 666 532 143</p>
                    </div>
                    <div>
                      <p className="font-medium">Horario</p>
                      <p>Lunes a Viernes: 9:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <p className="font-medium mb-2">Respuesta rápida garantizada</p>
                    <p className="text-sm opacity-80">Me comprometo a responder todas las consultas en un plazo máximo de 24 horas hábiles.</p>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <StandardContactForm 
                    title="Envíame tu consulta"
                    subtitle="Completa el formulario y recibirás una respuesta en menos de 24 horas hábiles."
                    buttonText="Enviar consulta rápida"
                    successMessage="¡Consulta recibida! Te responderé en menos de 24 horas hábiles."
                    className="p-8 h-full shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 