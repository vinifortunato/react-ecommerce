import { useCallback, useContext, useMemo } from 'react';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

import './SimpleDisplay.css';
import { AppContext } from '../../context';

function SimpleDisplay({ products }) {
	const context = useContext(AppContext);

	const handleAddToCart = useCallback((product) => {
		context.addToCart(product);
	}, [context]);

	const productsMap = useMemo(() => products.map((product) => {
		return (
			<ProductDisplay key={product.id} product={product} onAddToCart={handleAddToCart} />
		);
	}), [products, handleAddToCart]);

	return (
		<section className="simple-display-wrapper">
			{productsMap}
		</section>
	);
}

export default SimpleDisplay;
