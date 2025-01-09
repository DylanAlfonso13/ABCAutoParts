import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1033B3', // Example custom color
        secondary: '#63a0f3', // Example custom color
        accent: '#FF161C', // Example custom color
        white: '#ffffff', // white
      },
      screens: {
        xs: '400px', // Custom breakpoint at 400px
      },
    },
  },
  plugins: [],
} satisfies Config;
