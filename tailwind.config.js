/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brutal: {
          black: "#0a0a0a",
          white: "#f5f5f5",
        },
        accent: {
          cyan: "#00d9ff",
          lime: "#39ff14",
        },
        glitch: {
          red: "#ff006e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#999999",
        },
        border: {
          DEFAULT: "#333333",
          light: "#1a1a1a",
        },
      },
      fontFamily: {
        heading: ['"Roboto Mono"', "monospace"],
        body: ["Inter", "system-ui", "sans-serif"],
        code: ['"Roboto Mono"', "monospace"],
      },
      spacing: {
        "0.5": "2px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        24: "96px",
        32: "128px",
      },
      letterSpacing: {
        mono: "0.05em",
      },
      animation: {
        "glitch-1": "glitch-1 2s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 3s infinite linear alternate-reverse",
        scanline: "scanline 8s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "grid-scroll": "grid-scroll 20s linear infinite",
      },
      keyframes: {
        "glitch-1": {
          "0%": { clip: "rect(20px, 9999px, 40px, 0)" },
          "20%": { clip: "rect(60px, 9999px, 80px, 0)" },
          "40%": { clip: "rect(10px, 9999px, 30px, 0)" },
          "60%": { clip: "rect(90px, 9999px, 100px, 0)" },
          "80%": { clip: "rect(40px, 9999px, 70px, 0)" },
          "100%": { clip: "rect(0px, 9999px, 20px, 0)" },
        },
        "glitch-2": {
          "0%": { clip: "rect(85px, 9999px, 95px, 0)" },
          "25%": { clip: "rect(30px, 9999px, 55px, 0)" },
          "50%": { clip: "rect(5px, 9999px, 15px, 0)" },
          "75%": { clip: "rect(70px, 9999px, 90px, 0)" },
          "100%": { clip: "rect(15px, 9999px, 45px, 0)" },
        },
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 5px #00d9ff, 0 0 10px #00d9ff" },
          "100%": { boxShadow: "0 0 20px #00d9ff, 0 0 40px #00d9ff" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "grid-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
