/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        palanquin: ['Palanquin Dark', 'sans-serif'],
      },
      colors: {
        primary: '#5ad1ae',
        secondary: '#9333ea',
        accent: '#10b981',
        neutral: '#1e899b',
      },
    },
  },
  plugins: [],
}
