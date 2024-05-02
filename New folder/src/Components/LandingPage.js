import React from "react";
import ServicesCards from "./ServicesCards";
import Testimonials from "./Testimonials";
function LandingPage() {
  return (
    <div className="Landing">
      <div className="container-fluid custom-container">
        <div className="row" style={{justifyItems:"space-between"}}>
          {/* Slogan */}
          <div className="col-md centered-text1">
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
      <div
        className="container"
        style={{ backgroundColor: "white", height: "0%" }}
      >
        <h2 className="text-center">Who are we?</h2>
        <div className="row">
          <div className="col-6">
            <p>
              Asaani is a beautiful platform that connects you with the best
              professionals in your area. They provide you with the best
              services at the best prices. They have a team of professionals who
              are experts in their fields. They provide services like plumbing,
              electrician, carpenter, painter, and many more.
            </p>
          </div>
          <div className="col-6">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg"
              alt=""
              height="80%"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Contact Us</h2>
      </div>
    </div>
  );
}

export default LandingPage;
