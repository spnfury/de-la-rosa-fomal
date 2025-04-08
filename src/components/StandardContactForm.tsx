import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ContactFormData } from '../types';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface StandardContactFormProps {
  serviceId?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
}

export default function StandardContactForm({
  serviceId,
  title = "Contáctame",
  subtitle = "Completa el formulario y me pondré en contacto contigo lo antes posible.",
  buttonText = "Enviar Mensaje",
  successMessage = "Mensaje enviado. Te contactaré en breve!",
  className = ""
}: StandardContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    serviceId,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_j7p7thu', // EmailJS service ID
        'template_91n1ymk', // EmailJS template ID
        {
          to_email: 'thevega82@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          service: serviceId,
          contact_phone: '+34666532143'
        },
        'BbWBLSl9dABBLqb0g' // EmailJS public key
      );
      
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        serviceId,
      });
      
      // Mostrar toast de éxito
      toast.success(successMessage);
      
      // También abrir el modal si es necesario
      setModalOpen(true);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          {subtitle && <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Empresa / Web <span className="text-xs text-gray-500 dark:text-gray-400">(opcional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 outline-none transition-all"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : buttonText}
          <Send className="w-5 h-5" />
        </button>
      </form>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setModalOpen(false)}></div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg z-10 max-w-sm mx-auto text-center shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Mensaje enviado</h2>
            <p className="mb-6">{successMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 