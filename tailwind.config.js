/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'retro-banner-newsletter': "url('./content/images/retro-newsletter-bg.png')"
       })
    },
    fontFamily: {
      "Titan-One": ["Titan One", "sans"],
      "Rubik": ["Rubik"],
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
