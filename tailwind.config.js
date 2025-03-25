/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "354px",
        xs: "425px",
        xms: "450px",
        sm: "640px",
        md: "768px",
        mmd: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        cormorantInfant: ["Cormorant Infant", "sans-serif"],
        marcellus: ["Marcellus", "sans-serif"],
        gfsNeohellenic: ["GFS_Neohellenic", "sans-serif"],
        homemadeApple: ["Homemade Apple", "sans-serif"],
        erotique: ["Erotique Trial", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        primary: "#F6F4EC",
        black: {
          200: "#0A0A0A",
          300: "#828282",
          400: "#595959",
          600: "#262626",
          900: "#090909",
        },
        gray: {
          200: "#E9EDEC",
        },
        green: {
          100: "#DBE0DD",
          200: "#B7C1BB",
          300: "#93A199",
          400: "#6F8277",
          500: "#4B6355",
          600: "#3C4F44",
          700: "#545748",
          800: "#1E2822",
          900: "#6D705E",
        },
        brown: {
          500: "#BFB59B",
          600: "#99917C",
          700: "#736D5D",
        },
        red: {
          200: "#D0AF9A",
          300: "#DE967D",
        },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }], //10px
        xs: ["0.75rem", { lineHeight: "1rem" }], //12px
        xsm: ["0.8125rem", { lineHeight: "1.25rem" }], //13px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], //14px
        base: ["1rem", { lineHeight: "1.5rem" }], //16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], //18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], //20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], //24px
        "3xl": ["2rem", { lineHeight: "2.261rem" }], //32px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], //36px
        "5xl": ["3rem", { lineHeight: "1" }], //48px
        "6xl": ["3.75rem", { lineHeight: "1" }], //60px
        "7xl": ["4.5rem", { lineHeight: "1" }], //72px
        "8xl": ["6rem", { lineHeight: "1" }], //96px
        "9xl": ["8rem", { lineHeight: "1" }], //128px
      },
    },
  },
  plugins: [],
};
