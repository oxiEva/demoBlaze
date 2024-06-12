import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../../pages/SignUpPage';

Given('I visit the home page', () => {
    SignUpPage.visit();
});

Given('I click the Sign up nav link', () => {
    SignUpPage.clickSignUpNavLink();
});

When('I see the modal is open', () => {
    SignUpPage.verifyModalIsOpen();
});

When('I fill the form with username {string} and password {string}', (username, password) => {
    SignUpPage.fillSignUpForm(username, password);
});

When('I click the Sign Up button', () => {
    SignUpPage.submitSignUpForm();
});
  
Then('I should see the alert with the message {string}', (expectedMessage) => {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(expectedMessage);
    });
});

When('I click the OK button', () => {
    // Simulate clicking the OK button on the alert window
    cy.on('window:alert', () => true);
});

// When('I see the modal is closed', () => {
//     SignUpPage.verifyModalIsClosed();
// });
  
Then('I should see the homepage', () => {
    cy.url().should('include', '/index.html');
});
