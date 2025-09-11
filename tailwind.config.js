/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jovie', 'ui-sans-serif', 'system-ui', 'sans-serif'], 
        'serif': ['Jovie', 'ui-serif', 'Georgia', 'serif'], 
      },
    },
  },
  plugins: [],
}
