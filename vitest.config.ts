import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.spec.ts', 'src/**/*.spec.ts'],
    exclude: ['node_modules', 'dist'],
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/application'),
      '@config': path.resolve(__dirname, './src/config'),
      '@domain': path.resolve(__dirname, './src/domain'),
      '@infra': path.resolve(__dirname, './src/infraestructure'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@src': path.resolve(__dirname, './src'),
    },
  },
});
