import React from 'react';

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
  onSubmit: (event: React.FormEvent) => void;
  onInputChange: (name: keyof FormProps['formValues'], value: string) => void;
}

const ParentFormComponent: React.FC<FormProps> = ({ formValues, onSubmit, onInputChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onInputChange(event.target.name as keyof FormProps['formValues'], event.target.value);
  };

  return (
    <div className="form-container">
      <div className="image-tag">
        <img src="https://via.placeholder.com/50" alt="Tag" />
      </div>

      <form onSubmit={onSubmit}>
        <label>
          First Name:
          <input 
            type="text" 
            name="firstName" 
            value={formValues.firstName} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Last Name:
          <input 
            type="text" 
            name="lastName" 
            value={formValues.lastName} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Email Address:
          <input 
            type="email" 
            name="email" 
            value={formValues.email} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Phone Number:
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formValues.phoneNumber} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Date of Birth:
          <input 
            type="date" 
            name="dateOfBirth" 
            value={formValues.dateOfBirth} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Address:
          <textarea 
            name="address" 
            value={formValues.address} 
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Gender:
          <select 
            name="gender" 
            value={formValues.gender} 
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ParentFormComponent;
