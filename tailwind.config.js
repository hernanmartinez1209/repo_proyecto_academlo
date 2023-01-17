/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      '--pharagap-back': ' #4D4D4D',
      '--bg--navbar': '#000',
      '--pharagap-back-footer': ' #ECE6E6',
      '--color-bg-btn': ' #1B4DB1',
      '--pharagap-nav-blue': ' #1B4DB1',
      '--bg-like-btn': ' #D9D9D9',
      '--bg-page': ' #ECE6E6',
      '--shadow-cart': ' 0px 2px 4px rgba(0, 0, 0, 0.25)',
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
