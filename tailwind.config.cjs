/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: {
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
      },
      yellow: {
        400: '#facc15',
        500: '#eab308',
      },
      'bnb-yellow': '#F0B90B',
      'bnb-dark': '#0A0E13',
      'bnb-gray': '#1E2026',
      'bnb-light-gray': '#474D57',
      'bnb-lighter-gray': '#76808F',
      'bnb-hover-gray': '#2B3139',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        bnb: '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.svg')",
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
});
