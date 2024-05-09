// searchCard.js
import React from "react";
import searchIcon from "../search.svg";

function SearchCard() {
  return (
    <>
        <div className="dashboard-card" style={{width:"50%"}}>
          <h4>Search Services</h4>
          <div className="mb-3" style={{ padding: "10px" }}>
            <div className="row">
              <input
                className="col-sm-8 col-md-10 col-lg-11"
                type="text"
                class="form-control form-control-sm"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
              <img
                src={searchIcon}
                alt=""
                style={searchStyle}
                className="col  "
              />
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
