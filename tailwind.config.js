/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        dark: "#0a192f",  // can use bg-dark
        brand: {
          300: "#64ffda",
          400: "#48e9c7",
          500: "#3b82f6",
          600: "#1f6f5c",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

