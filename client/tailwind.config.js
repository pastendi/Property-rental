/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#475BE8',
        whiteBg: '#F4F4F4',
        light: '#808191',
      },
    },
  },
  plugins: [],
}
