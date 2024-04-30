import { ICartState, productInterface } from "@/app/_utils/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Define the initial state using that type
const initialState: ICartState = {
  cart: [],
  qty: {},
  loading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddProductToCart: (state, action:PayloadAction<productInterface>) => {
      const { id } = action.payload;
      const productInx = state.cart.findIndex((item) => item.id === id);
        if (productInx !== -1) {
        state.qty = { ...state.qty, [id]: state.qty[id] + 1 };
        return;
      }
      state.cart.push(action.payload);
      state.qty = { ...state.qty, [id]: 1 };
    },
    removeProductFromCart: (state, action: PayloadAction<{id: number}>) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);

      let temp = { ...state.qty };
      delete temp[id];
      state.qty = temp;
    },

    QtyInc: (state, action: PayloadAction<{id: number}>) => {
      const { id } = action.payload;
      state.qty = { ...state.qty, [id]: state.qty[id] + 1 };
    },

    QtyRemove: (state, action: PayloadAction<{id: number}>) => {
      const { id } = action.payload;
      if (state.qty[id] > 1) {
        const { id } = action.payload;
        state.qty = { ...state.qty, [id]: state.qty[id] - 1 };
      }
    },
  },
});

export const { AddProductToCart, QtyInc, QtyRemove, removeProductFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
