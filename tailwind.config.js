/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAFA',
        ink: '#272727',
        charcoal: '#272727',
        mineral: '#1C1C1C',
        'surface-mineral': '#1C1C1C',
        structure: '#E5E5E5',
        surface: '#F2F2F2',
        'surface-dark': '#272727',
        accent: {
          orange: '#EE9B00',
          lime: '#CED600',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        body: ['var(--font-sans)'],
        manrope: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      spacing: {
        '128': '32rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'dash': {
          'to': { 'stroke-dashoffset': '-200' },
        },
        'flow': {
          '0%': { transform: 'translateY(-120%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(350%)', opacity: '0' },
        },
        'flow-h': {
          '0%': { left: '-20%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: '120%', opacity: '0' },
        },
        'signal': {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scroll-down': 'scroll-down 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'dash': 'dash 1.5s ease-in-out infinite alternate',
        'flow': 'flow 3s linear infinite',
        'flow-h': 'flow-h 3s linear infinite',
        'signal': 'signal 3s linear infinite',
      }
    },
  },
  plugins: [],
}
