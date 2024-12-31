/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1033B3', // Example custom color
        secondary: '#63a0f3', // Example custom color
        accent: '#FF161C', // Example custom color
        white: '#ffffff', // white
      },
    },
  },
  plugins: [],
}