import React from "react";
import Cards from "./card";
function ServicesCards() {
  const picheight = 180;
  const picwidth = 160;
  return (
    <>
      <h2 style={{fontFamily:"Roboto ", marginTop:"3%"}} className="text-center">Our Services</h2>
      <div className="container-fluid d-flex justify-content-center align-items-center services-cards text-center">
        <div
          className="row justify-content-md-center cards-div"
          style={{ marginTop: "5%", marginRight: "0%" }}>
          <div className="col-4 col-md-6  col-lg-4 " align="center">
            <div className="card" style={{width: 350}}>
              <img className="card-img-top" src="./assets/plumber.jpg" alt=""/>
              <div className="card-body">
                <p className="card-text">We have the best plumbers out there to help you maintain your house.</p>
              </div>  
            </div>
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
    </>
  );
}

export default ServicesCards;
