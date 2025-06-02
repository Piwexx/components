/// <reference types="vitest" />
import path from 'node:path'

import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './test/setup',
      css: true,
      coverage: {
        include: ['src'],
        exclude: ['**/*.stories.tsx'],
      },
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
  })
)
