import React from "react";

interface Form {
    name: string,
    lastname: string
    email: string,
    phone: number,
    Address: string,
    gender: string
}

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text"  placeholder="Enter your name" id="name" required />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input type="text" placeholder="Enter your lastname" id="lastname" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" required />
              </div>
              <div>
          <label htmlFor="phone">Phone</label>
          <input type="number"placeholder="Enter your phone" id="phone" required/>
              </div>
              <div>
          <label htmlFor="Address">Address</label>
          <input type="text" placeholder="Enter your Address" id="Address" required />
              </div>
              <div>
          <label htmlFor="gender">Gender</label>
          <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
              </div>
      </form>
    </div>
  );
};

export default Form;