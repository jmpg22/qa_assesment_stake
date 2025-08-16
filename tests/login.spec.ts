import { LoginPage } from '../pages/PageLogin';
import testData from '../data/testData.json';
import { test, expect } from '@playwright/test';

test('Open stake.com and Login', async ({page}) => {
  const loginPage = new LoginPage(page);
  const { user, password } = testData.ValidUser;

  await loginPage.goto();
  await page.waitForTimeout(10000);
  await loginPage.goto()
  await loginPage.login(user, password);
  });
