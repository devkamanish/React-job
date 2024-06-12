
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base :"/React-job/",
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://react-job-g4os.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build :{
    rollupOptions: {
      external: ['react-icons']
    }
  }
});


