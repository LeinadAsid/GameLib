/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
