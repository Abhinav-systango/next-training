import { productInterface } from "@/app/_utils/interface";
import { createSlice } from "@reduxjs/toolkit";

interface cartStateInterface {
  cart: productInterface[];
  qty: any;
  loading: boolean;
  error: string;
}

// Define the initial state using that type
const initialState: cartStateInterface = {
  cart: [],
  qty: {},
  loading: false,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddProductToCart: (state, action) => {
      const { id } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      if (product) {
        state.qty = { ...state.qty, [id]: state.qty[id] + 1 };
        return;
      }
      state.cart.push(action.payload);
      state.qty = { ...state.qty, [id]: 1 };
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);

      let temp = { ...state.qty };
      delete temp[id];
      state.qty = temp;
    },

    QtyInc: (state, action) => {
      const { id } = action.payload;
      state.qty = { ...state.qty, [id]: state.qty[id] + 1 };
    },

    QtyRemove: (state, action) => {
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
