import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/authSlice';
import { productReducer } from './features/productsSlice';
import { categoriesReducer } from './features/categoriesSlice';
import { cartReducer } from './features/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        categories: categoriesReducer,
        cart: cartReducer
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];