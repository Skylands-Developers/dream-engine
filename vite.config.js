import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    host: 'localhost',
    port: '8080',
    fs: {
      allow: ['..']
    }
  }
});