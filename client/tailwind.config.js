module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2880px",
      },
      colors: {
        Copper: "#917171",
        Sulphate: "#FFE0E0",
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
