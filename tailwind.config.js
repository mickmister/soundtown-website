/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./content/**/*.html",
    "./layouts/**/*.html"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: '#181818',
        black: '#121212',
        gray: {
          DEFAULT: '#959595'
        }
      },
      screens: {
        'xl': '1378px',
        '2xl': '1640px'
      }
    },
    fontFamily: {
      inter: 'Inter, sans-serif'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),

  ],
}
