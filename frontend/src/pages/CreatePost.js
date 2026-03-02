import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const createPost = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("❌ You must be logged in to create a post!");
      return;
    }

    axios
      .post(
        "http://localhost:5000/api/posts",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } } // <-- critical
      )
      .then((res) => {
        setMessage("✅ Post created successfully!");
        setTitle("");
        setContent("");
      })
      .catch((err) => {
        console.error(err.response || err);
        if (err.response && err.response.status === 401) {
          setMessage("❌ Unauthorized: please log in again.");
        } else {
          setMessage("❌ Failed to create post. Check backend.");
        }
      });
  };

  return (
    <div className="form">
      <h2>Create Post</h2>
      {message && <p>{message}</p>}

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={createPost}>Create Post</button>
    </div>
  );
};

export default CreatePost;