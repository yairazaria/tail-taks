module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill,minmax(30%,1fr))',
        'auto-fill-sm': 'repeat(auto-fill,minmax(100%%,1fr))',
      
      },
      screens: {
        'sm': '640px',
      }
    }
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
