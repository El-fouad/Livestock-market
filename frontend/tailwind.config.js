/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color':'#001733',
        'primary-text-color':'#004499',
        'secondary-color':'#0072FF',
        'background-color':'#fbfbfb',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'yellow-dark': '#FF7A00',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/background_img.jpg')",
        'profile': "url('/assets/images/profile.jpg')",
      },
      fontFamily: {
        
      },
    },
  },
  plugins: [],
}
