describe('app', () => {
  it('hides and shows list when button clicked', () => {
    cy.visit('/');
    cy.get('[data-testid=list]').should('not.exist');
    cy.get('[data-testid=button]').should('contain', 'Show List');
    cy.get('[data-testid=button]').click();
    cy.get('[data-testid=list]').should('exist');
    cy.get('[data-testid=button]').should('contain', 'Hide List');
    cy.get('[data-testid=button]').click();
    cy.get('[data-testid=list]').should('not.exist');
  });
});
