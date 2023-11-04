/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#C29D59",
        tertiary: "#F6F6F6",
        nav: "#393939",
      },
      fontFamily: {
        body: ["Cormorant Garamond"],
      },
    },
  },
  plugins: [],
};
