describe('Cart flow', () => {

	beforeEach(() => {
		cy.visit('/');
	});

  it('should add product to cart correctly', () => {
		cy.get('[data-testid=\'simple-display\']').should('be.visible');
		cy.get('[data-testid="product-display-1"]').click();
		cy.get('[data-testid="header-cart-button"]').click();
		cy.get('[data-testid="cart"]').should('have.class', 'cart-show');
  });

});
