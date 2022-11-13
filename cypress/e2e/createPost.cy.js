describe('workflow CA: Create post', () => {
  it('Login WORKS', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    // cy.get('#registerForm > div.modal-footer > button')
    //   .contains('Login')
    //   .click();
    // cy.wait(500);
    // cy.get(
    //   '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    // )
    //   .should('exist')
    //   .type('boepizza@noroff.no');
    // cy.get(
    //   '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    // )
    //   .should('exist')
    //   .type('Pizza1234');
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
  it('Create a new post is WORKING', () => {
    cy.wait(1500);
    cy.get('#footerActions > a.btn').contains('New Post').click();
    cy.wait(500);
    cy.get('#postTitle').should('exist').type('This is an awesome title');
    cy.get('#postTags').should('exist').type('Cool Tag');
    cy.get('#postMedia').type('https://picsum.photos/200');
    cy.get('#postBody').type(
      'The body is where you would write what was on your mind!'
    );
    cy.wait(1000);
    cy.get('button[data-action="submit"]').click({ force: true });

    // to delete this post, the button below has been added after a longer timer run.

    cy.wait(5000);
    cy.get('button[data-action="delete"]:visible').click();
  });
});
