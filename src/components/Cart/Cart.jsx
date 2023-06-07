import './Cart.css';

function Cart({ show, onHide }) {
	return (
		<div className={`cart-wrapper${show ? ' cart-show' : ''}`}>
			<div className="cart-header">
				<p>Itens no carrinho 0</p>
				<button onClick={onHide}>X</button>
			</div>
			<div className="cart-items">
				<p>Itens...</p>
			</div>
			<div className="cart-footer">
				<p>Total: R$ 0,00</p>
				<button>Finalizar Compra</button>
			</div>
		</div>
	);

}

export default Cart;
