/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./output.css","./main.js","./public/**/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      extend: {
        colors: {
          papayawhip: {
            light: '#fef4e4',
            DEFAULT: '#ffefd5',
            dark: '#fee5bc',
          }
        },
        screens: {
          'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
          'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
        },
        keyframes: {
          'open-menu': {
            '0%': { transform: 'scaleY(0)' },
            '80%': { transform: 'scaleY(1.2)' },
            '100%': { transform: 'scaleY(1)' },
          },
        },
        animation: {
          'open-menu': 'open-menu 0.5s ease-in-out forwards',
        }
      },
    },
  },
  plugins: [],
}

