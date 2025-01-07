// cartPage.ts
import { BasePage } from './basePage';

export class CartPage extends BasePage {

    // Proceed to checkout
  async proceedToCheckout() {
    await this.page.click('.a-button-input'); // The button to proceed to checkout
  }
}
