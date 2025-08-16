import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly walletButton: Locator;
  readonly depositButton: Locator;
  readonly currencyDropdown: Locator;
  readonly searchCurrencyInput: Locator;
  readonly optionTyped: Locator;
  readonly networkDropdown: Locator;
  readonly selectPolygon: Locator;
  readonly depositFromWalletButton: Locator;
  readonly selectBinanceOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.walletButton = page.locator('//span[text()="Wallet"]]');
    this.depositButton = page.locator('//button[text()="Deposit"]');
    this.currencyDropdown = page.locator('(//span[contains(@class, "dropdown-icon")])[1]');
    this.searchCurrencyInput = page.locator('input[placeholder="Search"]');
    this.optionTyped = page.locator('(//div[contains(@class, "currency-details")])[2]');
    this.networkDropdown = page.locator('//button[@data-testid="chain-toggle"]');
    this.selectPolygon = page.locator('//button[contains(@aria-label, "Select polygon")]');
    this.depositFromWalletButton = page.locator('//button[contains(., "Deposit Directly From Your Wallet")]');
    this.selectBinanceOption = page.locator("//button[@role='option' and contains(@aria-label, 'Select Binance Wallet')]");
  }

  async openWallet() {
    await this.walletButton.click();
  }
  
  async depositMoney() {
    await this.depositButton.click();
  }

  async searchCurrency() {
    const searchInput = this.page.locator('input[placeholder="Search"]');
    await searchInput.fill('USDC');
    await this.optionTyped.click();
  }
  
    async depositFromWallet() {
    await this.depositFromWalletButton.click();
    await this.selectBinanceOption.click();
  }


}
