import React, { useState } from "react";

function Upload() {
  const [formData, setFormData] = useState({
    image: "",
    caption: "",
    username: "",
  });

  const updateForm = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const uploadPost = (e) => {
    e.preventDefault()
    fetch("/posts",{
      method: "POST",
      body: JSON.stringify(formData),
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
        <div>
          <label htmlFor="username">Username:</label>
          <input value={formData.username} onChange={updateForm} id="username" />
        </div>
        <button>Upload</button>
      </form>
    </div>
  );
}

export default Upload;
