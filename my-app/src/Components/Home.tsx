import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  

  return (
    <div className="auth-container">
      <div className="auth-box">
        <button className="auth-button" onClick={() => navigate("/login")}>
          Login
      
        </button>
        <button
          className="auth-button"
          onClick={() => navigate("/signup")}
          style={{ marginTop: "10px" }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
