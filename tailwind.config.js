// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', "sans-serif"],
      },
      colors: {
        primary: "#41B883",
        secondary: "#2b3c4e",
        foreground: "#394f67",
        description: "#ffffffb3",
        accent: "#edf2f4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Enable the components feature
    components: true,
  },
};
