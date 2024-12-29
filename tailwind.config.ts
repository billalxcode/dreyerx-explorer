import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        container: {
          default: "rgba(255, 255, 255, 0.1)",
          hover: "rgba(255, 255, 255, 0.2)",
        },
        effect: {
          cursor: {
            default: "rgba(195, 0, 225, 0.35)",
          }
        },
        icon: {
          default: "rgba(255, 255, 255, 0.5)",
          hover: 'rgba(255, 255, 255, 0.8)',
        },
        border: {
          normal: "rgba(255, 255, 255, 0.1)",

          hover: "rgba(255, 255, 255, 0.2)",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
