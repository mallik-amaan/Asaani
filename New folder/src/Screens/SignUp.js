<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useState } from 'react';
import bcrypt from 'bcryptjs'; // Import bcrypt.js library
>>>>>>> Stashed changes
import "../App.css";

function Signup() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    password: '',
    phone: '',
    email: '',
    cnic: ''
  });

  const handleChange = (e) => {
    console.log('Form data:', formData); // Log form data before sending

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hash the password before sending
      const hashedPassword = await bcrypt.hash(formData.password, 10); // 10 is the saltRounds

      // Concatenate fname and lname to form the username
      const username = `${formData.fname}_${formData.lname}`;

      // Create a new formData object with hashed password and username
      const hashedFormData = { ...formData, password: hashedPassword, username };

      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(hashedFormData)
      });
      console.log('Response:', hashedPassword);

      if (response.ok) {
        console.log('Signup successful');
      } else {
        console.error('Signup failed');
        // Display error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="FormContainer">
      <div className="signup-box">
        <h2>Sign Up</h2>
<<<<<<< Updated upstream
        <form method='POST'>
=======
        <form onSubmit={handleSubmit}>
>>>>>>> Stashed changes
          <div className="form-group">
            <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
<<<<<<< Updated upstream
=======
          <div className="form-group">
            <input type="text" name="cnic" placeholder="CNIC" value={formData.cnic} onChange={handleChange} />
          </div>
>>>>>>> Stashed changes
          <button className="signUpButton" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
