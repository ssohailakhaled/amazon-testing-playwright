import { BasePage } from './basePage';

export class HomePage extends BasePage {
  async searchForProduct(product: string) {
    await this.page.fill('#twotabsearchtextbox', product);
    await this.page.click('#nav-search-submit-button');
  }

  async addFirstProductToCart() {
    const firstProduct = this.page.locator('#a-autoid-3-announce')
    await firstProduct.click();
  }

  // Method to go to the shopping cart
  async navigateToCart() {
    await this.page.click('#nav-cart');
  }
}

