import { useParams } from "react-router-dom";

const SinglePost=()=>{
  const {id}=useParams();
  return <h2>Post {id}</h2>;
};

export default SinglePost;