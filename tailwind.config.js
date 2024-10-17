/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%)',
      },
      colors: {
        'mr-button-success': '#0BE58A',
        'mr-button-success-hover': '#02B76C',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

