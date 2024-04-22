/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ["Barlow", 'sans-serif'],
        'bellefair':["Bellefair","serif"],
        'barlow-condensed': ["Barlow Condensed", 'sans-serif']
      },
    },
  },
  plugins: [],
});
