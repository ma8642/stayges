/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: "#f8f7f3",
        },
        // staygesOrange: {
        //   100: "e99148",
        // },
        // staygesPurple: {
        //   100: "8775ee",
        // },
      },
      textColor: {
        staygesOrange: "#e99148",
        staygesPurple: "#8775ee",
      },
    },
    fontFamily: {
      homeTitle: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
