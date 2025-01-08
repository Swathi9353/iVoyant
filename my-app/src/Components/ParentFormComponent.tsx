import React from 'react';
import FormComponent from './FormComponent';
import './FormComponent.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  address: string;
  gender: string;
}

class ParentFormComponent extends React.Component {
  formValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    gender: '',
  };

  handleInputChange = (field: keyof FormValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    this.formValues[field] = event.target.value;
    this.forceUpdate();
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', this.formValues);
  };

  render() {
    return (
      <FormComponent
        formValues={this.formValues}
        onInputChange={this.handleInputChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default ParentFormComponent;
