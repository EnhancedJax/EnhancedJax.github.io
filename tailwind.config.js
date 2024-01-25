/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class
  mode: 'jit',
  // purge: ['./src/**/*.{js}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6969'
      }
    },
    fontFamily: {
      // sans: ['"cabinet-grotesk"', 'sans-serif']
      sans: ['"Red Hat Display"', 'sans-serif']
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '780px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '420px' },
      // => @media (max-width: 639px) { ... }
      'tall': { 'raw': '(max-height: 500px)' }
    }
  },
  plugins: [],
}



// TODO: Custom font, colors and jit setup