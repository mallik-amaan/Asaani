import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-heading">Asaani</div>
      <ul className="navbar-s">
        <li className="nav-items">
          <a href="#">Home</a>
        </li>
        <li className="nav-items">
          <a href="#">About</a>
        </li>
        <li className="nav-items">
          <a href="#">Services</a>
        </li>
        <li className="nav-items">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
