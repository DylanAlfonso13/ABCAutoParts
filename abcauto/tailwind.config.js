/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1033B3', // Example custom color
        secondary: '#2d3748', // Example custom color
        accent: '#4a5568', // Example custom color
        white: '#ffffff', // white
      },
    },
  },
  plugins: [],
}