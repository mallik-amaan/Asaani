import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import LandingPage from "./Screens/LandingPage";
import Dashboard from "./Screens/Dashboard";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import "./App.css";
import menuicon from "./menu.svg";
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
      path: "/landing",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: (
        <>
          <Dashboard /> {/* Assuming Dashboard renders the main content */}
          <Menu isOpen={isOpen} onClose={toggleMenu} />{" "}
          {/* Menu integrated here */}
        </>
      ),
    },
  ]);

  return (
    <>
      <div className="app">
        <Navbar />
        <img src={menuicon} alt="menu" onClick={toggleMenu} height={30} width={30}/>
    
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );
}

export default App;
