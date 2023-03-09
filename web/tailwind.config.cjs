const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontWeight: {
        ...defaultTheme.fontWeight,
        semiBold: "500",
        extraBold: "800",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
        serif: ["Alegreya", "serif"],
      },
      colors: {
        ...defaultTheme.colors, // TODO: Remove when colors are customized
        black: "#353534",
        sand: {
          300: "#ECECE8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
