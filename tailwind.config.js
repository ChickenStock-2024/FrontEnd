/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow1: "#FFD700",
        yellow2: "#FFE86C",
        yellow3: "#FCF5C7",
      },
    },
  },
  plugins: [],
};
