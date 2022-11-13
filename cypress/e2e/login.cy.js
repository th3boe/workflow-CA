describe('workflow CA: Authorized', () => {
  it('Login WORKS', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(700);
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(500);
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('boepizza@noroff.no');
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('Pizza1234');
    cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
    cy.wait(500);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
  });
});

describe('workflow CA: Unauthorized', () => {
  it('Login NOT working', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(500);
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('boepizza@noroff.no');
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('Pizza1234');
    cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });
});
