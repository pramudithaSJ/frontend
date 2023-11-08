/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightGray:"#969191",
      midBlue:"#001EB9",
      darkGray:"#000000",
      white:"#ffffff",
    }
  },
  plugins: [],
}