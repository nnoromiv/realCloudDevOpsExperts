import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "auBlue": " #0927EB",
        "textPrimary": "#75F0E2",
        "btnText": "#061BB0",
        "auLightBlue": "#DFE2F1"
      },
      screens: {
        'lt': '1025px',
        'tb': '769px',
        'pn': '469px',
        'sm-pn': '376px',
        'xs-pn': '321px'
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
