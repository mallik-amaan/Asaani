import React from 'react';
import "../css/signup.css";

function Signup() {
  return (
    <div className="FormContainer">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form method='POST'>
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="text" name="phone" placeholder="Phone No." />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" name="cnic" placeholder="CNIC" />
          </div>
          <button className="signUpButton" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
