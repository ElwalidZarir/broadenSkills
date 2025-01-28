import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getPosts } from "./store/posts/actPosts/actPosts";

const Posts = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
