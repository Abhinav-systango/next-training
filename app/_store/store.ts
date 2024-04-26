import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { productReducer } from "./features/productsSlice";
import { categoriesReducer } from "./features/categoriesSlice";
import { cartReducer } from "./features/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  products: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistedStore = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
