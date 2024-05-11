// searchCard.js
import React from "react";
import searchIcon from "../search.svg";

function SearchCard() {
  return (
    <>
        <div className="dashboard-card p-3 mx-5" style={{width:"60%"}}>
          <h4>Search Services</h4>
          <div className="mb-3" style={{ padding: "10px" }}>
            <div className="row align-items-top">
              <div className="col-lg-11 col-sm-8 col-md-10">
                <input
                  className="w-100 border-0 rounded"
                  type="text"
                  class="form-control form-control-sm"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
              <div className="col">
                <img
                  src={searchIcon}
                  alt=""
                  style={searchStyle}
                />
              </div>
            </div>
          </div>
        </div>
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
