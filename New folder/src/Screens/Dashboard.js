// Dashboard.js
import React from "react";
import Buttons from "../Components/Buttons";
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
      <PopServices />
      <Buttons btsize="small" value="hello" varient="contained"></Buttons>
    </div>
  );
}

export default Dashboard;
