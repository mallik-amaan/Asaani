import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import LandingPage from "./Components/LandingPage";
import "./App.css";

import "./fonts/XB Tabriz.ttf"


import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
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
