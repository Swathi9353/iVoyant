
import React from "react";
import { Link } from "react-router-dom";
const Blog: React.FC = () => {
  const blogs = [
    { id: "1", title: "React Basics", author: "John Doe" },
    { id: "2", title: "Understanding TypeScript", author: "Jane Smith" },
    { id: "3", title: "React Router Essentials", author: "Alice Johnson" },
  ];

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              {blog.title} by {blog.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Blog;