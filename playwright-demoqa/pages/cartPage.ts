// cartPage.ts
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  async addFirstProductToCart() {
    const firstProduct = this.page.locator('#a-autoid-1-announce')
    await firstProduct.waitFor({ state: 'visible', timeout: 5000 });
    await firstProduct.click({force:true});
  }

  // Method to go to the shopping cart
  async navigateToCart() {
    await this.page.click('#nav-cart');
  }
    // Proceed to checkout
  async proceedToCheckout() {
    await this.page.click('.a-button-input'); // The button to proceed to checkout
  }
}
