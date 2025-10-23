import colors from "tailwindcss/colors";
import daisyui from "daisyui";

export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["inter", "ui-sans-serif", "sans-serif", "system-ui"],
    },
    colors: {
      // paleta suave para produto de emagrecimento (mulheres 30+)
      brand: {
        50: "#fff5f8",
        100: "#fde8ef",
        200: "#f8cbd9",
        300: "#f0a7c0",
        400: "#e883a7",
        500: "#e15f8e",
        600: "#c74e7a",
        700: "#9f3b5f",
        800: "#7b2c4b",
        900: "#5a1f38",
      },
      accent: {
        50: "#f2fff9",
        100: "#e3fef2",
        200: "#c9fce4",
        300: "#99f9c7",
        400: "#66f6a5",
        500: "#34f284",
        600: "#17d06e",
        700: "#0fa15a",
        800: "#0a7b44",
        900: "#065230",
      },
    },
    boxShadow: {
      "soft-lg": "0 10px 30px rgba(16, 24, 40, 0.08)",
    },
  },
  // breakpoints (mobile-first). 'ml' é 400px conforme pedido.
  screens: {
    ml: "400px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: [
    {
      mytheme: {
        primary: "#e15f8e", // brand-500
        secondary: "#34f284", // accent-500
        accent: "#7b2c4b",
        neutral: "#111827",
        "base-100": "#ffffff",
        info: "#60a5fa",
        success: "#34f284",
        warning: "#f59e0b",
        error: "#ef4444",
      },
    },
  ],
};
