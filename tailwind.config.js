/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      main: "#1E90FF",
      "light-theme": "#F5F5F5",
      "light-navigation": "#E3F2FD",
      "light-text": "#212121",
      "light-button": "#1E90FF",
      "light-extras": "#B0BEC5",
      "dark-theme": "#121212",
      "dark-header": "#171616",
      "dark-sidebar": "#1f1e1e",
      "dark-text": "#E0E0E0",
      "dark-button": "#1E90FF",
      "dark-extras": "#455A64",
    },
    fontFamily: {
      main: ["Inter", "sans-serif"],
      second: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
