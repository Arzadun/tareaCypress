/// <reference types="cypress" />

describe('Login functionality', () => {
  

  it('User is in required page', () => {
    cy.visit("https://automationexercise.com/");

    cy.url().should('eq', 'https://automationexercise.com/')

  })

  it('User is able to navigate to login page', () => {

    cy.visit("https://automationexercise.com/");

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('.login-form > h2').should("be.visible");

  })

  it('User is able to enter his credentials', () => {

    cy.visit("https://automationexercise.com/login");

    cy.get('.login-form > form > [type="email"]').type("sebatest@mailinator.com");

    cy.get('.login-form > form > [type="email"]').should("have.value" , "sebatest@mailinator.com")

    cy.get('[type="password"]').type("12345");

    cy.get('[type="password"]').should("have.value" , "12345")

    cy.get('.login-form > form > .btn').click();

    cy.get('.shop-menu > .nav > :nth-child(4) > a').should("have.text" , " Logout");
  })

  
  

})

describe('Login functionality negative scenario', () => {

  it('User is in required page', () => {
    cy.visit("https://automationexercise.com/");

    cy.url().should('eq', 'https://automationexercise.com/')

  })

  it('User is able to navigate to login page', () => {

    cy.visit("https://automationexercise.com/");

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('.login-form > h2').should("be.visible");

  })

  it('User is able to login into the page', () => {

    cy.visit("https://automationexercise.com/login");

    cy.get('.login-form > form > [type="email"]').type("sebatest@mailinator.com");

    cy.get('.login-form > form > [type="email"]').should("have.value" , "sebatest@mailinator.com")

    cy.get('[type="password"]').type("1234");

    cy.get('[type="password"]').should("have.value" , "1234");

    cy.get('.login-form > form > .btn').click();

    cy.get('.login-form > form > p').should("have.text" , "Your email or password is incorrect!");

  })


})