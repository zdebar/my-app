module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: false,
      padding: "1rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
