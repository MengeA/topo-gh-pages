import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/topo-gh-pages/",
  build: {
    outDir: 'dist'
  },
  plugins: [react()],
})
