import ProductDisplay from '../ProductDisplay/ProductDisplay';

import './SimpleDisplay.css';

function SimpleDisplay({ products }) {

	const productsMap = products.map((product) => {
		return (
			<ProductDisplay key={product.id} product={product} />
		);
	});

	return (
		<section className="simple-display-wrapper">
			{productsMap}
		</section>
	);
}

export default SimpleDisplay;
