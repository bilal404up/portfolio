import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF7",
        ink: "#15171A",
        muted: "#55595F",
        line: "#E4E2DC",
        accent: { DEFAULT: "#1F3FD1", hover: "#1A35B3", soft: "#EEF1FD", light: "#9DB0FF" },
        night: { DEFAULT: "#15171A", muted: "#A9ADB3", line: "#3A3E44" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: { page: "72rem", copy: "38rem" },
      boxShadow: { frame: "0 24px 48px -28px rgba(21, 23, 26, 0.35)" },
    },
  },
  plugins: [],
};

export default config;
