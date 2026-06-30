/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        radar: {
          bg: '#0B0B0C',
          surface: '#121214',
          elevated: '#1A1A1E',
          border: '#26262B',
          muted: '#8A8A93',
        },
        accent: {
          primary: '#8B5CF6',
          hover: '#A78BFA',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        book: {
          bg: '#F4EBE1',
          surface: '#EFE6DC',
          text: '#2C2520',
          border: '#D7C9BC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px 2px rgba(139, 92, 246, 0.2)',
      }
    },
  },
  plugins: [],
}