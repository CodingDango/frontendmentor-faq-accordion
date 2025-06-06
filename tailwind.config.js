/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // This will find index.html inside src
    "./src/**/*.js",   // If you have JS files in src using Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 100%, 100%)',
        'purple-100': 'hsl(275, 100%, 97%)',
        'purple-600': 'hsl(292, 16%, 49%)',
        'purple-700': 'hsl(292, 65.50%, 38.60%)',
        'purple-bright': 'hsl(270, 100.00%, 79.60%)'
      }
    },
  },
  plugins: [],
}

