describe('workflow CA: Logout', () => {
  it('Login WORKS', () => {
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
  });
  it('Logout WORKS', () => {
    cy.wait(1000);
    cy.get('div.text-end > button').contains('Logout').click();
  });
});
