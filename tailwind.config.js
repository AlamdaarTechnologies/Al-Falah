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
          600: '#1d3f66',
          700: '#15304e', // lighter end of the cover's navy gradient
          800: '#102747',
          900: '#081f41', // main text / heading navy from the cover
          950: '#051530',
        },
        teal: {
          500: '#0b7d90',
          600: '#026175', // teal stripe on the cover
          700: '#014d5d',
        },
        mist: '#eef2f7', // pale blue-grey background layer
        gold: {
          100: '#f5efe0',
          300: '#d9c9a0',
          400: '#c4ae7c',
          500: '#b09f74', // muted gold from the tagline and rule
          600: '#97844f',
          700: '#7a6a3c',
        },
        birdnet: {
          50: '#f0fdf4',
          600: '#047857', // Deep forest emerald
          700: '#065f46',
          800: '#064e3b',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Segoe UI', 'Arial', 'sans-serif'],
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
