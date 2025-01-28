// src/components/UserProfile.tsx
import React from "react";
import { useParams } from "react-router-dom";



// Define the type for the userId parameter
interface Params extends Record<string, string | undefined> {
  userId: string;
}

const Userprofile: React.FC = () => {
  const { userId } = useParams<Params>(); // Type the params to include userId

  return <h1>User Profile for ID: {userId}</h1>;
};

export default Userprofile;
