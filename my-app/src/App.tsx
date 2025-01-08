import React from 'react';
import './App.css';
import PersonalDetailsForm from './Components/PersonalDetailsForm';

function App() {
  return (
    <div className="App">
      <h1>Personal Details Form</h1>
      <div className="container">
        <div className="image-container">
          <img src="https://tse4.mm.bing.net/th?id=OIP.8yx2NDFxRGceFqfMkJgNrwAAAA&pid=Api&P=0&h=180" alt="Descriptive text" />
        </div>
        <div className="form-container">
          <PersonalDetailsForm />
        </div>
      </div>
    </div>
  );
}
export default App;
