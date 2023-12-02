/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        128: "42rem",
        129: "27rem",
      },
      width: {
        128: "22rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
