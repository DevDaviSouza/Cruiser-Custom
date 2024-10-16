/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('./assets/images/capa1.png')" 
      }
    },
    colors: {
      begePaleta: "#D0C68F"
    }
  },
  plugins: [],
}