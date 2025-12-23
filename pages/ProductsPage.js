export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
