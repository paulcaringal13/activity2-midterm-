// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#41B883",
        secondary: "#34495E",
        accent: "#f4f4f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
