import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InventoryPage from '../../pages/InventoryPage';
import ProductPage from '../../pages/ProductPage';

Given('I am on the inventory page', () => {
    InventoryPage.visit();
});

When('I filter by category {string}', (category) => {
    InventoryPage.selectCategory(category);
});


Then('I should see only items from category {string}', (category) => {
    cy.fixture(`${category.toLowerCase()}.json`).then((data) => {
        const expectedItems = data.items;
        InventoryPage.elements.items().each(item => {
            cy.wrap(item).invoke('text').then(text => {
                expect(expectedItems).to.include(text.trim());
            });
        });
    });
});

When('I select the item {string}', (item) => {
    InventoryPage.selectItem(item);
});

Then('I should be redirected to the description page of {string}', (item) => {
    ProductPage.getProductName().should('contain', item);
});
