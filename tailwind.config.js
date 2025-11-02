/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: "#181818",
        lightGray: "#F8F8F8",
        adeBlue: {
          '50': '#e8f1ff',
          '100': '#d5e4ff',
          '200': '#b3ccff',
          '300': '#85a8ff',
          '400': '#5676ff',
          '500': '#2f45ff',
          '600': '#0c0eff',
          '700': '#0000ff',
          '800': '#0609cd',
          '900': '#10169f',
          '950': '#0a0b5c',
        },
        adeRed: {
          '50': '#fff0f0',
          '100': '#ffdddd',
          '200': '#ffc0c0',
          '300': '#ff9494',
          '400': '#ff5757',
          '500': '#ff2323',
          '600': '#ff0000',
          '700': '#d70000',
          '800': '#b10303',
          '900': '#920a0a',
          '950': '#500000',
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif']
      },
    },
  },
  plugins: [],
}