/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        button:{
          primary: '#AB7E57',
        },
        border: {
          light: '#A79FE1',
          gray: 'rgba(187, 184, 222, 1)',
        },
        bg:{
          purple: 'rgba(70, 47, 153, 0.6)',
          gray: 'rgba(187, 184, 222, 1)',
          dark_glass: 'rgba(55, 51, 52, 0.7)',
          brown_light: '#F4DFCA'
        },
        text: {
          main: '#3A3636',
          secondary: '#AB7E57'
        },
        dark_bg: '#110115',
        light_bg: '#ffffff',
        light_glass: 'rgba(255, 255, 255, 0.7)',
        text_secondary: '#F4EEB2',
        text_primary: '#3E0B82',
        pulse: {
          bg: '#ff6090',
          border: '#e91e63'
        }
      },
      fontFamily: {
        main: ['main'],
        secondary: ['secondary'],
      }
    },
  },
  plugins: [],
};
