/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "Titan-One": ["Titan One", "sans"],
      sans: ["sans-serif", "serif"],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      "2xl": '1536px',
      "3xl": '1840px'
    },
  },
  plugins: [],
};
