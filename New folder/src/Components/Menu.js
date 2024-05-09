import React from "react";

const Menu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header">
        <div className="user-info">
          <p>Name</p>
          <p>email@gmail.com</p>
          <p>$2550</p>
        </div>
        <button onClick={onClose}>X</button>
      </div>
      <div className="menu-items">
        <ul>
          <li>Add Money</li>
          <li>Withdraw</li>
          <li>Add Payment Method</li>
          <li>Services</li>
          <li>Ongoing Orders</li>
          <li>Order History</li>
          <li>Help Center</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
