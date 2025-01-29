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
  page: number;
  hasMore: boolean;
}

const initialState: IInitialState = {
  posts: [],
  loading: "idle",
  error: null,
  page: 1,
  hasMore: true,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    increasePage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = "fulfiled";
        state.posts.push(...action.payload)
        state.hasMore = action.payload.length > 0;        
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error as string;
      });
  },
});

export const { increasePage } = postsSlice.actions;
export default postsSlice.reducer;
