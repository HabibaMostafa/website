/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#fafafa',
          surface: '#ffffff',
          text: '#1a1a1a',
          'text-secondary': '#4a5568',
          accent: '#8b7eb8',
          'accent-hover': '#6b5e98',
          border: '#e2e8f0', // added for border-border
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          text: '#f5f5f5',
          'text-secondary': '#a0aec0',
          accent: '#a599d4',
          'accent-hover': '#c5b9e8',
          border: '#2d3748', // added for border-border
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'sweep-1': 'sweep1 35s linear infinite alternate',
        'sweep-2': 'sweep2 40s linear infinite alternate',
        'sweep-3': 'sweep3 38s linear infinite alternate',
        'sweep-4': 'sweep4 45s linear infinite alternate',
        'sweep-5': 'sweep5 32s linear infinite alternate',
        'ripple-expand': 'rippleExpand 1s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sweep1: {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(30%)' },
        },
        sweep2: {
          '0%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(35%)' },
        },
        sweep3: {
          '0%': { transform: 'translateX(-35%)' },
          '100%': { transform: 'translateX(25%)' },
        },
        sweep4: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(40%)' },
        },
        sweep5: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(20%)' },
        },
        rippleExpand: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(50)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
