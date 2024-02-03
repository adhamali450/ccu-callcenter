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
        "brand-orange": "#112531",
        "seconday-color": "#fe7aa9",
        "accent-color": "#fe9236",
      },
    },
  },
  plugins: [],
};

// #112531
