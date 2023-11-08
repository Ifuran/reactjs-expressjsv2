import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "../../Utils/axiosErrorHandler";

export const getAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/api/products");
      return data;
    } catch (error) {
      return axiosErrorHandler(error);
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedCategory: "all",
    selectedTag: [],
    error: null,
    status: "idle",
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedTag: (state, action) => {
      const tag = action.payload;
      if (state.selectedTag.includes(tag)) {
        state.selectedTag = state.selectedTag.filter(
          (selectedTag) => selectedTag !== tag
        );
      } else {
        state.selectedTag.push(tag);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.products = [];
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { setSelectedCategory, setSelectedTag } = ProductSlice.actions;

export default ProductSlice.reducer;
