module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust paths to match your project structure
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      colors: {
        "neon-cyan": "#00FFFF",
        "neon-red": "#FF0040",
        "neon-blue": "#00BFFF",
        "dark-bg-start": "#1a1a1a",
        "dark-bg-end": "#000000",
      },
      boxShadow: {
        "glow-cyan": "0 0 10px #00FFFF, 0 0 20px #00FFFF",
        "glow-red": "0 0 10px #FF0040, 0 0 20px #FF0040",
        "glow-blue": "0 0 10px #00BFFF, 0 0 20px #00BFFF",
      },
      // You might define custom animations here if not in AISteps.css
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px currentColor, 0 0 10px currentColor",
          },
          "50%": { boxShadow: "0 0 15px currentColor, 0 0 30px currentColor" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
