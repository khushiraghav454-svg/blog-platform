import { useEffect, useState } from "react";
import { getPosts } from "../services/postService";
import PostCard from "../components/PostCard";

const Home = () => {
  // State to store all posts
  const [posts, setPosts] = useState([]);

  // Fetch posts from the server when component loads
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await getPosts(); // Call service to get posts
        setPosts(response.data); // Save posts in state
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="container">
      <h2>All Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default Home;