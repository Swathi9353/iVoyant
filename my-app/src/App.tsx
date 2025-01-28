import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import BlogDetails from "./Components/BlogDetails";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import NotFound from "./Components/NotFound";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#f4f4f4" }}>
        <Link to="/" style={{ marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "15px" }}>
          About
        </Link>
        <Link to="/blog" style={{ marginRight: "15px" }}>
          Blogs
        </Link>
        <Link to="/contact" style={{ marginRight: "15px" }}>
          Contact
        </Link>
        <Link to="/services">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
