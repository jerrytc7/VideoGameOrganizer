import React, { useState } from "react";

function Upload() {
  const [formData, setFormData] = useState({
    image: "",
    caption: "",
  });

  const updateForm = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const uploadPost = (e) => {
    e.preventDefault()
    if(!localStorage.getItem("username")){
      alert("Hey, you forgot to login!")
      return
    }
    fetch("/posts",{
      method: "POST",
      body: JSON.stringify({
        ...formData,
        username: localStorage.getItem("username")
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(() => {
      window.location.replace("/")
    })
  }

  return (
    <div>
      <h1>Upload New Posts Here!</h1>
      <form onSubmit= {uploadPost}>
        <div>
          <label htmlFor="image">Image:</label>
          <input value={formData.image} onChange={updateForm} id="image" />
        </div>
        <div>
          <label htmlFor="caption">Caption:</label>
          <input value={formData.caption} onChange={updateForm} id="caption" />
        </div>
        <button>Upload</button>
      </form>
    </div>
  );
}

export default Upload;
