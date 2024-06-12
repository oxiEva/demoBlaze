class SignUpPage {
    elements = {
        signUpNavLink: () => cy.get('#signin2'),
        signInModal: () => cy.get('#signInModal'),
        usernameInput: () => cy.get('#sign-username'),
        passwordInput: () => cy.get('#sign-password'),
    }

    visit() {
        cy.visit('/index.html');
    }

    clickSignUpNavLink() {
        this.elements.signUpNavLink().click();
    }

    verifyModalIsOpen() {
        this.elements.signInModal().should('be.visible');
    }

    typeUsername(username) {
        username && this.elements.usernameInput().type(username);
        return this;
    }

    typePassword(password) {
        password && this.elements.passwordInput().type(password);
        return this;
    }

    fillSignUpForm(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
    }

    submitSignUpForm() {
        cy.get('button').contains('Sign up').click();
    }
}

export default new SignUpPage();
