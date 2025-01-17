/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B88E2F',
          light: '#D4AF37',
          dark: '#8B6914',
        },
      },
    },
  },
  plugins: [],
}

