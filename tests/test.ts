import { test, expect } from '@playwright/test';

test.describe('Search Page', () => {
  test('should display loading indicator', async ({ page }) => {
    // Intercept network request to simulate loading
    await page.route('**/search/users**', (route) => {
      setTimeout(() => route.continue(), 1000);
    });
    
    await page.goto('/search?q=test');

    // Expect a loading indicator to be visible
    await expect(page.locator('.loader')).toBeVisible();
  });

  test('should display results', async ({ page }) => {
    // Mock the network response to return predefined data
    await page.route('**/search/users**', (route) => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          items: [
            { login: 'user1', avatar_url: 'https://example.com/avatar1.png', type: 'User' },
            { login: 'user2', avatar_url: 'https://example.com/avatar2.png', type: 'User' },
            { login: 'user3', avatar_url: 'https://example.com/avatar3.png', type: 'User' },
          ],
          total_count: 3,
        }),
      });
    });

    await page.goto('/search?q=test');

    // Check if the mock data is rendered correctly
    await expect(page.locator('text=user1')).toBeVisible();
    await expect(page.locator('text=user2')).toBeVisible();
    await expect(page.locator('text=user3')).toBeVisible();
  });

  test('should sort results by login', async ({ page }) => {
    // Mock the network response to return predefined data
    await page.route('**/search/users**', (route) => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          items: [
            { login: 'user1', avatar_url: 'https://example.com/avatar1.png', type: 'User' },
            { login: 'user2', avatar_url: 'https://example.com/avatar2.png', type: 'User' },
            { login: 'user3', avatar_url: 'https://example.com/avatar3.png', type: 'User' },
          ],
          total_count: 3,
        }),
      });
    });

    await page.goto('/search?q=test&page=1');

    // Click on the sort button for "Login"
    await page.click('text=Login');

    // Verify the URL has been updated with the sort query
    await expect(page).toHaveURL(/.*sort=login&order=desc/);
  });

  test('should paginate results', async ({ page }) => {
    // Mock the network response to return predefined data
    await page.route('**/search/users**', (route) => {
      route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({
          items: [
            { login: 'user1', avatar_url: 'https://example.com/avatar1.png', type: 'User' },
            { login: 'user2', avatar_url: 'https://example.com/avatar2.png', type: 'User' },
            { login: 'user3', avatar_url: 'https://example.com/avatar3.png', type: 'User' },
          ],
          total_count: 3,
        }),
      });
    });

    await page.goto('/search?q=test&page=1');

    // Click on the "Next" button to go to the next page
    await page.click('text=Next');

    // Verify the URL has been updated with the page query
    await expect(page).toHaveURL(/.*page=2/);
  });
});
