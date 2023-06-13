const getTotalProducts = (products) => {
	let total = 0;
	products.forEach((product) => {
		total = total + product.quantity;
	});
	return total;
};

const productUtils = {
	getTotalProducts
};

export default productUtils;
