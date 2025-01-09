import React from 'react';
import './FormComponent.css';

interface FormProps {
  formValues: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: string;
    gender: string;
  };
  onInputChange: (field: keyof FormProps['formValues']) => React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  onSubmit: (event: React.FormEvent) => void;
}

const FormComponent: React.FC<FormProps> = ({ formValues, onInputChange, onSubmit }) => (
  <div className="form-container">
    
    {/* Imaginary tag in the top-right corner */}
    

    <form onSubmit={onSubmit}>
      <label>
        First Name:
        <input type="text" placeholder="Enter First Name"value={formValues.firstName} onChange={onInputChange('firstName')}required />
      </label>
      <label>
        Last Name:
        <input type="text" placeholder='Enter Last Name' value={formValues.lastName} onChange={onInputChange('lastName')}required />
      </label>
      <label>
        Email Address:
        <input type="email" placeholder ='Enter the Email'value={formValues.email} onChange={onInputChange('email')} required/>
      </label>
      <label>
        Phone Number:
        <input type="tel" placeholder='Enter the Phone Number' value={formValues.phoneNumber} onChange={onInputChange('phoneNumber')} required/>
      </label>
      <label>
        Date of Birth:
        <input type="date"placeholder='Enter the Date' value={formValues.dateOfBirth} onChange={onInputChange('dateOfBirth')}required />
      </label>
      <label>
        Address:
        <textarea value={formValues.address} placeholder='Enter the Address'onChange={onInputChange('address')} required></textarea>
      </label>
      <label>
        Gender:
        <select value={formValues.gender} onChange={onInputChange('gender')} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default FormComponent;
