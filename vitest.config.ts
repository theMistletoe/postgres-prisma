// vitest.config.ts
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: "./vitest.setup.ts",
    coverage: {
      exclude: ['node_modules', 'test', 'dist', '.next','next.config.js','postcss.config.js','tailwind.config.js','vite.config.ts','jest.config.js','babel.config.js','webpack.config.js','rollup.config.js', 'prisma'],
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
    },
  },
})