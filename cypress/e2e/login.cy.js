describe('workflow CA: Authorized', () => {
  it('Login WORKS', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    // cy.wait(700);
    // cy.get('#registerForm > div.modal-footer > button')
    //   .contains('Login')
    //   .click();
    // cy.wait(500);
    // cy.get(
    //   '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    // ).type('boepizza@noroff.no');
    // cy.get(
    //   '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    // ).type('Pizza1234');
    // cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
    // cy.wait(500);
    // cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
    cy.get('.btn-close:visible').click();
    cy.wait(500);
    //gets the login button in header
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type(`boepizza@noroff.no`);
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(`Pizza1234{enter}`);
    cy.wait(2000);
    cy.url().should('include', 'profile');
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
