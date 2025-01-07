import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/searchForProduct';
import { CartPage } from '../pages/cartPage';

test('Amazon Login and Search Test', async ({ page }) => {
  // Create instances of the page objects
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);


  // Step 1: Navigate to Amazon and log in
  await loginPage.navigateToLoginPage();
  await loginPage.login('Sohaila.khaled1489@gmail.com', 'Sohayla332000'); // Replace with your credentials

  // Step 2: Validate login success
  await page.waitForSelector('#nav-link-accountList-nav-line-1', { state: 'visible' }); // Wait for the greeting element to appear
  const greeting = await page.textContent('#nav-link-accountList-nav-line-1');
  expect(greeting).toContain('Hello, sohaila'); // Ensure the greeting appears (which confirms login success)


  // Step 3: Search for a product
  const searchQuery = 'mouse';
  await homePage.searchForProduct(searchQuery);

 

  const resultsContainer = page.locator('.s-main-slot') // Container for results
  await expect(resultsContainer).toBeVisible()

  // Find the "" title using the specified class
  const firstResultTitle = page.locator('.a-link-normal.s-line-clamp-2.s-link-style.a-text-normal span').first()
  await expect(firstResultTitle).toContainText(/mouse/i)


  // Step 4: Add the first product to the cart
  await homePage.addFirstProductToCart();

  // Step 5: Navigate to the cart and verify the product is added
  await homePage.navigateToCart();
  
  const cartPage = new CartPage(page);
  // // Step 6: Proceed to checkout
   await cartPage.proceedToCheckout();
  
});
