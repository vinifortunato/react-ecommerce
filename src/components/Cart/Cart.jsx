import { useMemo } from 'react';
import './Cart.css';
import { productUtils } from '../../utils';

function Cart({ products = [], show, onHide, onRemoveProduct }) {

	const productsMap = useMemo(() => products.map((product) => {
		return (
			<div
				key={product.id}
				data-testid={`cart-product-${product.id}`}
			>
				<p>{product.title}</p>
				<p>{`x${product.quantity}`}</p>
				<button
					data-testid={`button-remove-cart-product-${product.id}`}
					onClick={() => onRemoveProduct(product)}
				>
					Remover
				</button>
			</div>
		);
	}), [onRemoveProduct, products]);

	return (
		<div className={`cart-wrapper${show ? ' cart-show' : ''}`} data-testid="cart">
			<div className="cart-header">
				<p>Produtos no carrinho {productUtils.getTotalProducts(products)}</p>
				<button onClick={onHide}>X</button>
			</div>
			<div className="cart-products">
				{productsMap}
			</div>
			<div className="cart-footer">
				<p>Total: R$ 0,00</p>
				<button>Finalizar Compra</button>
			</div>
		</div>
	);

}

export default Cart;
