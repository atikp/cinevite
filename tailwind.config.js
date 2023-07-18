export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "other":{'min': '340px', 'max': '1242px'}        
      },
      colors: {
        "darkbg": '#1E293B',
        "blue":{
          850: '#14b8a6'
        }      
      },
      translate:{
        'over':'200%'
      },
      keyframes: {
        slideInRight: {
          '0%': {'transform': 'translateX(9999)' },
          '100%': {'transform': 'translateX(0)'}
        }
      },
      animation: {
        'slideFromRight': 'slideInRight 0.5s ease-in-out forwards'
      }
    },

  },
  plugins: [],
}