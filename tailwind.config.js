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
      "secondary-plump-lighter": "#BBA8FF",
      "secondary-plump-darker": "#9F85FF",
      "secondary-lavender": "#E3D2FF",
      "almost-white": "#fbfbf9",
      white: "#ffffff",
      "light-gray": "#DEDEDE",
      "dark-gray": "#606060",
      "disabled-gray": "#9C9C9C",
      "disabled-gray-lighter": "#DEDEDE",
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
