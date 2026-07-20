/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f7f8fb',
          100: '#eef1f6',
          200: '#dde3ec',
          300: '#b9c4d4',
          400: '#8595ab',
          500: '#5a6b85',
          600: '#44546e',
          700: '#36445c',
          800: '#1f2a3d',
          900: '#131c2e',
          950: '#0b1220',
        },
        brand: {
          50: '#eefcff',
          100: '#d4f6ff',
          200: '#aeeafb',
          300: '#76d4f0',
          400: '#34bcdc',
          500: '#139cc4',
          600: '#0d7ba0',
          700: '#0f6282',
          800: '#13506a',
          900: '#144258',
          950: '#0a2c3d',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(19, 28, 46, 0.04), 0 4px 16px -6px rgba(19, 28, 46, 0.06)',
        card: '0 1px 2px rgba(19, 28, 46, 0.04), 0 8px 28px -12px rgba(19, 28, 46, 0.10)',
        'card-hover': '0 1px 2px rgba(19, 28, 46, 0.05), 0 16px 44px -14px rgba(19, 28, 46, 0.16)',
        float: '0 20px 60px -20px rgba(19, 28, 46, 0.22)',
        'float-dark': '0 24px 70px -24px rgba(0, 0, 0, 0.5)',
        glow: '0 0 0 1px rgba(19, 156, 196, 0.12), 0 8px 30px -8px rgba(19, 156, 196, 0.18)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-12px) translateX(3px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 0.9s ease forwards',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
