/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'tower-black': '#1c1c1c',
        'orokin-white': '#DCDCDC',
        'gentle-gray': '#424242',
        'test': '#f7f7fa'
      },
    },
  },
  plugins: [],
}
