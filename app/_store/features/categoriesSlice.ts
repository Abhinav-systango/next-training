import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface categoryStateInterface {
  categories: [];
  loading: boolean;
  error: string;
}

// Define the initial state using that type
const initialState: categoryStateInterface = {
  categories: [],
  loading: false,
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

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export { fetchAllCategories };
export const categoriesReducer = categoriesSlice.reducer;
