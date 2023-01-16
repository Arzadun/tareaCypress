/// <reference types="cypress" />

/*describe('Login functionality', () => {
  
  it('User is in required page', () => {
    cy.visit("https://automationexercise.com/");

    cy.url().should('eq', 'https://automationexercise.com/')

  })

  it('User is able to navigate to login page', () => {

    cy.visit("https://automationexercise.com/");

    cy.fixture("home").then((home)=>{
      cy.get(home.loginPageButton).click();
    })

    cy.fixture("login").then((login)=>{
      cy.get(login.loginFormHeader).should("be.visible");
    })
 
  })

  it('User is able to enter his credentials', () => {

    cy.visit("https://automationexercise.com/login");

    cy.loginIntoApplication("sebatest@mailinator.com", "12345")

    cy.fixture("mainUser").then((mainUser)=>{
     cy.get(mainUser.logoutButton).should("be.visible");
    })

    
  })

})
*/
describe('Login functionality negative scenario', () => {

  it('User is in required page', () => {
    cy.visit("https://automationexercise.com/");

    cy.url().should('eq', 'https://automationexercise.com/')

  })

  it('User is able to navigate to login page', () => {

    cy.visit("https://automationexercise.com/");

    cy.fixture("home").then((home)=>{
      cy.get(home.loginPageButton).click();
    })

    cy.fixture("login").then((login)=>{
      cy.get(login.loginFormHeader).should("be.visible");
    })

  })

  it('User is nit able to login into the page', () => {

    cy.visit("https://automationexercise.com/login");

    cy.loginIntoApplication("sebatest@mailinator.com", "1234")
    
    cy.fixture("login").then((login)=>{
    cy.get(login.incorrectCredentialsText).should("have.text" , "Your email or password is incorrect!");
    }) 
  })
})