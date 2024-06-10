import react from '@vitejs/plugin-react-swc'
import webfontDownload from 'vite-plugin-webfont-dl';
import path from 'path'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vite'

 
export default defineConfig({
  plugins: [react(), svgr(), webfontDownload()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  },
})
