import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://applicationbackend-dev-ssms.2.us-1.fl0.io",
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
})
