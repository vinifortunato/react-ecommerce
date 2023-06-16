import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {

	it('should render correctly', () => {
		render(<Card />);
		expect(screen.getByTestId('card')).toBeInTheDocument();
	});

});
