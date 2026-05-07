import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        primaryHover: "#7C3AED",
        primaryLight: "#8B5CF6",
        primarySoft: "#A78BFA",
        primaryUltraSoft: "#E9D5FF",
        accent: "#D946EF",
        accentHover: "#C026D3",
        accentLight: "#E879F9",
        accentSoft: "#F0ABFC",
        accentUltraSoft: "#F5D0FE",
        ink: "#0F172A",
        slatecopy: "#475569",
        muted: "#94A3B8",
        line: "#E2E8F0",
        lineHover: "#DDD6FE",
        divider: "#F1F5F9",
        mist: "#F8FAFC",
        surfaceAlt: "#F5F3FF",
        surfaceSoft: "#EDE9FE",
        brand: "#6D28D9",
        brandHover: "#7C3AED",
        brandSoft: "#E9D5FF",
        violet: "#8B5CF6",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.06)",
        glow: "0 20px 60px rgba(124, 58, 237, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
