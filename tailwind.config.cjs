/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {

    
    extend: {
      colors: {
        red: {
          1000: '#49111C',
        },
        zinc: {
          1000:'#A9927D',
          1200:'#5E503F'
        },
        white:{
          1000:'#F2F4F3'
        },
      }
    },
  },
  plugins: [],
}
