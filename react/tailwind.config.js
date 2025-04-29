/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // White
        secondary: "#0d47a1", // Dark blue
        tertiary: "#42a5f5", // Light blue
        "blue-dark": "#1565c0", // Darker blue
        "blue-light": "#bbdefb", // Light blue shade
        "blue-good": "#6CB4EE",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(66, 165, 245, 0.5)", // Blue glow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
