/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using the app directory
  ],
  theme: {
    extend: {

        fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
       

      },

    },
  },
  plugins: [],
};
