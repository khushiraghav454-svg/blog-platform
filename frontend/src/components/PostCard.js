import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <h3>{post.title}</h3>

      <p>
        {post.content.length > 100
          ? post.content.substring(0, 100) + "..."
          : post.content}
      </p>

      <Link to={`/post/${post._id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;