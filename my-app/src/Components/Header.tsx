import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Form Builder </h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}
