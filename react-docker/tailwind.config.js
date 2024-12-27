/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Assuming your components are in src/
    "./index.html",               // Include index.html if using Vite
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
