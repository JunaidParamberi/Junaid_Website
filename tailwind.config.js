/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'blink-zoom': 'blink 1.5s infinite, zoom 2s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
    },
    screens: {
      'sm': '640px',
      'md': '901px',
      'lg': '1024px',
      'xl': '1280px',
      'max-md': { 'max': '900px' }, 
        'max-lg': { 'max': '1023px' }, 
        'max-xl': { 'max': '1279px' }, 
    }
  },
  plugins: [],
};