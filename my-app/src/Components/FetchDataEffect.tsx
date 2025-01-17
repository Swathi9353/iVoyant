import React, { useState, useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchDataEffect: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPost(data[0])) // Type the fetched data as an array of Post                                                                         
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>Fetch Data Effect Example</h1>
      {post ? <p>First Post Title: {post.title}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchDataEffect;
