/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#272727',
        'custom-gray-secondary': '#e7e7e7',
        'custom-gray-background': '#f1f1f1',
        'custom-orange': '#FF9C2C',
      }
    }
  },
  variants: {},
  plugins: [],
}