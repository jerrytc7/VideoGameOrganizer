import React from "react";

function Post({ post }) {
  return (
    <div>
      <img height="100" src={post.image} />
      <h3>
        {post.username} : {post.caption}
      </h3>
    </div>
  );
}

export default Post;
