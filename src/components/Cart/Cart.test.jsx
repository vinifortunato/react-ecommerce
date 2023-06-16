import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import userEvent from '@testing-library/user-event';

describe('Cart Component', () => {

	const mockedProducts = [
		{
			id: 1,
			title: 'PS5',
			quantity: 1
		},
		{
			id: 2,
			title: 'Xbox',
			quantity: 2
		},
	];

	it('should render correctly', () => {
		render(<Cart />);
		expect(screen.getByTestId('cart')).toBeInTheDocument();
		expect(screen.getByTestId('cart')).not.toHaveClass('cart-show');
	});

	it('should hide correctly', () => {
		render(<Cart show={true} />);
		expect(screen.getByTestId('cart')).toBeInTheDocument();
		expect(screen.getByTestId('cart')).toHaveClass('cart-show');
	});

	it('should render products correctly', () => {
		render(<Cart products={mockedProducts} />);
		expect(screen.getByTestId('cart')).toBeInTheDocument();
		expect(screen.getByTestId('cart-product-1')).toBeInTheDocument();
		expect(screen.getByTestId('cart-product-2')).toBeInTheDocument();
	});

	it('should render remove product correctly', async () => {
		const onRemoveProduct = jest.fn();
		render(<Cart products={mockedProducts} onRemoveProduct={onRemoveProduct} />);
		expect(screen.getByTestId('cart')).toBeInTheDocument();
		await userEvent.click(screen.getByTestId('button-remove-cart-product-2'));
		expect(onRemoveProduct).toBeCalledTimes(1);
		expect(onRemoveProduct).toBeCalledWith(mockedProducts[1]);
	});


});
