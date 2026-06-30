import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Forces the frontend to run consistently on port 3000
    open: true,  // Automatically opens the browser window on launch
  },
});