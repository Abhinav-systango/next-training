import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productInterface } from "@/app/_utils/interface";

interface productStateInterface {
    products: productInterface[],
    product: productInterface
    loading: boolean,
    error: string | undefined
}

// Define the initial state using that type
const initialState: productStateInterface = {
    products: [],
    product: {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0
      }
    },
    loading: true,
    error: ''
};


const fetchAllProducts = createAsyncThunk("AllProducts", async () => {
  const Data = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  if (Data) { 
    return Data;
  }
});

const fetchProduct = createAsyncThunk("SingleProduct", async (productId: string) => {
  const Data = await fetch(`https://fakestoreapi.com/products/${productId}`).then(
    (res) => res.json()
  );
  if (Data) {
    return Data;
  }
});


export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

  },
  extraReducers(builder) {
      builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload
      }),


      // fetchProducts
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload
        state.loading = false
      }),
      builder.addCase(fetchProduct.pending, (state, action) => {
        state.loading = true
      })
      builder.addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
});

export { fetchAllProducts, fetchProduct }
export const productReducer = productsSlice.reducer;
