/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-night-violet": "#21093A",
      "secondary-khaki": "#D9D4A7",
      "secondary-plump": "#AA93FF",
      "almost-white": "#fbfbf9",
    },
    fontFamily: {
      primary: ["Bitter", "sans-serif"],
      secondary: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
