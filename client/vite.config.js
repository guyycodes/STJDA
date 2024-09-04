import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      "@mui/material/Box",
    ],
 },
  logLevel: 'info',
  server: {
    proxy: {
      '/api': {
           target: 'http://34.135.9.49:3000',
           changeOrigin: true,
           secure: false,
       }
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', '*.jpg', '*.png'], // Include all assets to be cached
      manifest: {
        name: 'STJDA Intake',
        short_name: 'STJDA',
        description: 'Intake forms process for STJDA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/STJDA_Intake/', // start URL for GitHub Pages
        id: '/STJDA_Intake/', //  a consistent ID for the app
        scope: '/STJDA_Intake/', // the scope to restrict what URLs are considered part of the app
        icons: [
          // Include square icons as required by most devices
          {
            src: '/192x192Icon.png', // path to the icon
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any', // Can be used as app icon and shortcut icon
          },
          // More icon sizes can be included here, for example, 512x512
          {
            src: '/512x512Icon.png', // Provide the correct path to the icon
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
        screenshots: [
          // Include screenshots to provide a preview during PWA installation
          {
            src: '/Screenshot1280x720.png', // Path to the desktop screenshot
            sizes: '1280x720',
            type: 'image/png',
            label: 'Desktop Screenshot',
            form_factor: 'wide',
          },
          {
            src: '/Screenshot640x1136.png', // Path to the mobile screenshot these sizes must be exact
            sizes: '640x1136',
            type: 'image/png',
            label: 'Mobile Screenshot',
            form_factor: 'narrow',
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist', // Default output directory
    base: '/STJDA_Intake/', // Base public path set to match the GitHub repository name
  },
});