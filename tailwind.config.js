/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
    keyframes: {
      covid: {
        "0%": { left: "-1400px" },
        "20%,80%": { left: "0px" },
        "100%": { left: "1400px" },
      },
    },
  },
};
