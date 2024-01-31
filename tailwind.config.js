/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        plg: "1124px",
        xl: "1280px",
      },
      colors: {
        "brand-orange": "#E64E36",
      },
    },
  },
  plugins: [],
};
