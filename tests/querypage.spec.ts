import { test, expect } from '@playwright/test';

test.describe('Query Page', () => {
  test('should display loading indicator', async ({ page }) => {
    await page.goto('/search?q=test');

    // Expect a loading indicator to be visible
    await expect(page.locator('.loader')).toBeVisible();
  });

  test('should display results', async ({ page }) => {
    await page.goto('/search?q=test&page=1');

    // Expect results to be displayed
    await expect(page.locator('text=user1')).toBeVisible();
    await expect(page.locator('text=user2')).toBeVisible();
    await expect(page.locator('text=user3')).toBeVisible();
  });

  test('should sort results by login', async ({ page }) => {
    await page.goto('/search?q=test&page=1');

    // Click on the sort button for "Login"
    await page.click('text=Login');

    // Verify the URL has been updated with the sort query
    await expect(page).toHaveURL(/.*sort=login&order=desc/);
  });

  test('should paginate results', async ({ page }) => {
    await page.goto('/search?q=test&page=1');

    // Click on the "Next" button to go to the next page
    await page.click('text=Next');

    // Verify the URL has been updated with the page query
    await expect(page).toHaveURL(/.*page=2/);
  });
});
