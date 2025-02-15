import React from "react";

const Homepage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center",padding: "200px" }}>
        Welcome to Form Builder 
      </h1>
    
          <button style={{ display: "block", margin: "0 auto"  , padding: "10px 20px", borderRadius: "5px", backgroundColor: "#4CAF50", color: "white" }}
        onClick={() => (window.location.href = "/formbuilder")}>

        Get Started 🚀
      </button>
    </div>
  );
};

export default Homepage;
