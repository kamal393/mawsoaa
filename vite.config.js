import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mawsoaa/', // Ajoute cette ligne avec le nom de ton dépôt
  plugins: [react()],
})