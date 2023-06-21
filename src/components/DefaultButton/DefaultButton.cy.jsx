import DefaultButton from './DefaultButton';

describe('<DefaultButton />', () => {

  it('should render correctly', () => {
		cy.mount(<DefaultButton />);
		cy.get('[data-testid="default-button"]').should('be.visible');
  });

});
