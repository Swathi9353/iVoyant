import React, { useState, FormEvent } from 'react';
import InputField from './InputField';

interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

const PersonalDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState<PersonalDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Personal details submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="First Name"
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Last Name"
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <InputField
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonalDetailsForm;
