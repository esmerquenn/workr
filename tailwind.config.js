/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", ".css/*.css", "./js/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "400px",
        sm: "540px",
        md: "768px",
        lg: "992px",
        xl: "1140px",
        xxl: "1260px",
      },
    },
  },
  plugins: [],
};
