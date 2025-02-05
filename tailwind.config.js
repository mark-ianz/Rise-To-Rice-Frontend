/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5CE20F",
        secondary: "#3AA60E",
        light: "#F1FFE6",
        dark: "#092A0E",
      },
      screens: {
        xsm: "480px",
        xmd: "850px",
      },
      fontFamily: {
        lalezar: ["Lalezar", "sans-serif"],
      },
      /* backgroundImage: {
        landingPage: "url('./img/landing_image.webp')",
      }, */
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

