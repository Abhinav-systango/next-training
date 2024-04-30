  import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  import { IProductState } from "@/app/_utils/interface";

  const initialState: IProductState = {
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
    productsLoading: true,
    productLoading: true,
    error: '',
  };

  export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch products");
    }
  });
  
  export const fetchProduct = createAsyncThunk("products/fetchProduct", async (productId: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch product details");
    }
  });

  export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        // products
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
          state.products = action.payload;
          state.productsLoading = false
        })
        .addCase(fetchAllProducts.pending, (state, action) => {
          state.productsLoading =true
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
          state.error = action.error.message
          state.productsLoading= false
        })

        // product
        .addCase(fetchProduct.pending, (state) => {
          state.productLoading = true;
          state.error = '';
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
          state.product = action.payload;
          state.productLoading = false;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
          state.productLoading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const productReducer = productsSlice.reducer;