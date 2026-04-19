import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwind import korun

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Plugin list-e add korun
  ],
})