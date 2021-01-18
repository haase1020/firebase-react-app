/// <reference types="cypress" />

describe("My first test", () => {
  it("does not do much", () => {
    cy.visit("/");
    cy.get(".mb-4").should("contain.text", "Log In");
  });
});
