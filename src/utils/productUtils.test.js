import productUtils from './productUtils';

describe('Product Utils', () => {

	it('should return total products', () => {
		const mockedProducts = [
			{
				quantity: 1
			},
			{
				quantity: 1
			}
		];

		const total = productUtils.getTotalProducts(mockedProducts);
		expect(total).toBe(2);
	});

});
