/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          DEFAULT: '#1a2942',
          light: '#2a3b56',
          dark: '#0f1927',
        },
        accent: {
          DEFAULT: '#df0000',
          light: '#ff0000',
          dark: '#b30000',
        }
      }
    },
  },
  plugins: [],
};
