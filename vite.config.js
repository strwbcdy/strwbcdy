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
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material'],
          'animation-vendor': ['framer-motion'],
          'video-vendor': ['video.js', 'videojs-youtube'],
          'slider-vendor': ['react-slick', 'slick-carousel'],
        },
      },
    },
    // Increase chunk size warning limit to 1000kb
    chunkSizeWarningLimit: 1000,
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
