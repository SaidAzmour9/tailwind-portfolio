/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors:{
      dark: "#232732",
      black: "#24272C",
      white: "#FFFFFF",
      red: "#D32D20",
      mblu: "#7733FF",
      orange: "#F7A21E"
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'custom': '1px 1px 1px 2px rgba(255,255,255,0.73)',
        'img': '0px 0px 38px 0px rgba(255,255,255,0.81)',
      },
      
    },
  },
  plugins: [],
}

