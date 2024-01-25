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
    }
  },
  plugins: [],
}



// TODO: Custom font, colors and jit setup