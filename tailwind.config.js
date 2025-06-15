/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,mdx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        handrawn: ["Delicious Handrawn", "serif"],
        open: ["Open Sans", "serif"],
      },
      keyframes: {
        loopUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        loopDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        loopUp: "loopUp linear infinite",
        loopDown: "loopDown linear infinite",
      },
    },
  },
  plugins: [],
};
