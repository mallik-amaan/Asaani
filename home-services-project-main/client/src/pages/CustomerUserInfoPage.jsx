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
  return (
    <>
      <Navbar />
      <Title title="User Information" />
      <div className="h-[100%] flex justify-between px-[15vw] pt-[5vh] pb-[33vh] bg-[#f0f0f0]">
        <SideNavbar />
        <Card title="Profile Detail" style={{ width: 600, height: 900 }}>
          <p>Full Name: fullName</p>
          <p>Phone Number: phoneNumber</p>
          <p>Email: email</p>
        </Card>
      </div>
      <Footer />
    </>
  );
}

export default CustomerUserInfoPage;
