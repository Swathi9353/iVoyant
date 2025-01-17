import React, { useState, useEffect } from "react";

// Define the structure of the post data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UsingMapApi: React.FC = () => {
  // State to store the fetched post
  const [post, setPost] = useState<Post[]>([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => setPost(data as Post[])) // Set the first post in the state
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  }, []); // Empty dependency array ensures this runs only once on mount

  // Render the fetched post title or a loading message
  return (
    <div>
      <h1>Fetch Data Effect Example</h1>
      {post.map((data) => (
        <p> {data.title}title</p>
      
      ))}                                   
    </div>
  );
};

export default UsingMapApi;
