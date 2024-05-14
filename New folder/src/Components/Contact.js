import React from 'react'
import "../css/signup.css";

export default function Contact() {
  return (
    <div className='FormContainer'>
      <div className="signup-box">
        <h1>Assaani</h1>
        <h2 style={{fontSize: "70px"}}>Contact Us</h2>
        <form className="">
            <div className="form-group row d-flex justify-content-center">
              <input type="text" name="name" placeholder="Name"/>
            </div>
            <div className="form-group row d-flex justify-content-center">
              <input type="email" name="email" placeholder="Email"/>
            </div>
            <div className="form-group row d-flex justify-content-center">
              <textarea type="text" name="message" placeholder="Message"/>
            </div>
            <button className="signUpButton" type="submit">
              Login
            </button>
        </form>
      </div>
    </div>
  )
}
