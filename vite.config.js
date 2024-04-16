import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'// add yesterday
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactPages from 'vite-plugin-react-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vue(),reactRefresh(),reactPages()],
  server: {
    port:3000
  }
})
