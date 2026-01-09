import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default ({ mode }) => {
  // Only include environment variables that start with VITE_ for security
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  return defineConfig({
    plugins: [react()],
    define: {
      // Only include specific environment variables that are needed
      'import.meta.env': JSON.stringify(env)
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      alias: {
        '@': resolve(__dirname, './src')
        // Remove the explicit Apollo Client alias to let Vite handle it
      },
    },
    build: {
      outDir: 'build',
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-leaflet',
        'leaflet',
        '@apollo/client',
        'graphql',
      ],
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  });
};
