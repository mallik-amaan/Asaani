// Footer.js
import React from "react";
import Buttons from "./Buttons";
import MailIcon, {
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
} from "@mui/icons-material";
function Footer() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#9748ff", color: "white" }}
    >
      <div className="row">
        <div className="col">
          <h3>Contact Us</h3>
          <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" rows={4} />
            <Buttons value="submit" varient="contained"></Buttons>
          </form>
        </div>
        <div className="col">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Facebook />
              Facebook
            </li>
            <li>
              <Twitter />
              Twitter
            </li>

            <li>
              <Instagram />
              Instagram
            </li>
            <li>
              <LinkedIn />
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
