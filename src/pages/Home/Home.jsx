import { Link } from 'react-router-dom';
import SimpleDisplay from '../../components/SimpleDisplay';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

function Home() {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const localData = localStorage.getItem('cart');
		if (localData) {
			const parsed = JSON.parse(localData);
			dispatch(cartActions.init(parsed));
		}
	}, [dispatch]);

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
			<Header />
			<SimpleDisplay products={products} />
			<Link to="/login">Login</Link>
		</div>
	);
}

export default Home;
