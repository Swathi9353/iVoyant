import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import FormBuilder from "./Components/FormBuilder";
import List from "./Components/List";
// import About from "./About";
// import Contact from "./Contact";

function App() {
  return (

    <Router>
      <Header />
      <List/>
      <FormBuilder />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </Router>
      
  );
}

export default App;
