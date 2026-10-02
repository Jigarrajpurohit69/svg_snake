/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'base-100': '#fafaf0',
        'base-200': '#deded5',
        'base-300': '#0f0f0f',
      }
    },
  },
  plugins: [],
}