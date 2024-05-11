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
          <li>Add Payment Method</li>
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

//   return (
//     <div>
//       {["left"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>
//             <img src={menuicon} height={30} width={30} />{" "}
//             {/* Add the icon here */}
//           </Button>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
