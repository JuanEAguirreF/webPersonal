import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        primaryHover: "#1F2937",
        accent: "#14B8A6",
        accentHover: "#0F766E",
        accentSoft: "#CCFBF1",
        ink: "#0F172A",
        slatecopy: "#475569",
        muted: "#94A3B8",
        line: "#E2E8F0",
        divider: "#F1F5F9",
        mist: "#F8FAFC",
        surfaceAlt: "#F1F5F9",
        brand: "#14B8A6",
        brandHover: "#0F766E",
        brandSoft: "#CCFBF1",
        violet: "#0D9488",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.06)",
        glow: "0 20px 60px rgba(20, 184, 166, 0.14)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
