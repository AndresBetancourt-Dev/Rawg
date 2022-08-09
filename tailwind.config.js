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
    extend: {},
  },
  plugins: [],
};
