import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../../pages/InventoryPage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

Given('I am on the home page', () => {
  InventoryPage.visit();
});

When('I add the following items to the cart:', (dataTable) => {
  totalPrice = 0; 
  dataTable.hashes().forEach(row => {
    InventoryPage.selectCategory(row.category);
    InventoryPage.selectItem(row.item);
    ProductPage.getProductPrice().then((price) => {
      totalPrice += parseFloat(price); 
    });
    ProductPage.addItemToCart();
    InventoryPage.visit();
  });
});

When('I go to the cart', () => {
  CartPage.goToCart();
});

Then('I should see the total price as {string}', (expectedTotal) => {
  expect(totalPrice.toString()).to.equal(expectedTotal); 
});

When('I place the order with the following details:', (dataTable) => {
  const details = dataTable.hashes()[0];
  CartPage.placeOrder();
  CartPage.fillOrderDetails(details.name, details.country, details.city, details.creditCard, details.month, details.year);
  CartPage.submitOrder();
});

Then('I should see the confirmation message', () => {
  CartPage.confirmOrder();
});

Then('I return to the cart', () => {
  InventoryPage.visit();
  CartPage.goToCart();
});

Then('my cart should be empty', () => {
  CartPage.verifyCartIsEmpty();
});
