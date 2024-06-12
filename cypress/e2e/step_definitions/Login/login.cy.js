import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';

Given('I navigate the homepage', () => {
    LoginPage.visit();
});

Given('I click the Login nav link', () => {
    LoginPage.clickLoginNavLink();
});

When('the login modal is open', () => {
    LoginPage.verifyModalIsOpen();
});

When('I fill the login form with username {string} and password {string}', (username, password) => {
    LoginPage.fillLoginForm(username, password);
});

When('I click the Login button', () => {
    LoginPage.submitLoginForm();
});

Then('I should see the user logged in as {string}', (username) => {
    cy.wait(1000);
    LoginPage.verifyUserIsLoggedIn(username);
});

Then('I should see the alert login with the message {string}', (expectedMessage) => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal(expectedMessage);
    });
});

When('I click the Logout button', () => {
    LoginPage.logout();
});

Then('I should see the Login nav link', () => {
    LoginPage.elements.loginNavLink().should('be.visible');
});
