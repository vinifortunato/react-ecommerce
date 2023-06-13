import './ProductDisplay.css';

function ProductDisplay({ product, onAddToCart }) {

	const { brand, title, price, images } = product;
	const firstImage = images[0];

	return (
		<div className="product-display-wrapper">
			<div className="product-display-container">
				<img
					className="product-display-image"
					alt={title}
					src={firstImage}
				/>
			</div>
			<p>{brand}</p>
			<p>{title}</p>
			<p>{price}</p>
			<button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
		</div>
	);
}

export default ProductDisplay;
