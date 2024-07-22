/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      palette : {
        primary : { main : 'FF6B6B'}
      },
      softTextColor : {
        primary : { main : '828482'}
      },
      boldTextColor : {
        primary : { main : '333'}
      },
      orangeColor : {
        primary : { main : 'FF6b00'}
      },
      backgroundColor : {
        primary : { main : 'FF7C1D'}
      },
      WhiteColor : {
        primary : { main : 'FFFFFF'}
      }
    },
  },
  plugins: [],
}