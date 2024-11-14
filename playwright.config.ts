import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests/e2e', 
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0, 
  workers: process.env.CI ? 1 : undefined, 
  reporter: 'html', 
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000', 
    trace: 'on-first-retry', 
    actionTimeout: 5000, 
    navigationTimeout: 10000, 
    video: 'on', 
    screenshot: 'on',
  },
  projects: [
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }, 
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] }, 
    },
  ],
  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
