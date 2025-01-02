import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Main_Blue: "#1B7BE8",
        Dark_Blue: "#0E4E97",
        Sky_Blue: "#5DA9FF",
        Pale_Blue_1: "#AAD2FF",
        Pale_Blue_2: "#EAF4FF",
        Blue_Grey: "#E3E8F5",
        Yellow: "#FFEFB1",
        Red: "#DF4646",
        Grey: {
          50: "#F9FAFB",
          100: "#F2F4F6",
          200: "#E5E8EB",
          300: "#D1D6DB",
          400: "#B0B8C1",
          500: "#8B95A1",
          600: "#6B7684",
          700: "#4E5968",
          800: "#333D4B",
          900: "#191F28",
        },
      },
      fontFamily: {
        suite: ["SUITE", "sans-serif"],
        suit: ["SUIT", "sans-serif"],
      },
      screens: {
        pc: { min: "768px" },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".Headline_1": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.002rem",
        },
        ".Headline_2": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.75rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00175rem",
        },
        ".Headline_3": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.0015rem",
        },
        ".Headline_4": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "135%",
          letterSpacing: "-0.0015rem",
        },
        ".Headline_5": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.00125rem",
        },
        ".Subhead_1_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "135%",
          letterSpacing: "-0.00125rem",
        },
        ".Subhead_2_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00113rem",
        },
        ".Subhead_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "135%",
          letterSpacing: "-0.00113rem",
        },
        ".Body_1_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "140%",
          letterSpacing: "-0.001rem",
        },
        ".Body_1_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.001rem",
        },
        ".Body_2_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".Body_2_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".Body_2_reg": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".Caption_bold": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00075rem",
        },
        ".Caption_med": {
          fontFamily: theme("fontFamily.suit"),
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "135%",
          letterSpacing: "-0.00075rem",
        },

        ".no-scrollbar": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "&::-webkit-scrollbar-track": {
            display: "none",
          },
          "&::-webkit-scrollbar-thumb": {
            display: "none",
          },
        },
      });
    }),
  ],
};

export default config;
