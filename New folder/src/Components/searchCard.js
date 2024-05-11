// searchCard.js
import React from "react";
import searchIcon from "../search.svg";

function SearchCard() {
  return (
    <>
      <div className="dashboard-card" style={{ width: "50%", padding: "2%" }}>
        <h4>Search Services</h4>
        <div className="mb-3" style={{ padding: "10px" }}>
          <div className="row">
            <input
              className="col-sm-8 col-md-6 col-lg-8"
              type="text"
              class="form-control form-control-sm"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder=""
              style={{ width: "85%", height: "50%" }} // Set input width to 80%
            />
            <img
              src={searchIcon}
              alt=""
              style={searchStyle}
              className="col"
              height="30px"
              style={{ width: "10%" }}
            />{" "}
            {/* Set icon width to 10% */}
          </div>
        </div>
      </div>
    </>
  );
}

const searchStyle = {
  marginTop: "5px",
  color: "black",
  height: "20px",
  width: "30px",
};

export default SearchCard;
