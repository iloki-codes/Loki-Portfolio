import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      autoprefixer,
    ],
  }
);