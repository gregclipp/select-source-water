import type { Config } from "tailwindcss";

/**
 * Select Source Water — design tokens.
 *
 * Palette is derived from the approved Figma (brand blue CTA, near-navy
 * headlines) and the supplied water artwork (ice blues). Home Depot orange
 * is intentionally NOT a UI color — it appears only inside the official badge.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C1E30", // headlines — deep water navy, softer than pure black
        body: "#3E5568", // primary body text
        muted: "#5B7083", // secondary / captions (≥4.5:1 on white)
        brand: {
          50: "#F2F8FD",
          100: "#E4F0FA",
          200: "#C7E1F5",
          300: "#9CCAEE",
          400: "#5EA6E3",
          500: "#2F82D6",
          600: "#1B6AC4", // primary CTA — from approved Figma button
          700: "#15549C",
          800: "#123F73",
          900: "#0E2C4F",
        },
        ice: {
          50: "#F7FBFE",
          100: "#EDF5FB",
          200: "#DFEDF8",
          300: "#CFE4F4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid display scale — headline lands ~36px on mobile, ~64px on desktop
        display: [
          "clamp(2.375rem, 1.15rem + 4.9vw, 4.375rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-sm": [
          "clamp(1.75rem, 1.2rem + 2.2vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
      },
      boxShadow: {
        // Soft, layered elevation — no harsh drop shadows anywhere
        soft: "0 1px 2px rgba(12, 30, 48, 0.04), 0 8px 24px rgba(12, 30, 48, 0.06)",
        lift: "0 2px 4px rgba(12, 30, 48, 0.06), 0 16px 40px rgba(12, 30, 48, 0.10)",
        cta: "0 1px 2px rgba(21, 84, 156, 0.2), 0 8px 24px rgba(27, 106, 196, 0.28)",
        "cta-hover":
          "0 2px 4px rgba(21, 84, 156, 0.22), 0 14px 36px rgba(27, 106, 196, 0.36)",
      },
      borderRadius: {
        card: "1.25rem",
      },
      maxWidth: {
        content: "72rem", // 1152px — main content container
        prose: "42rem",
      },
      keyframes: {
        "fade-rise": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-rise": "fade-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
