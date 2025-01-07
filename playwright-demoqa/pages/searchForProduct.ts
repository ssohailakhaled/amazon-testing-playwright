import { BasePage } from './basePage';

export class HomePage extends BasePage {
  async searchForProduct(product: string) {
    await this.page.fill('#twotabsearchtextbox', product);
    await this.page.click('#nav-search-submit-button');
  }
}

