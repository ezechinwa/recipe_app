/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFF8B'
        },
        custom_gray: {
          50: '#B7B7B7'
        }
      }
    },
  },
  plugins: [],
}