/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // describe, it, expect などをグローバルで使えるように
    environment: 'jsdom', // Reactコンポーネントのテストには必須
    setupFiles: './vitest.setup.ts', // テスト前に共通セットアップを実行
    coverage: {
      provider: 'v8', // カバレッジ取得
      reporter: ['text', 'html'],
    },
    include: ['**/*.test.{ts,tsx}'], // テスト対象ファイル
    exclude: ['node_modules', '.next', 'dist'],
  },
  resolve: {
    alias: {
      '@': '/app', // app/を@エイリアスで参照できるように
    },
  },
});
