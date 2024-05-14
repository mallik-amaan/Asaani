import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    password: '',
    phone_number: '',
    email: '',
    cnic: '',
    address: '',
    user_type: '',
    username: '',
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      username: `${formData.fname}_${formData.lname}`,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post("http://localhost:8081/signup",{formData})
      .then((res) => {
        console.log('Signup successful:', res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="tel" // Use "tel" for phone numbers
          name="phone_number"
          placeholder="Phone Number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="cnic" placeholder="CNIC" value={formData.cnic} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <select name="user_type" value={formData.user_type} onChange={handleChange}>
          <option value="">Select User Type</option>
          <option value="Contractor">Contractor</option>
          <option value="Customer">Customer</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
