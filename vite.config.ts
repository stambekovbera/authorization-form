import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    base: '/authorization-form/',
    plugins: [react()],
    server: {
      port: 8080,
      open: true,
    },
    resolve: {
      alias: [
        { find: 'app', replacement: path.resolve(__dirname, 'src', 'app') },
        {
          find: 'shared',
          replacement: path.resolve(__dirname, 'src', 'shared'),
        },
        {
          find: 'entities',
          replacement: path.resolve(__dirname, 'src', 'entities'),
        },
        { find: 'pages', replacement: path.resolve(__dirname, 'src', 'pages') },
        {
          find: 'features',
          replacement: path.resolve(__dirname, 'src', 'features'),
        },
        {
          find: 'widgets',
          replacement: path.resolve(__dirname, 'src', 'widgets'),
        },
      ],
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName: isDev
          ? '[path][name]__[local]--[hash:base64:8]'
          : '[hash:base64:8]',
      },
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['import'],
        },
      },
    },
  };
});
