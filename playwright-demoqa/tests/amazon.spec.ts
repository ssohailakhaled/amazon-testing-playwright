import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/searchForProduct';
import { CartPage } from '../pages/cartPage';

test('Amazon Login and Search Test', async ({ page }) => {
  // Create instances of the page objects
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  const testData = {
    email: 'Sohaila.khaled1489@gmail.com',
    password: 'x',
    searchQuery: 'mouse',
  };

  // Step 1: Login
  await loginPage.navigateToLoginPage();
  await loginPage.login(testData.email, testData.password);

  // Step 2: Validate Login
  const greeting = page.locator('#nav-link-accountList-nav-line-1');
  await expect(greeting).toContainText('Hello, sohaila');

  // Step 3: Search for a Product
  await homePage.searchForProduct(testData.searchQuery);
  await expect(page.locator('.s-main-slot')).toBeVisible();
  const firstResultTitle = page.locator('.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span').first();
  await expect(firstResultTitle).toContainText(/mouse/i);

  // Step 4: Add to Cart
  await homePage.addFirstProductToCart();

  // Step 5: Navigate to Cart
  await homePage.navigateToCart();

  // Step 6: Proceed to Checkout
  await cartPage.proceedToCheckout();
  
});
