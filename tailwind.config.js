/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      violet: "#5964e0",
      "light-violet": "#939bf4",
      "very-dark-blue": "#19202d",
      midnight: "#121721",
      white: "#fff",
      "light-grey": "#f4f6f8",
      grey: "#9daec2",
      "dark-grey": "#6e8098",
    },
    fontFamily: {
      kumbh: ["Kumbh Sans"],
    },
  },
  plugins: [],
};
