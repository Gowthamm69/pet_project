// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // leave as "/" unless hosting in subfolder
   optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
