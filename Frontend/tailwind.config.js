/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3.5rem",
      },
      screens: {
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        panel: "var(--color-panel)",
        panelSoft: "var(--color-panel-soft)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        card: "0 18px 40px rgba(18, 16, 14, 0.06)",
      },
      letterSpacing: {
        eyebrow: "0.24em",
      },
    },
  },
  plugins: [],
};
