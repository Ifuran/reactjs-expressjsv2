import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
  "categories/fetchAllCategories",
  async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/api/category");
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }
);

const CategorySlice = createSlice({
  name: "categories",
  initialState: { categories: [], error: null, status: "idle" },
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.categories = [];
      state.status = "failde";
      state.error = action.error.message;
    });
  },
});

export default CategorySlice.reducer;
