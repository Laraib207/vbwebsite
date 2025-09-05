/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#fffdf8",
          100: "#fbf4e7",
          200: "#f3e7d3",
          300: "#eadcc8",
          400: "#e1c9a9"
        },
        ink: {
          900: "#2b2a28",
          700: "#4e463e",
          500: "#6b645b"
        },
        accent: {
          500: "#e1c59f"
        }
      },
      boxShadow: {
        glass: "0 30px 60px -20px rgba(90,73,49,0.25)"
      }
    }
  },
  plugins: []
};
