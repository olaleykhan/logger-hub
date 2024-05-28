// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#639a30',
          '50': '#eaf4e1',
          '100': '#cfe4b8',
          '200': '#a5cb7f',
          '300': '#7bb157',
          '400': '#568f3b',
          '500': '#639a30',
          '600': '#4f7d28',
          '700': '#3b5f1f',
          '800': '#283f16',
          '900': '#17270d',
        },
      },
    },
  },
  plugins: [],
};
