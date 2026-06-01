import type { Config } from "tailwindcss";

/**
 * GoGo Logistics — "Operations Desk" design system.
 * Utilitarian, square-cornered, info-dense. Navy + off-white + warm orange.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2A47",
          light: "#1B3D63",
          dark: "#0A1E34",
        },
        offwhite: "#F7F6F2",
        orange: {
          DEFAULT: "#E8772E",
          dark: "#C9621F",
        },
        ink: "#1C2530",
        slatey: "#5A6573",
        mute: "#9AA3AD",
        line: "#E3E5E8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "Arial", "sans-serif"],
      },
      borderRadius: {
        // Deliberately restrained — no big rounded "SaaS" corners.
        DEFAULT: "2px",
        sm: "2px",
        md: "3px",
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(15,42,71,0.04), 0 1px 3px 0 rgba(15,42,71,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
