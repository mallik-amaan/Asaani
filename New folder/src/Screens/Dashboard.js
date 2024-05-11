// Dashboard.js
import React from "react";
import SearchCard from "../Components/searchCard"; // Corrected import
import OngoingOrders from "../Components/OngoingOrders";
import PopServices from "../Components/PopServices";
function Dashboard() {
  return (
    <div>
      <div className=" d-flex justify-content-center">
        <SearchCard className="col-lg-10"/>
        <OngoingOrders className="col-lg-2"/>
      </div>
      <PopServices/>
    </div>
  );
}

export default Dashboard;
