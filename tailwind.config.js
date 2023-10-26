/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '97': '500px',
        '128': '900px',
        '480': '480px',
        '412': '490px'
      }
    },
    height: {
      '480': '480px',
      '648': '648px',
    }
  },
  plugins: [],
}

