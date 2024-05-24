import Navbar from "../components/Navbar.jsx";
import Footer from "../components/HomePage/Footer.jsx";
import SideNavbar from "../components/CustomerPage/SideNavbar.jsx";
import Title from "../components/CustomerPage/Title.jsx";
import { useState, useEffect } from "react";
import { Card, Space } from "antd";

// useEffect(() => {
//   const userData = JSON.parse(localStorage.getItem("user_data"));
//   setUser(userData);
//   setLoading(false);
// }, []);

// const fullName = localStorage.getItem("fullName");
// const email = localStorage.getItem("email");
// const phoneNumber = localStorage.getItem("phoneNumber");

function CustomerUserInfoPage() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    setUser(userData);
    setLoading(false);
  }, []);

  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const phoneNumber = localStorage.getItem("phoneNumber");

  return (
    <>
      <Navbar />
      <Title title="User Information" />
      <div className="h-[100%] flex justify-between px-[15vw] pt-[5vh] pb-[33vh] bg-[#f0f0f0]">
        <SideNavbar />
        <Card title="Profile Detail" style={{ width: 600, height: 400 }}>
          <h3 style={{ fontSize: "20px" }}>
            <b>Full Name:</b> {fullName}
          </h3>
          <h3 style={{ fontSize: "20px" }}>
            <b>Phone Number:</b> {phoneNumber}
          </h3>
          <h3 style={{ fontSize: "20px" }}>
            <b>Email:</b> {email}
          </h3>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default CustomerUserInfoPage;
