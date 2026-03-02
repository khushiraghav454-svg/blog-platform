import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log("Error fetching posts:", err));
  }, []);

  return (
    <div className="container">
      <h2 className="page-title">🌿 All Blog Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available. 😔</p>
      ) : (
        posts.map((post) => (
          <div className="card" key={post._id}>
            <h3>{post.title || "Untitled Post"}</h3>
            <p>{post.content ? post.content.substring(0, 100) + "..." : "No content yet."}</p>
            <Link to={`/post/${post._id}`} className="read-more">
              📖 Read More
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;