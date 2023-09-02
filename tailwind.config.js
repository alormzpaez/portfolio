/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        "layout": [
          "personal nav nav",
          "personal main main",
          "personal main main"
        ]
      },
      gridTemplateColumns: {
        "layout": "30% 35% 35%"
      },
      gridTemplateRows: {
        "layout": `15% 
          auto 
          auto`
      },
      backgroundImage: {
        "me": "url('/img/me.jpg')",
        "dotnet" : "url('/img/dotnet.png')",
        "helpin" : "url('/img/helpin.png')",
        "backpack" : "url('/img/backpack.png')",
      },
      colors: {
        "light-bg": colors.gray["300"],
        "light-primary": colors.gray["100"],
        "light-secondary": colors.gray["950"],
        "light-tertiary": colors.emerald["400"],
        "light-fourth": colors.gray["500"],
        "dark-bg": colors.neutral["900"],
        "dark-primary": colors.neutral["800"],
        "dark-secondary": colors.gray["300"],
        "dark-tertiary": colors.emerald["400"],
        "dark-fourth": colors.gray["500"],
      }
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas")
  ]
}