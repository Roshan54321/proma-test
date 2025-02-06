/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        muted: "#f4f4f5",
        border: "#e4e4e7",
        foreground: "#09090b",
        darkslategray: "#3d3d3d",
        "muted-foreground": "#71717a",
        "secondary-foreground": "#18181b",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "sm-9": "13.9px",
      "sm-6": "13.6px",
      "sm-8": "13.8px",
      "sm-7": "13.7px",
      "sm-5": "13.5px",
      "xs-4": "11.4px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};