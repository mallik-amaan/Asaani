import React from 'react';
import './App.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>My Website</h1>
      </div>
      <ul className="navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>np
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
