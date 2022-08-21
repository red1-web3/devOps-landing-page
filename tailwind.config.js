/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD645",
        secondary: "#171A21",
      },
    },
    fontFamily: {
      primary: ["Mulish", "system-ui"],
    },
  },
  plugins: [],
};
