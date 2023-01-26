/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial"],
        chicle: ["Chicle", "Helvetica", "Arial"],
      },
      colors: {
        text: "#00202C",
        background: "#ECEAED",
      },
    },
  },
  plugins: [],
};
