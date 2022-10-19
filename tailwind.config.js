/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "card-bg": "hsl(244, 38%, 16%)",
      white: "#FFF",
      violet: "hsl(277, 64%, 61%)",
    },
    extend: {
      backgroundImage: {
        hero_mobile: "url(../src/assets/image-header-mobile.jpg)",
      },
    },
  },
  plugins: [],
};
