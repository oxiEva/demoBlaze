class LoginPage {
    elements = {
        loginNavLink: () => cy.get('nav').contains('Log in'),
        loginModal: () => cy.get('#logInModal'),
        loggedInUser: (username) => cy.get('nav').contains(username),
        usernameInput: () => cy.get('#loginusername'),
        passwordInput: () => cy.get('#loginpassword'),
        loginButton: () => cy.get('button').contains('Log in'),
        logoutButton: () => cy.get('#logout2'),
        userNavLink: () => cy.get('#nameofuser')
      }
    
      visit() {
        cy.visit('/index.html');
      }
    
      clickLoginNavLink() {
        this.elements.loginNavLink().click();
      }

      verifyModalIsOpen() {
        cy.get('#logInModal').should('be.visible');
      }
    
      typeUsername(username) {
        this.elements.usernameInput().type(username, { delay: 0 });
      }
    
      typePassword(password) {
        this.elements.passwordInput().type(password, { delay: 0 });
      }
    
      fillLoginForm(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
      }
    
      submitLoginForm() {
        this.elements.loginButton().click();
      }
    
      verifyUserIsLoggedIn(username) {
        this.elements.loggedInUser(username).should('be.visible');
      }

      logout() {
        cy.get('nav').contains('Log out').click();
    }
}

export default new LoginPage();
