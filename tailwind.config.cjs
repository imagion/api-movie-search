/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      '1/4': '25%',
      '7xl': '80rem',
    },
    minWidth: {
      10: '170px',
    },
    maxHeight: {
      445: '445px',
    },
    extend: {
      aspectRatio: {
        poster: '300 / 445',
      },
    },
  },
  plugins: [],
}
