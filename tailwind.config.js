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
        'custom-blue-1-light': '#3b82f6',
       'custom-blue-2-light': '#93c5fd',
      }
    },
  },
  plugins: [],
}

