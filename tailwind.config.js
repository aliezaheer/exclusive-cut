/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myPeach: "#d6a354",
        grayBorder: "#e8e8e8",
        pText: "#707070;",
        cardsBg: "rgb(214 163 82 / 10%)",
        dGray: "#1f1f1f",
      },
    },
  },
  plugins: [],
};
