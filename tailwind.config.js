/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      universe: "url('/assets/background_universe.jpg')",
    },
  },
  plugins: [],
}
