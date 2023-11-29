/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        '128': "26rem",
      },
      width: {
        '128': "22rem"
      }
    },
  },
  plugins: [require("daisyui")],
};
