import React from "react";
import ServicesCards from "./ServicesCards";
import Testimonials from "./Testimonials";
import Intro from "./Intro";
function LandingPage() {
  return (
    <div className="Landing">
      <div className="container-fluid custom-container">
        <div className="row" style={{justifyItems:"space-between"}}>
          {/* Slogan */}
          <div className="col-sm centered-text1">
            <h1>ہر مشکل کام اب ہوگا آسان</h1>
          </div>

          {/* Logo */}
          <div className="col-md centered-text2">
            <h1>آسانی</h1>
          </div>
        </div>

        <div className="auth-buttons">
          <a href="/login">
            <button className="login-btn">Login</button>
          </a>
          <a href="/signup">
            <button className="signup-btn">Signup</button>
          </a>
        </div>
      </div>
      <ServicesCards />
      <Testimonials />
      <Intro />
      <div className="container">
        <h2>Contact Us</h2>
      </div>
    </div>
  );
}

export default LandingPage;
