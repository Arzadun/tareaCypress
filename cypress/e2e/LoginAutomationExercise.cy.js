/// <reference types="cypress" />

import HomePage  from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";
import BasePage from "../support/pages/BasePage";

describe('Login functionality', () => {
  

  it('User is in required page', () => {
    cy.visit("https://automationexercise.com/");

    cy.url().should('eq', 'https://automationexercise.com/')

  })

  it('User is able to navigate to login page', () => {

    cy.visit("https://automationexercise.com/");

    HomePage.navigateToLoginPage();

    cy.get('.login-form > h2').should("be.visible");

  })

  it('User is able to enter his credentials', () => {

    cy.visit("https://automationexercise.com/login");

    LoginPage.enterCredentials("sebatest@mailinator.com", "12345")

    cy.get(LoginPage.emailInput).should("have.value" , "sebatest@mailinator.com")

    cy.get(LoginPage.passwordInput).should("have.value" , "12345")

    LoginPage.submitLogin();

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

    HomePage.navigateToLoginPage();

    cy.get('.login-form > h2').should("be.visible");

  })

  it('User is able to login into the page', () => {

    cy.visit("https://automationexercise.com/login");

    LoginPage.enterCredentials("sebatest@mailinator.com", "1234")

    cy.get(LoginPage.emailInput).should("have.value" , "sebatest@mailinator.com")

    cy.get(LoginPage.passwordInput).should("have.value" , "1234")

    LoginPage.submitLogin();

    cy.get('.login-form > form > p').should("have.text" , "Your email or password is incorrect!");

  })
})