import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.id}</p>
    </div>
  );
};

export default Post;
