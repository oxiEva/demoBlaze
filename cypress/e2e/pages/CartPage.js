class CartPage {
  elements = {
    cartButton: () => cy.get('#cartur'),
    cartItems: () => cy.get('.success'),
    placeOrderButton: () => cy.get('.btn-success').contains('Place Order'),
    totalAmount: () => cy.get('#totalp'),
    nameInput: () => cy.get('#name'),
    countryInput: () => cy.get('#country'),
    cityInput: () => cy.get('#city'),
    creditCardInput: () => cy.get('#card'),
    monthInput: () => cy.get('#month'),
    yearInput: () => cy.get('#year'),
    purchaseButton: () => cy.get('button').contains('Purchase'),
    confirmationMessage: () => cy.get('.sweet-alert'),
    confirmationOkButton: () => cy.get('.confirm'),
    closeButton: () => cy.get('button').contains('Close'),
  }

  goToCart() {
    this.elements.cartButton().click();
  }

  getTotalAmount() {
    console.log(totalAmount);
    return this.elements.totalAmount().invoke('text');
  }

  placeOrder() {
    this.elements.placeOrderButton().click();
  }

  fillOrderDetails(name, country, city, creditCard, month, year) {
    if (name) this.elements.nameInput().type(name);
    if (country) this.elements.countryInput().type(country);
    if (city) this.elements.cityInput().type(city);
    if (creditCard) this.elements.creditCardInput().type(creditCard);
    if (month) this.elements.monthInput().type(month);
    if (year) this.elements.yearInput().type(year);
  }

  submitOrder() {
    this.elements.purchaseButton().click();
  }

  confirmOrder() {
    this.elements.confirmationMessage().should('be.visible');
    this.elements.confirmationOkButton().click();
  }

  closeOrder() {
    this.elements.closeButton().click();
  }

  verifyCartIsEmpty() {
    this.elements.cartItems().should('not.exist');
  }
}

export default new CartPage();
