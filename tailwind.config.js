/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cupidPink: '#FF69B4',
        marshmallow: '#F8F8FF',
      },
    },
  },
  plugins: [],
}
