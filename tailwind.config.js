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
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    },
    fontFamily: {
      sans: ['"cabinet-grotesk"', 'sans-serif']
    }
  },
  plugins: [],
}



// TODO: Custom font, colors and jit setup