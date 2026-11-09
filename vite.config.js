import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base: './' 让 dist 产物可被任意路径打开/托管，适合毕设答辩演示
export default defineConfig({
  plugins: [vue()],
  base: './'
})
