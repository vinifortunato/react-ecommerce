import { useCallback, useContext, useState } from 'react';
import Cart from '../Cart';
import './Header.css';
import { AppContext } from '../../context';
import { productUtils } from '../../utils';

function Header() {
	const [showCart, setShowCart] = useState(false);

	const context = useContext(AppContext);

	const toggleCart = useCallback((show) => {
		setShowCart(show);
	}, []);

	const handleRemoveFromCart = useCallback((product) => {
		context.removeFromCart(product);
	}, [context]);

	return (
		<>
			<div className="header-wrapper">
				<div className="header-logo">
					<h1 className="header-logo-text">E-commerce</h1>
				</div>
				<div className="header-search">
					<input className="header-search-input" placeholder="O que você procura hoje?" />
				</div>
				<div className="header-options">
					<button className="header-cart-button" onClick={() => toggleCart(true)}>Carrinho {productUtils.getTotalProducts(context.cart)}</button>
				</div>
			</div>
			<Cart
				show={showCart}
				onHide={() => toggleCart(false)}
				products={context.cart}
				onRemoveProduct={handleRemoveFromCart}
			/>
		</>
	);
}

export default Header;
