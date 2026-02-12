import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  
  // GitHub Pages deployment configuration
  // For repository deployment (https://username.github.io/repository-name/):
  //   Set base to '/repository-name/'
  // For custom domain or user/org site (https://username.github.io/):
  //   Set base to '/'
  base: '/strwbcdy/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,      
    },
  }
})
