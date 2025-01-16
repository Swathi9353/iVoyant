import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Component mounted");
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>Basic Effect Example</h1>
    </div>
  );
};

export default BasicEffect;
