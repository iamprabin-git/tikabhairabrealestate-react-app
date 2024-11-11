/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Poppins"],
        'secondary' : ["Syne"]
      },
      colors:{
        'heroBg' : "#0e1122",
        'para': 'rgb(0 0 0 / 80%)',
        'primary' : '#006400'
      }
    },
  },
  plugins: [],
}

