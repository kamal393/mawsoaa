import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mawsoaa/', // Chemin de base pour GitHub Pages
  plugins: [react()],
})