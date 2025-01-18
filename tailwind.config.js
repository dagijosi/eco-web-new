/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marigold': {
        '50': '#faf8ec',
        '100': '#f3eece',
        '200': '#e9db9f',
        '300': '#dcc268',
        '400': '#d0aa3f',
        '500': '#b88e2f',
        '600': '#a67528',
        '700': '#855723',
        '800': '#6f4724',
        '900': '#603c23',
        '950': '#371f11',
    },
    
      },
    },
  },
  plugins: [],
}

