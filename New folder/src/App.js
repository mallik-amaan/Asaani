import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import LandingPage from "./Screens/LandingPage";
import Dashboard from "./Screens/Dashboard";
import Footer from "./Components/Footer";
import PaymentBilling from "./Screens/Payment&Billing";
import Menu from "./Components/Menu";
import Searchpage from "./Components/Searchpage";
import Contact from "./Components/Contact";
import "./App.css"; 
import "./fonts/XB Tabriz.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderNow from "./Screens/Ordernow";
import OngoingOrdersScreen from "./Screens/OngoingOrdersScreen";

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
          <Dashboard /> 
      ),
    },
    {
      path: "/ongoingorders",
      element: <OngoingOrdersScreen />,
    },
    {
      path: "/search",
      element: <Searchpage/>
    },
    {
      path: "/contactus",
      element: <Contact />
    },
    {

      path: "/payment-billing",
      element: <PaymentBilling />,
    },
    {
      path: "/services",
      element: (
        <>
        <OrderNow/>
        </>
      ),
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
