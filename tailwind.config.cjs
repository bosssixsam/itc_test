module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "/components/**/*.{js,ts,jsx,tsx}",
    // "/modules/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // "/constant/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      // OpenSans: ["Open Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sx: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      // customTablet: "1090px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
};
