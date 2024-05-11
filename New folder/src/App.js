import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import LandingPage from "./Screens/LandingPage";
import Dashboard from "./Screens/Dashboard";
import Footer from "./Components/Footer";
import PaymentBilling from "./Screens/Payment&Billing";
import Menu from "./Components/Menu";
import "./App.css";
import "./fonts/XB Tabriz.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false); // State for Menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Dashboard /> {/* Assuming Dashboard renders the main content */}
        </>
      ),
    },
    {
      path: "/payment-billing",
      element: <PaymentBilling />,
    },
  ]);

  return (
    <>
      <div className="app">
        <Navbar />    
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
