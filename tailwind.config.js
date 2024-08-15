/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
     fontFamily: {
        "open-sans": '"Open Sans", sans-serif',
        playfair: '"Playfair Display", serif;',
      },
  },

  plugins: [daisyui],
};
