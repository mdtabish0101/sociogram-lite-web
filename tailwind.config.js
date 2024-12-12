export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

