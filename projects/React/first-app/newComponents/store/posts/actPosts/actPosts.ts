import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/get",
  async (__, { rejectWithValue }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
