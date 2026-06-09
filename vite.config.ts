import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  envPrefix: ['VITE_', 'API_KEY'],
  server: {
    proxy: {
      '/api': {
        target: 'https://crowded-frontend-assignment.netlify.app',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
      lib: resolve(__dirname, 'src/lib'),
      shared: resolve(__dirname, 'src/shared'),
    },
  },
});
