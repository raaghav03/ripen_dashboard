/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
<<<<<<< HEAD
    extend: {
      colors: {
        sidebarBorder: "#EEEEF0",
        sidebarBG: "#F6F6F6",
        itemGray: "#888888",
        itemHover: "#1F1F23",
      },
      boxShadow: {
        "hover-inset": "0px -2px 4px 0px rgba(109, 109, 109, 0.15) inset",
      },
      borderColor: {
        "hover-gray-300": "#ECECEC",
      },
    },
=======
    extend: { colors: { sidebar: "#EEEEF0" } },
>>>>>>> 399399c (initial commit)
  },
  plugins: [],
};
