// Dashboard.js
import React from "react";
import SearchCard from "../Components/searchCard"; // Corrected import
import OngoingOrders from "../Components/OngoingOrders";
import PopServices from "../Components/PopServices";
function Dashboard() {
  return (
    <div>
      <div
        className="row"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <SearchCard className="col" />
        <OngoingOrders className="col" align="end" />
      </div>

      <PopServices />
    </div>
  );
}

export default Dashboard;
