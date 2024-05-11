import React from "react";
import "../App.css";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Menu />
      {/*<div className="navbar-heading">Asaani</div>*/}
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
