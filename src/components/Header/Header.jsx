import { useCallback, useState } from 'react';
import Cart from '../Cart';
import './Header.css';
import { productUtils } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import { Link } from 'react-router-dom';

function Header() {
	const [showCart, setShowCart] = useState(false);
	const dispatch = useDispatch();
	const cart = useSelector((context) => context.cart);
	const products = cart;

	const toggleCart = useCallback((show) => {
		setShowCart(show);
	}, []);

	const handleRemoveFromCart = useCallback((product) => {
		dispatch(cartActions.remove(product));
	}, [dispatch]);

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
					<Link to="/login" className='header-login-button'>Login</Link>
					<button
						className="header-cart-button"
						onClick={() => toggleCart(true)}
						data-testid="header-cart-button"
					>
						Carrinho {productUtils.getTotalProducts(products)}
					</button>
				</div>
			</div>
			<Cart
				show={showCart}
				onHide={() => toggleCart(false)}
				products={products}
				onRemoveProduct={handleRemoveFromCart}
			/>
		</>
	);
}

export default Header;
