export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinRing: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinRing: 'spinRing 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
      colors: {
        primary: '#E4C59E',
        secondary: '#803D3B',
        tertiary: '#322C2B',
        accent : '#F0BB78'
      },
    },
    fontFamily: {
      sans: [
        "SF Pro Display",
        "SF Pro Icons",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      sociogram: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
    },
    screens: {
      '2xl': { 'max': '2035px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    }
  },
  plugins: [],
}

