/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-1': '#052c65', 
        'custom-blue-2': '#10162a',
        'custom-blue-3': '#052b65',
        'custom-blue-4': '#00468b',
      },
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
      }
    },
  },
  plugins: [],
}

