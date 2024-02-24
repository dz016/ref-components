/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          500: "#666666",
          400: "#7f8c8d",
          300: "#99aab5",
          200: "#b2b9bf",
          100: "#ccd1d9",
        },
      },
    },
  },
  plugins: [],
};
