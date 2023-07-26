/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bgContent: '#02070c',
        hovered: 'rgb(243,244,246)',
      },
      boxShadow: {
        light: '0 0 30px 2px #002fff57',
      },
    },
  },
  plugins: [],
}
