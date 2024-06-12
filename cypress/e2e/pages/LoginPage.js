class LoginPage {
    elements = {
        loginNavLink: () => cy.get('#login2'),
        loginModal: () => cy.get('#logInModal'),
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
        this.elements.loginModal().should('be.visible');
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
        this.elements.userNavLink().should('contain.text', username);
      }
    
      logout() {
        this.elements.logoutButton().click();
      }
}

export default new LoginPage();
