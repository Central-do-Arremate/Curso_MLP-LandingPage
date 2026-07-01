import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#161616',
          dark: '#1e1e1e',
          yellow: '#e9d441',
          'yellow-dark': '#d7bc01',
          'yellow-light': '#fff3a1',
          green: '#05b864',
          'green-dark': '#028146',
          mint: '#58ffb1',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      screens: {
        xs: '400px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
