/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html",
  ],
  theme: {
    extend: {
      height: {
        'navbar': '29rem',
      },
      colors:{
        'custom-black': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

