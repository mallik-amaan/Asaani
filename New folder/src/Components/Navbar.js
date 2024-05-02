import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-heading">Asaani</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Services</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
