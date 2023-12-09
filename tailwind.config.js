/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#08ffff',
        'footer-text': '#292929'
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [],
}

