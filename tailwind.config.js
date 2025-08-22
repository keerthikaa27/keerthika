<<<<<<< HEAD
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
        brand: {
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
}
=======
export default {
  theme: {
    extend: {
      colors: {
        dark: "#0a192f",  // now you can use bg-dark
        brand: {
          300: "#64ffda",
          400: "#48e9c7",
          600: "#1f6f5c",
        },
      },
    },
  },
};
>>>>>>> 32af1ee7a962c40a46c5c691461d2135d59e7ad7
