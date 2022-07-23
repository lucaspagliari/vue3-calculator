/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
Cypress.Commands.add("getTestId", (selector: string) => {
  return cy.get(`[data-test='${selector}']`);
});
Cypress.Commands.add("typeCalculation", (calculation: string) => {
  const sequence = calculation.split("").filter((e) => !!e.trim());
  sequence.forEach((e) => {
    cy.getTestId(e).click();
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      getTestId(selector: string): Chainable<any>;
      typeCalculation(calculation: string): Chainable<any>;
    }
  }
}
