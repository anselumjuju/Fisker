/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      screens: {
        '3xl': '1800px'
      }
    },
  },
  plugins: [],
}

