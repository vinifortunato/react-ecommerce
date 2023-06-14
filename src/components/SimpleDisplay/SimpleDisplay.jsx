import { useCallback, useMemo } from 'react';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import './SimpleDisplay.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

function SimpleDisplay({ products }) {
	const dispatch = useDispatch();

	const handleAddToCart = useCallback((product) => {
		dispatch(cartActions.add(product));
	}, [dispatch]);

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
