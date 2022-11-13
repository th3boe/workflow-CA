describe('workflow CA: Logout', () => {
  it('Login WORKS', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(500);
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
  });
  it('Logout WORKS', () => {
    cy.wait(1000);
    cy.get('div.text-end > button').contains('Logout').click();
  });
});
