/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#1e1e1e",
        violet: "#8a38f5",
        customDark: "#2c2c2c",
        lightGray: "#383838",
        btnGray: "#758075",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
