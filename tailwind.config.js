/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "me": "url('./img/me.jpg')",
        "dotnet" : "url('./img/dotnet.png')"
      },
      colors: {
        "light-bg": colors.gray["300"],
        "light-primary": colors.gray["100"],
        "light-secondary": colors.gray["950"],
        "light-tertiary": colors.emerald["400"],
        "light-fourth": colors.gray["600"]
      }
    },
  },
  plugins: []
}