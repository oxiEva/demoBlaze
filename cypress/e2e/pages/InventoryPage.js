class InventoryPage {
  elements = {
    categories: () => cy.get('.list-group-item'),
    items: () => cy.get('.hrefch')
  }

  visit() {
    cy.visit('/index.html');
  }

  selectCategory(category) {
    this.elements.categories().contains(category).click();
  }

  selectItem(item) {
    this.elements.items().contains(item).click();
  }
}

export default new InventoryPage();
