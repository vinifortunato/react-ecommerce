import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		init: (state, action) => {
			return action.payload;
		},
		add: (state, action) => {
			const product = {
				...action.payload,
				quantity: 1
			};
			const targetIndex = state.findIndex((element) => element.id === product.id);
			const exists = targetIndex != -1;
			if (exists) {
				state[targetIndex] = {
					...state[targetIndex],
					quantity: state[targetIndex]['quantity'] + 1
				};
				return state;
			} else {
				return [...state, product];
			}
		},
		remove: (state, action) => {
			const target = action.payload;
			const filtered = state.filter((product) => product.id !== target.id);
			return filtered;
		},
	}
});

export const actions = cartSlice.actions;
export const reducer = cartSlice.reducer;

export default cartSlice;
