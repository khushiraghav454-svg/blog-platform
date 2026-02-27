import { useState } from "react";
import { createPost } from "../services/postService";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  // State for post title and content
  const [data, setData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  // Handle form submission
  const submit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!data.title || !data.content) {
      alert("Please enter both title and content");
      return;
    }

    try {
      // Debug: show what we are sending
      console.log("Sending post data:", data);

      // Call the createPost service (Axios sends token automatically)
      const response = await createPost(data);

      // Debug: show what backend returns
      console.log("Post created successfully:", response.data);

      alert("Post created successfully!");

      // Go back to home page to see the new post
      navigate("/");
    } catch (err) {
      // Show detailed error
      console.error("Error creating post:", err.response || err);
      alert("Error creating post. Check console for details!");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Create Post</h2>

        {/* Form */}
        <form onSubmit={submit}>
          {/* Post Title */}
          <input
            placeholder="Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />

          {/* Post Content */}
          <textarea
            placeholder="Content"
            rows="6"
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
          />

          {/* Submit Button */}
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;