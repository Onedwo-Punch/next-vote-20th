import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#1B7BE8",
        "dark-blue": "#0E4E97",
        "sky-blue": "#5DA9FF",
        "pale-blue-1": "#AAD2FF",
        "pale-blue-2": "#EAF4FF",
        "blue-grey": "#E3E8F5",
        yellow: "#FFEFB1",
        red: "#DF4646",
        grey: {
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
        mobile: { max: "768px" },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".headline-1": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.002rem",
        },
        ".headline-2": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.75rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00175rem",
        },
        ".headline-3": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.0015rem",
        },
        ".headline-4": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "135%",
          letterSpacing: "-0.0015rem",
        },
        ".headline-5": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "135%",
          letterSpacing: "-0.00125rem",
        },
        ".subhead-1-bold": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.25rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "135%",
          letterSpacing: "-0.00125rem",
        },
        ".subhead-2-bold": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00113rem",
        },
        ".subhead-med": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "135%",
          letterSpacing: "-0.00113rem",
        },
        ".body-1-bold": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "140%",
          letterSpacing: "-0.001rem",
        },
        ".body-1-med": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "1rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.001rem",
        },
        ".body-2-bold": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".body-2-med": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".body-2-reg": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "140%",
          letterSpacing: "-0.00088rem",
        },
        ".caption-bold": {
          fontFamily: theme("fontFamily.suite"),
          fontSize: "0.75rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "135%",
          letterSpacing: "-0.00075rem",
        },
        ".caption-med": {
          fontFamily: theme("fontFamily.suite"),
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
