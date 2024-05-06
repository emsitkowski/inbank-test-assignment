/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-night-violet": "#21093A",
      "secondary-khaki": "#D9D4A7",
      "secondary-light-khaki": "#F0F0EA",
      "secondary-plump": "#AA93FF",
      "secondary-lavender": "#E3D2FF",
      "almost-white": "#fbfbf9",
      white: "#ffffff",
      "light-gray": "#DEDEDE",
      "dark-gray": "#606060",
      error: "#e63946",
    },
    fontFamily: {
      primary: ["Bitter", "sans-serif"],
      secondary: ["Inter", "sans-serif"],
    },
    boxShadow: {
      base: "0 0 40px rgba(0, 0, 0, 4%)",
    },
  },
  plugins: [],
};
