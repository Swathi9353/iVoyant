
import React from "react";
import { useNavigate } from "react-router-dom";
const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Message sent!");
    navigate("/"); // Redirect to Home
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us!</p>
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
};
export default Contact;