/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "home-page-hero":
          "url('https://i.pinimg.com/originals/75/3c/6b/753c6b5807b823a1cac9120eb095277c.jpg')",
      },
    },
  },
  plugins: [],
};
