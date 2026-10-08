/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAE0FF',
          300: '#7CC4FA',
          400: '#38A3F8',
          500: '#0284C7', // medical cyan/sky
          600: '#0369A1',
          700: '#0F4C81',
          800: '#0E3A64',
          900: '#0A2540', // deep medical blue
          950: '#051626',
        },
        tealAccent: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        emergency: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(10, 37, 64, 0.04)',
        'premium': '0 10px 30px -5px rgba(10, 37, 64, 0.08), 0 4px 6px -2px rgba(10, 37, 64, 0.03)',
        'elevated': '0 20px 40px -10px rgba(10, 37, 64, 0.12)',
      }
    },
  },
  plugins: [],
}
