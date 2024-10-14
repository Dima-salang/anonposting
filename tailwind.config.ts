import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dracula: {
          background: '#282a36',
          foreground: '#f8f8f2',
          selection: '#44475a',
          comment: '#6272a4',
          purple: '#bd93f9',
          cyan: '#8be9fd',
          green: '#50fa7b',
          red: '#ff5555',
          orange: '#ffb86c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
