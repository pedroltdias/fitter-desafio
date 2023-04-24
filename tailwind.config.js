/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E0D30',
        secondary: '#191b3d',
        tertiary: '#EA8E41',
        quaternary: '#A7AACD',
      },
    },
  },
  plugins: [],
}
