/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        yellow:"#FFEAAE",
        orange:"#F6820C",
        "dark-yellow":"#FCCA3F",
        gray:"#5A5959",
      }
    },
  },
  plugins: [],
}