/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        primary: {
          100: "#ffd7de",
          200: "#ffafbe",
          300: "#ff889d",
          400: "#ff607d",
          500: "#ff385c",
          600: "#cc2d4a",
          700: "#992237",
          800: "#661625",
          900: "#330b12",
        },
      },
    },
  },
  plugins: [],
};