/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors: {
        'main': '#273259',
        'secondary': '#3a4d80',
        'secondary-light': '#ace7ff',
        'main-dark':'#2F3B52',
        'myGreen': '#3fbc74',
        'light' : '#e9faff',
        'dark' : '#1C1C2E'
    },
    fontFamily:{
        'bebas' : ['Bebas Neue', 'sans']
    }
    },
  },
  plugins: [],
}

