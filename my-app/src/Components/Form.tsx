import React from "react";
import "../App.css"
interface FormData {
  name: string;
  lastname: string;
  phone: number;
  address: string;
  gender: string;
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  console.log("Form data submitted:", data);
  alert("Form submitted successfully!");
};

const FormComponent =() => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name"  placeholder="Enter your name" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input type="text" name="lastname" placeholder="Enter your lastname" id="lastname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" placeholder="Enter your phone" id="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" placeholder="Enter your address" id="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select name="gender" required>
            <option value="">Select a gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;