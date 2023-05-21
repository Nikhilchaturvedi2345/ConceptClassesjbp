/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html" ,"./dist/practice01.html", "./dist/practice02.html","./dist/practice03.html","./dist/practice04.html","./dist/freecourses.html","./dist/practice05.html","./dist/courseDescription.html","./dist/signUp.html","./dist/login.html","./dist/courseDetails.html"],
  theme: {
    container:{
      center: true,
      padding: '2rem',
    },
    extend: {
      height: {
        '97': '32rem',
      }
    },
  },
  
  plugins: [],
}

