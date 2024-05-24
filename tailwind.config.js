/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#639a30',
          '400': '#639a30',
          '500': 'hsl(101, 40%, 10%)',
        },
      },
    },
  },
  plugins: [],
}

