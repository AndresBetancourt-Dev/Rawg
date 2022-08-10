/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    colors: {
      white: "#FFFFFF",
      dark: "#212121",
      grey: "#313131"
    },
    fontFamily: {
      main: 'Averta, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
      title: 'Mont, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif'
    },
    extend: {},
  },
  plugins: [],
};
