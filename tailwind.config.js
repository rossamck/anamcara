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
      },
      colors: {
        primary: '#1d4ed8',
        secondary: '#9333ea',
        accent: '#10b981',
        neutral: '#64748b',
      },
    },
  },
  plugins: [],
}


