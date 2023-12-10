import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // https://res.cloudinary.com/christo/image/upload/v1692212985/bg_miwuvn.svg
      // https://res.cloudinary.com/christo/image/upload/v1692213143/CASBytes/bg2_qxciei.svg
      backgroundImage: {
        "header-1": "url('/bg1.svg')",
        "header-2": "url('/bg2.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
