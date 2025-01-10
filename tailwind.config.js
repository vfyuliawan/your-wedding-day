/** @type {import('tailwindcss').Config} */ 
module.exports = {
  prefix: 'tw-', // Add this line
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', "./node_modules/flowbite/**/*.js"], // Adjust based on your project structure
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};