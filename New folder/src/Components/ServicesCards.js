import React from "react";
import Cards from "./card";
function ServicesCards() {
  const picheight = 180;
  const picwidth = 160;
  return (
    <div className="container-fluid services-cards text-center">
      <h3 style={{fontFamily:"Roboto ", marginTop:"3%",}}>Our Services</h3>
      <div
        className="row justify-content-md-center"
        style={{ marginTop: "5%", marginRight: "0%" }}
      >
        <div className="col-4 col-md-6  col-lg-4 " align="center">
          <Cards title="Plumber" img="./assets/plumber.jpg" />
          <Cards title="Plumber" img="./assets/plumber.jpg" />
        </div>
        <div className="col-4 col-md-6  col-lg-4" align="center">
          <Cards title="Plumber" img="./assets/plumber.jpg" />
          <Cards title="Plumber" img="./assets/plumber.jpg" />
        </div>
        <div className="col-4 col-md-6  col-lg-4" align="center">
          <Cards title="Plumber" img="./assets/plumber.jpg" />
          <Cards title="Plumber" img="./assets/plumber.jpg" />
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
