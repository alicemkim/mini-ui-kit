/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'Avenir Next', 'Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
