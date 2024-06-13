class ProductPage {
  elements = {
    addToCartButton: () => cy.get('.btn-success'),
    productName: () => cy.get('h2.name'),
    productPrice: () => cy.get('h3.price-container')
  }

  addItemToCart() {
    this.elements.addToCartButton().click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added');
    });
    cy.go('back');
  }

  getProductName() {
    return this.elements.productName().invoke('text');
  }

  getProductPrice() {
    return this.elements.productPrice().invoke('text').then((text) => {
      return text.replace('$', '').split(' ')[0];
    });
  }
}

export default new ProductPage();
