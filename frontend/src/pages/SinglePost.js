import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching post:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found 😔</p>;

  return (
    <div className="container">
      <h2>{post.title || "Untitled Post"}</h2>
      <p>{post.content || "No content yet."}</p>
    </div>
  );
};

export default SinglePost;
