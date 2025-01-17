import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchDataEffect: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data)) // Set the array of posts
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>Fetch Data Effect Example</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}>
            <h2>{post.title}</h2>
          
            <p>
              <strong>ID:</strong> {post.id}
            </p>
            <p>
              <strong>User ID:</strong> {post.userId}
            </p>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchDataEffect;
