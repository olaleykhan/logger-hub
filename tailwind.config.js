/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT:'#639a30',
        },
        green: {
          DEFAULT: '#639a30',
          '400': '#639a30',
          '500': '#639a30',
        },
      },
    },
  },
  plugins: [],
}

