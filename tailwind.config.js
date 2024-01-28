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
        cbg: '#232323',
        cfg: '#282828',
        cborder: '#343434',
        cdarkgray: '#707070',
        cgray: '#A0A0A0',
        cpg: '#EDEDED', //paragraph
        cgreen: '#34D399'
      }
    },
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      mono: ['"DM Mono"', 'sans-serif']
    },
    fontSize: {
      'xxs': '10px',
      'xs': '12px',
      'sm': '13px',
      'base': ['15px', '22.5px'],
      'lg': '20px',
      'xl': '24px'
    }
  },
  plugins: [],
}



// TODO: Custom font, colors and jit setup