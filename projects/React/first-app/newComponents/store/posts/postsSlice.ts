import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./actPosts/actPosts";

type TPost = {
  title: string;
  body: string;
};

type TLoading = "idle" | "pending" | "failed" | "fulfiled";

interface IInitialState {
  posts: TPost[];
  loading: TLoading;
  error: string | null;
}

const initialState: IInitialState = {
  posts: [],
  loading: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = "fulfiled";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error as string;
      });
  },
});

export default postsSlice.reducer;
