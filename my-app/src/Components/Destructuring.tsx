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
        posts.map(({ id, userId, title, body }) => (
          <div
            key={id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h2>{title}</h2>
            <p>
              <strong>ID:</strong> {id}
            </p>
            <p>
              <strong>User ID:</strong> {userId}
            </p>
            <p>{body}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchDataEffect;
