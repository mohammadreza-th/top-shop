/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        incommingL: {
          "0%": { transform: "translatex(-20rem)", opacity: "0" },
          "100%": {},
        },
        incommingR: {
          "0%": { transform: "translateX(10rem)", opacity: "0" },
          "100%": { transform: "rotate(12deg)" },
        },
      },
      animation: {
        incommingL: "incommingL 1s ease-in-out",

        incommingR: "incommingR 1s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {

      ss: "200px",
      // => @media (min-width: 640px) { ... }
      vs: "400px",
      // => @media (min-width: 640px) { ... }
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
    },
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
};
