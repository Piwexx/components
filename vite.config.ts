/// <reference types="vite/client" />
import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync(['src/components/**/index.tsx', 'src/main.ts']).map((file) => {
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          const entryName = path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          )
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          const entryUrl = fileURLToPath(new URL(file, import.meta.url))
          return [entryName, entryUrl]
        })
      ),
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({
      outDir: 'dist',
      exclude: ['**/*.stories.tsx', 'src/stories/', 'test/', '**/*.test.tsx', '**/*.test.ts'],
      tsconfigPath: 'tsconfig.app.json',
    }),
  ],
})
