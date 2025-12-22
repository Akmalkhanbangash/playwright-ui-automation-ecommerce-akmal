const { test, expect } = require('@playwright/test');

test('Open Playwright website and check title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
