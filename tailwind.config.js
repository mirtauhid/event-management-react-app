module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  textAlign: false,
  justifyContent: false,
  display: false,
  theme: {
   
  },
  variants: {
    extend: {
      textAlign: ['hover', 'focus'],
      justifyContent: ['hover', 'focus'],
      display: ['hover', 'focus'],
    },
  },
  plugins: [],
}