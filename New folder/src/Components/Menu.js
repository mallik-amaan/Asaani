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
import { Home, Payment, ManageAccounts, Logout, Margin } from "@mui/icons-material";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false, // Only left
  });
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
  const name = "Username";
  const email = "abc@gmail.com";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 310 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <img src={logo} alt="" height={100} width={100} />
      <List>
        {[name, email].map((text, index) => (
          <ListItemButton
            style={{ backgroundColor: "#9748ff", color: "white" }}
            key={text}
            disablePadding
          >
            <ListItemText primary={text} />{" "}
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <div
        className="container-fluid"
        style={{
          height: "150px",
          width: "300px",
          backgroundColor: "#9748ff",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <h5>Wallet Balance</h5>
        <h5>2550$</h5>
        <Buttons btsize="small" value="Deposit" varient="contained"  />
        <Buttons btsize="small" value="Withdraw" varient="contained" />

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
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={menuicon} height={30} width={30} />{" "}
            {/* Add the icon here */}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
