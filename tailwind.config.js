/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container':'1170px',
      },
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'paprika': ['Paprika', 'system-ui'],
      },
      backgroundImage: {
        'banner': "url('assets/banner.png')",
      }
    },
  },
  plugins: [],
}

