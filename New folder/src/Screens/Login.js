import React, { useState } from "react";
import axios from "axios";
import "../css/signup.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post("http://localhost:8081/login",{formData})
      .then((res) => {
        console.log('Login successful:', res.data);
        window.location.href ="http://localhost:3000/"
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  };

  return (
    <div className="FormContainer">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className="signUpButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
