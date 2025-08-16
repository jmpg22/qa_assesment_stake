import { Page } from '@playwright/test';

/**
 * Clicks a checkbox (if found) and waits until the page title becomes "Stake".
 * Retries up to `maxRetries` times, with a delay between retries.
 */
export async function clickCheckboxAndWaitForTitle(
  page: Page,
  maxRetries: number = 15,
  retryDelayMs: number = 5000
): Promise<boolean> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const checkbox = page.locator('input[type="checkbox"]');

    if (await checkbox.count() > 0 && await checkbox.isVisible()) {
      try {
        await checkbox.click({ timeout: 3000 });
      } catch (e) {
        console.warn(`Attempt ${attempt}: Failed to click checkbox –`, e);
      }
    } else {
      console.log(`Attempt ${attempt}: Checkbox not found or not visible.`);
    }

    // Check if the title is "Stake"
    const title = await page.title();
    if (title === 'Stake') {
      console.log(`Success: Title became "Stake" on attempt ${attempt}`);
      return true;
    }

    // Wait before retrying
    await page.waitForTimeout(retryDelayMs);
  }

  console.warn(`Failed: Title did not become "Stake" after ${maxRetries} attempts.`);
  return false;
}
