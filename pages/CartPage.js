export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = page.locator('.inventory_item_name');
  }

  async verifyItemInCart() {
    await this.cartItem.waitFor({ state: 'visible' });
  }
}
