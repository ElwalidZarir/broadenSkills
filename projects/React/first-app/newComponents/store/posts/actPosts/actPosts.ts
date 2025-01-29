import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/get",
  async (page: number, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
