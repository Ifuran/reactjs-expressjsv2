import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTags = createAsyncThunk("tag/fetchAllTags", async () => {
  try {
    let { data } = await axios.get("http://localhost:3000/api/tags");
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
});

const TagSlice = createSlice({
  name: "tags",
  initialState: { tags: [], error: null, status: "idle" },
  extraReducers: (builder) => {
    builder.addCase(getAllTags.pending, (state, action) => {
      state.error = null;
      state.status = "loading";
    });
    builder.addCase(getAllTags.fulfilled, (state, action) => {
      state.tags = action.payload;
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(getAllTags.rejected, (state, action) => {
      state.tags = [];
      state.status = "failde";
      state.error = action.error.message;
    });
  },
});

export default TagSlice.reducer;
