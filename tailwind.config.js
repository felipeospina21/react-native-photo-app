/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        button:{
          primary: 'rgba(43, 15, 90, 0.9)',
        },
        border: {
          light: '#A79FE1',
          gray: 'rgba(187, 184, 222, 1)',
        },
        bg:{
          purple: 'rgba(70, 47, 153, 0.6)',
          gray: 'rgba(187, 184, 222, 1)'
        },
        dark_bg: '#110115',
        light_bg: '#ffffff',
        dark_glass: 'rgba(17, 1, 21, 0.5)',
        light_glass: 'rgba(255, 255, 255, 0.7)',
        text_secondary: '#F4EEB2',
        text_primary: '#3E0B82',
        pulse: {
          bg: '#ff6090',
          border: '#e91e63'
        }
      },
      fontFamily: {
        porterSans: ['Porter-Sans']
      }
    },
  },
  plugins: [],
};
