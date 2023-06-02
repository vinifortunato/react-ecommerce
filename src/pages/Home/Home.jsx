import { Link } from 'react-router-dom';
import SimpleDisplay from '../../components/SimpleDisplay';
import { useEffect, useState } from 'react';

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://dummyjson.com/products')
			.then((response) => response.json())
			.then((data) => {
				const { products } = data;
				setProducts(products);
			});
	}, []);

	return (
		<div>
			<h1>Home Page</h1>
			<SimpleDisplay products={products} />
			<Link to="/login">Login</Link>
		</div>
	);
}

export default Home;
