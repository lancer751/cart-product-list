/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "Red": "hsl(14,86%,42%)",
      "Green": "hsl(159, 69%, 38%)",
      "Rose":{
        "50": "hsl(20, 50%, 98%)",
        "100": "hsl(13, 31%, 94%)",
        "300": "hsl(14, 25%, 72%)",
        "400": "hsl(7, 20%, 60%)",
        "500": "hsl(12, 20%, 44%)",
        "900": "hsl(14, 65%, 9%)",
      }
    },
    extend: {
      fontFamily:{
        "red-hat-text": ['Red Hat Text Variable', 'sans-serif'],
      },
      keyframes:{
        "fadeIn-up": {
          '0%': {
            opacity: 0,
            transform: 'tranlateY(80px)'
          },
          '100%':{
            opacity: 1,
            transform: 'tranlateY(0)'
          }
        }
      },
      animation:{
        "fadeIn-up": "fadeIn-up 0.7s ease-in-out both"
      }
      
    },
  },
  plugins: [animations],
}

