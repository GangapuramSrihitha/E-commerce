/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/global.css";`
      }
    }
  }
};