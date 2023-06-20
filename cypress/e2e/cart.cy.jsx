describe('Cart flow', () => {

	beforeEach(() => {
		cy.visit('/');
	});

  it('should render the list correctly', () => {
		cy.get('[data-testid=\'list\']').should('be.visible');
  });

});
