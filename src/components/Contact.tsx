import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Animación de la información de contacto
      gsap.from(infoRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Animación del formulario
      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ¿Tienes alguna pregunta o quieres trabajar juntos? Me encantaría escucharte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div ref={infoRef} className="space-y-8">
            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-violet-50 dark:bg-gray-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-violet-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Email</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">thevega82@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 bg-violet-50 dark:bg-gray-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-violet-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Teléfono</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">+34 666 532 143</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-violet-100 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-violet-100 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-violet-100 dark:border-gray-700 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all text-lg"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              Enviar Mensaje
              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
