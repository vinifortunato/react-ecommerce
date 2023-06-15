import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart';

const store = configureStore({
	reducer: {
		cart: cartReducer
	}
});

store.subscribe(() => {
	const state = store.getState();
	const cart = JSON.stringify(state.cart);
	localStorage.setItem('cart', cart);
});

export default store;
