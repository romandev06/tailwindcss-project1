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
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [],
}

