import React from 'react';
import ParentFormComponent from './ParentFormComponent';
import './App.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  gender: string;
}

const formValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  dateOfBirth: '',
  address: '',
  gender: '',
};

let formValuesRef = { ...formValues };

const handleInputChange = (name: keyof FormValues, value: string) => {
  formValuesRef = {
    ...formValuesRef,
    [name]: value,
  };
};

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  console.log('Form submitted:', formValuesRef);
  alert('Form submitted successfully!');
};

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Company Form</h1>
      <ParentFormComponent 
        formValues={formValuesRef}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default App;
