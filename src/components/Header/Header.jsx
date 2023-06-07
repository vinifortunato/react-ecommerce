import { useCallback, useState } from 'react';
import Cart from '../Cart';
import './Header.css';

function Header() {
	const [showCart, setShowCart] = useState(false);

	const toggleCart = useCallback((show) => {
		setShowCart(show);
	}, []);

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
					<button className="header-cart-button" onClick={() => toggleCart(true)}>Carrinho 0</button>
				</div>
			</div>
			<Cart show={showCart} onHide={() => toggleCart(false)} />
		</>
	);
}

export default Header;
