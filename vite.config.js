// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ // Ensure this matches your repository name
  plugins: [react()],
});