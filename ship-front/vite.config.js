import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: "../shipments/static/ship-front",
  build: {
          emptyOutDir: false,
          rollupOptions: {
                  output: {
                          dir: "../shipments/static/ship-front"
                  }
          }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
