/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
    },
    extend: {
      colors: {
        primary: "#b6ff3b",
      },
    },
  },
  plugins: [('@tailwindcss/line-clamp')],

};
