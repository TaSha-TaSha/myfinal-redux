import { configureStore } from '@reduxjs/toolkit';
import categories from './categorySlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        categories,
        cart
    }
});