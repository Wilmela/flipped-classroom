/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        APP_RED: "#EA4462",
        APP_YELLOW: "#EAC63D",
        APP_ASH: "#384B6D",
      },
      
    },
  },
  plugins: [],
};
