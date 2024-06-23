/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },

      fontFamily: {
        body:['Roboto'],
        fonnt:['Lato'],
      },

    },
  },
  plugins: [],
  
}

