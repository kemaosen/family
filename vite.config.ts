import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: { alias: { '~src': resolve(__dirname, 'src') } },
  base: '/family/',
  build: { sourcemap: true },
  server: { port: 8080, open: false, allowedHosts: true },
})
