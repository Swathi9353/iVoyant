import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Header from "./Components/Header";
import FormBuilder from "./Components/FormBuilder";



function App() {
  return (
    <div className="App">
      <Router>  
        <Header />
        <Routes>
          <Route path="/" element={<FormBuilder />} />
        </Routes>
      </Router>
    </div>

    
  );
}

export default App;
