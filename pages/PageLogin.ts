import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly signInButton: Locator;
  readonly errorMessage: Locator;
  readonly search_link: Locator;
  readonly check_captcha: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('button[data-testid="login-link"]');
    this.usernameInput = page.locator('input[name="emailOrName"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.errorMessage = page.locator('text=Invalid credentials');
    this.search_link = page.locator('//span[normalize-space(text())="Search"]')
    this.check_captcha = page.locator('input[type="checkbox"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickLoginMenu() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expected_logued_in() {
    await expect(this.search_link).toBeVisible();
    console.log("Logued in successfuly")
  }
}
