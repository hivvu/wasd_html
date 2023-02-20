/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{php,html}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter']
      },
      colors: {
        primary: '#207FF0',
        secondary: '#005DCA',
        lightPrimary: '#FFFFFF',
        lightSecondary: '#F5F5F5',
        lightTerciary: '#CFD3D4',
        darkPrimary: '#0B0D0E',
        darkSecondary: '#23292C',
        darkTerciary: '#434343'
      },
      gridTemplateColumns: {
        'custom': 'repeat(3, 1fr) 300px',
        'review': '1fr 300px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-debug-screens'),
  ]
}
