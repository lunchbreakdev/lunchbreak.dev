/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        toast: 'toast 2s ease-in-out infinite',
      },
      keyframes: {
        toast: {
          '10%, 90%': { transform: 'rotate(0deg)' },
          '20%, 45%, 55%, 80%': { transform: 'rotate(-90deg)' },
          '50%': { transform: 'rotate(-90deg) translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
}
