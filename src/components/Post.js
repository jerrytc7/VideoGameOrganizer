import React from "react";

function Post({ post, comment }) {
  console.log(comment)
  return (
    <div>
      <img height="100" src={post.image} alt="" />
      <h3>
        {post.username} : {post.caption}
      </h3>
    </div>
  );
}

export default Post;
