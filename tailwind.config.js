/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Noto Serif', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
