import React from "react";
function LandingPage() {
  return (
    <>
      <>
        <>
          <div className="centered-text">
            <h1>ہر مشکل کام اب ہوگا آسان</h1>
          </div>
        </>
        <div className="centered-text2">
          <h1>آسانی</h1>
        </div>
      </>
      <div className="auth-buttons">
        <a href="/login">
          <button className="login-btn">Login</button>
        </a>
        <a href="/signup">
          <button className="signup-btn">Signup</button>
        </a>
      </div>
    </>
  );
}

export default LandingPage;
