/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        muted: "#f4f4f5",
        foreground: "#09090b",
        destructive: "#ef4343",
        border: "#e4e4e7",
        primary: "#18181b",
        "muted-foreground": "#71717a",
        darkslategray: "#3d3d3d",
        "primary-foreground": "#fafafa",
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
      xs: "12px",
      xl: "20px",
      sm: "14px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      "sm-6": "13.6px",
      "sm-5": "13.5px",
      "sm-9": "13.9px",
      "sm-8": "13.8px",
      "sm-1": "13.1px",
      "sm-2": "13.2px",
      smi: "13px",
      "smi-7": "12.7px",
      "sm-3": "13.3px",
      "sm-4": "13.4px",
      "smi-8": "12.8px",
      "smi-5": "12.5px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
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