/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dental: {
          50:  '#eefbfe',
          100: '#d6f5fc',
          200: '#b2ecf9',
          300: '#7ddff4',
          400: '#40ccec',
          500: '#1ab0de',
          600: '#0e8fbd',
          700: '#0f7398',
          800: '#135e7c',
          900: '#144d67',
          950: '#073345',
        },
        gold: {
          50:  '#fdf8eb',
          100: '#f9edc8',
          200: '#f3d98e',
          300: '#ecc054',
          400: '#e6a82d',
          500: '#dc8e16',
          600: '#c26c10',
          700: '#a14d11',
          800: '#843c14',
          900: '#6e3214',
          950: '#401906',
        },
        navy: {
          50:  '#eef4ff',
          100: '#dfe8ff',
          200: '#c7d3fe',
          300: '#a4b5fc',
          400: '#7e8df8',
          500: '#5f64f1',
          600: '#4a3de4',
          700: '#3e2ec9',
          800: '#3427a3',
          900: '#1e2550',
          950: '#0f1430',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
