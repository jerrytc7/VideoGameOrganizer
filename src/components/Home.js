import React, { useState, useEffect } from "react";
import Post from "./Post.js"
import Test from "./Test";

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
      {posts.map((post, idx) => (
          <Post key={idx} post={post} />
      ))}
            <Test />
    </div>
  );
}

export default Home;
