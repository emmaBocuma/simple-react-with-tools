describe('app', () => {
  it('hides and shows list when button clicked', () => {
    cy.visit('/');
    cy.findByTestId('list').should('not.exist');
    cy.findByTestId('button').should('contain', 'Show List');
    cy.findByTestId('button').click();
    cy.findByTestId('list').should('exist');
    cy.findByTestId('button').should('contain', 'Hide List');
    cy.findByTestId('button').click();
    cy.findByTestId('list').should('not.exist');
  });
});
