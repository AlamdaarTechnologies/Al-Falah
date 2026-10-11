/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f6fc',
          100: '#e2ecfa',
          200: '#c2d7f6',
          300: '#8fb4ed',
          400: '#568ade',
          500: '#2f68c4',
          600: '#1d4e9e',
          700: '#143875',
          800: '#0f2854',
          900: '#0b1b38', // Deep corporate navy from logo/banner
          950: '#060f20',
        },
        navy: {
          50: '#f0f4f9',
          100: '#dce5f2',
          700: '#193360',
          800: '#112344',
          900: '#0b1b38', // Primary midnight navy
          950: '#060e1d',
        },
        gold: {
          50: '#fdfbf4',
          100: '#faf4df',
          200: '#f5e6b8',
          300: '#eed288',
          400: '#e2ba55',
          500: '#d4a034', // Primary brand gold
          600: '#b88226',
          700: '#946419',
          800: '#754d14',
          900: '#4d310a',
          950: '#2e1c04',
        },
        birdnet: {
          50: '#f0fdf4',
          600: '#047857', // Deep forest emerald
          700: '#065f46',
          800: '#064e3b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
