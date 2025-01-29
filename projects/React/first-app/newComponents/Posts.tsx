import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getPosts } from "./store/posts/actPosts/actPosts";
import Post from "./Post";
import { increasePage } from "./store/posts/postsSlice";

const Posts = () => {
  const { posts, page, hasMore, loading } = useAppSelector(
    (state) => state.posts
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts(page));
  }, [dispatch, page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      dispatch(increasePage());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  console.log(posts);

  return (
    <div>
      {posts.map((post, key) => {
        return <Post key={key} post={post} />;
      })}
      {loading !== "idle" && <p>Loading more items...</p>}
      {!hasMore && <p>No more items to load.</p>}
    </div>
  );
};

export default Posts;
