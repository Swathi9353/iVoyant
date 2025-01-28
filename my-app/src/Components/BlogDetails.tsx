
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/blog"); // Navigate back to blogs
  };

  return (
    <div>
      <h1>Blog Details</h1>
      <p>You are viewing details for Blog ID: {id}</p>
      <button onClick={handleBack}>Back to Blogs</button>
    </div>
  );
};
export default BlogDetails;