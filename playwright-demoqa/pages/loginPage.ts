import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  async navigateToLoginPage() {
    await this.navigateTo('/'); // Reuse navigation method from BasePage
    await this.page.click('#nav-link-accountList');
  }

  async login(email: string, password: string) {
    await this.page.fill('#ap_email', email);
    await this.page.click('#continue');
    await this.page.fill('#ap_password', password);
    await this.page.click('#signInSubmit');
  }

  async isLoginSuccessful(): Promise<boolean> {
    return await this.page.isVisible('#nav-link-accountList-nav-line-1');
  }
}
