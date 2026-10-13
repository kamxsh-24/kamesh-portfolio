/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#111111',
          800: '#161616',
          700: '#222222',
          600: '#2E2E2E',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FFF7C2',
          200: '#FFF1B8', // highlight
          300: '#F5D77A', // light
          400: '#E6C655',
          500: '#D4AF37', // primary metallic gold
          600: '#B8860B', // dark gold
          700: '#996F08',
          800: '#755405',
          900: '#4D3602',
          muted: '#8C7326',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'gold-sm': '0 0 12px rgba(212, 175, 55, 0.15)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 45px rgba(212, 175, 55, 0.35)',
        'gold-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #F5D77A 50%, #D4AF37 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(184, 134, 11, 0.2) 0%, rgba(245, 215, 122, 0.2) 50%, rgba(212, 175, 55, 0.2) 100%)',
        'gold-radial': 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'dark-glass': 'linear-gradient(135deg, rgba(22, 22, 22, 0.7) 0%, rgba(10, 10, 10, 0.85) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
