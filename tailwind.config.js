/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  theme: {
    extend: {
      screens: {
        'sm-only': { 'min': '380px' , 'max': '699px' },  // Targets up to 767px
        'md-only': { 'min': '700px' , 'max': '1023px' },  // Targets 768px to 1023px
        'lg-only': { 'min': '1024px' , 'max': '1279px' }, // Targets 1024px to 1279px
      },
    },
  },
};