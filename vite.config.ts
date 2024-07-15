import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'pathe'
const pathSrc = resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${pathSrc}/assets/scss/style.scss";
        `,
      },
    },
  },
})
