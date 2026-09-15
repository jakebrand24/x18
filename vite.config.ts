import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://jakebrand24.github.io/x18/
export default defineConfig({
  base: '/x18/',
  plugins: [react(), tailwindcss()],
})
