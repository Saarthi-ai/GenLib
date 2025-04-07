import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure this import is correct
import path from 'path'; 

export default defineConfig({
  root: './demo', // Ensure this matches the folder containing index.html
  plugins: [react()],
  resolve: {
    alias: {
      // '@': '/Users/ekatakumari/Desktop/GenLib', // Ensure proper aliasing
      '@': path.resolve(__dirname, './src'),
    },
  },
});
