/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0a',
          card: '#171717',
          accent: '#ef4444', // Red accent for PSI
          text: '#f5f5f5',
          muted: '#a3a3a3'
        }
      }
    },
  },
  plugins: [],
}
