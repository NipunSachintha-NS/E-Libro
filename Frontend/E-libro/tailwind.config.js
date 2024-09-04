/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#B0BFEB',
        customBlue: '#537AF2',
        customBlueTransparent: '#4B77F77A',
        ash:'#ECECEC', 
        darkBlue:'#07448D',
      },
    },
  },
  plugins: [],
}
