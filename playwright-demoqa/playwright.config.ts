import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 60000,
  use: {
    baseURL: 'https://www.amazon.com',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
