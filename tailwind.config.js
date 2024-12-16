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
        primary: '#FFFEFE',
        secondary: '#3C6E71',
        tertiary: '#353535'
      },
    },
    fontFamily : {
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
    
    
    
  },
  plugins: [],
}

