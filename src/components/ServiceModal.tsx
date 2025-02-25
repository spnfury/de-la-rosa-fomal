import React from 'react';
import { X } from 'lucide-react';
import { Service } from '../types';
import ContactForm from './ContactForm';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-violet-500">{service.icon}</div>
              <h2 className="text-3xl font-bold">{service.title}</h2>
            </div>

            <div className="aspect-video w-full mb-8">
              <iframe
                src={service.videoUrl}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg mb-6">{service.longDescription}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Características</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t dark:border-gray-800 pt-8">
              <h3 className="text-2xl font-bold mb-6">¿Interesado en este servicio?</h3>
              <ContactForm serviceId={service.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
