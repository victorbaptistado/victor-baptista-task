const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {},
    purge: {
      mode: 'jit',
      content: [
        'dist/**/*.html',
        'src/**/*.vue',
      ],
      options: {},
    },
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          grey: {
            100: '#AEAEBA',
            200: '#9898A3',
            300: '#202020'
          }
        },
        fontFamily: {
          sans: ["cerapro-regular", "sans-serif"],
          ceraproMedium: ["cerapro-medium", "sans-serif"],
        },   
      },
      screens: {
        'SM': '540px',
        'MD': '720px',
        'LG': '960px',
        'XL': '1140px'
      },
      
    },
    plugins: [],
    prefix: '',
  }
