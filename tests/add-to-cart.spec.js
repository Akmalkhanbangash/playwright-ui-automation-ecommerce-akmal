import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('User should add product to cart successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addProductToCart();
  await expect(productsPage.cartBadge).toHaveText('1');

  await productsPage.openCart();
  await cartPage.verifyItemInCart();
});
