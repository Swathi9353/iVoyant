import React from 'react';
import ParentFormComponent from './Components/ParentFormComponent';
import './App.css';
import './Components/FormComponent.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Registration Form</h1>
      <ParentFormComponent />
    </div>
  );
};

export default App;
