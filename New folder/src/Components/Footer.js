// Footer.js
import React from "react";
import Buttons from "./Buttons";
import MailIcon, {
  LinkedIn,
  Twitter,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div
      className="container-fluid p-5"
      style={{ backgroundColor: "#9748ff", color: "white" }}>
      <div className="row">
        <div className="col">
            <h2>Have a query?</h2>
            <h1>Contact Us</h1>
            <a href="/contactus" style={{color: "white"}}>
              <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: "#47dd9c", width: "50px", height: "50px", borderRadius: "50%"}}>
                <EmailIcon />
              </div>
            </a>
        </div>

        <div className="col">
          <ul style={{ listStyleType: "none", fontSize: "25px"}}>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>
        <div className="col">
          <ul style={{ listStyleType: "none", fontSize: "20px" }}>
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
