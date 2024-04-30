import { ICategoryState, productInterface } from "@/app/_utils/interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface categoryStateInterface {
  categories: [];
  products: productInterface[]
  categoryLoading: boolean;
  productLoading: boolean;
  error: string|undefined;
}

// Define the initial state using that type
const initialState: ICategoryState = {
  categories: [],
  products: [],
  categoryLoading: false,
  productLoading: false,
  error: "",
};

export const fetchAllCategories = createAsyncThunk("categories/fetchAllCategories", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch categories");
  }
});

export const fetchProductWithCategory = createAsyncThunk(
  "categories/fetchProductWithCategory",
  async (category: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (response.ok) {
      console.log("🚀 ~ response:", response)
      return response.json();
    } else {
      throw new Error("Failed to fetch products for the category");
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoryLoading = false;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.categoryLoading = false;
      })
      .addCase(fetchProductWithCategory.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(fetchProductWithCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productLoading = false;
      })
      .addCase(fetchProductWithCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.productLoading = false;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
