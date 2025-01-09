import React, { useRef } from 'react';
import InputField from './InputField';


export interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  dob: string;
}

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data: FormData = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        address: formData.get('address') as string,
        dob: formData.get('dob') as string,
      };
      console.log('Form Submitted:', data);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <InputField label="First Name" name="firstName" />
      <InputField label="Last Name" name="lastName" />
      <InputField label="Phone Number" name="phone" />
      <InputField label="Email" name="email" />
      <InputField label="Address" name="address" />
      <InputField label="Date of Birth" name="dob" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
