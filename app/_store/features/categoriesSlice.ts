import { productInterface } from "@/app/_utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface categoryStateInterface {
  categories: [];
  products: productInterface[]
  categoryLoading: boolean;
  productLoading: boolean;
  error: string|undefined;
}

// Define the initial state using that type
const initialState: categoryStateInterface = {
  categories: [],
  products: [],
  categoryLoading: true,
  productLoading: false,
  error: "",
};

const fetchAllCategories = createAsyncThunk("AllCetegories", async () => {
  const Data = await fetch("https://fakestoreapi.com/products/categories").then(
    (res) => res.json()
  );
  if (Data) {
    return Data;
  }
});

const fetchProductWithCategory = createAsyncThunk("fetchProductWithCategory", async (category:string) => {
  const Data = await fetch(`https://fakestoreapi.com/products/category/${category}`).then(
    (res) => res.json()
  );
  if (Data) {
    return Data;
  }
});

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.categoryLoading = false
    });
    builder.addCase(fetchAllCategories.pending, (state, action) => {
      state.categoryLoading = true
    });
    builder.addCase(fetchAllCategories.rejected, (state, action) => {
      state.error = action.error.message;
      state.categoryLoading = false
    });

    builder.addCase(fetchProductWithCategory.fulfilled, (state, action) => {
      state.products = action.payload;
      state.productLoading = false
    });
    builder.addCase(fetchProductWithCategory.pending, (state, action) => {
      state.productLoading = true
    });
    builder.addCase(fetchProductWithCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.productLoading = false
    });

  },
});

export { fetchAllCategories, fetchProductWithCategory };
export const categoriesReducer = categoriesSlice.reducer;
