import * as React from "react";
import logo from "../logo.svg";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import menuicon from "../menu.svg";
import Buttons from "./Buttons";
import { Home, Payment, ManageAccounts, Logout } from "@mui/icons-material";
const menuItems = [
  { text: "Dashboard", icon: <Home style={{ color: "white" }} /> },
  {
    text: "Payment Methods",
    icon: <Payment style={{ color: "white" }} />,
  },
  {
    text: "Account Settings",
    icon: <ManageAccounts style={{ color: "white" }} />,
  },
  { text: "Ongoing Orders", icon: <Home style={{ color: "white" }} /> },
  { text: "Logout", icon: <Logout style={{ color: "white" }} /> },
];
const Menu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""} bg-success text-white`}>
      <div className="menu-header">
        <div className="user-info">
          <p>Name</p>
          <p>email@gmail.com</p>
          <p>Balance: $2550</p>
        </div>
        <button className="btn btn-dark rounded-circle align-self-top"  onClick={onClose}>X</button>
      </div>
      <div className="menu-items">
        <ul className="my-5">
          <li>Add Money</li>
          <li>Withdraw</li>
  }        <li>Add Payment Method</li>
          <li>Services</li>
          <li>Ongoing Orders</li>
          <li>Order History</li>
          <li>Help Center</li>
          <li>Logout</li>
        </ul>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            style={{ backgroundColor: "#9748ff" }}
            disablePadding
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      </div>
);
}

export default Menu;

