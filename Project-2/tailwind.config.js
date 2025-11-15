/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Tailwind'in hangi dosyalarda stil arayacağını belirtir
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Flowbite-React'in bileşenlerini dahil etmeyi unutma!
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Flowbite eklentisini ekle
    require('flowbite/plugin'),
  ],
}