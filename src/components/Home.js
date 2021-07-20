import React, { useState, useEffect } from "react";
import Post from "./Post.js"

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1> Home Sweet Home </h1>
      {posts.map((post) => (
          <Post post={post}/>
      ))}
    </div>
  );
}

export default Home;
