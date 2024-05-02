import React from "react";

function ServicesCards() {
  const picheight = 180;
  const picwidth = 160;
  return (
    <div className="services-cards">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="./assets/plumber.jpg"
                className="card-img-top"
                alt=""
                height={picheight}
                width={picwidth}
              />

              <div className="card-body">
                <p className="card-text">Plumber</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/carpenter.jpg"
                className="card-img-top"
                alt=""
                height={picheight}
                width={picwidth}
              />

              <div className="card-body">
                <p className="card-text">Carpenter</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/nigga.jpg"
                className="card-img-top"
                alt=""
                height={picheight}
                width={picwidth}
              />

              <div className="card-body">
                <p className="card-text">Painter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="./assets/electrician.jpg"
                className="card-img-top"
                alt=""
                height={picheight}
                width={picwidth}
              />

              <div className="card-body">
                <p className="card-text">Electrician</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/mechanic.jpg"
                className="card-img-top"
                alt=""
                height={picheight}
                width={picwidth}
              />

              <div className="card-body">
                <p className="card-text">Mechanic</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="./assets/car mechanic.jpg"
                className="card-img-top"
                alt=""
                height={picheight}
                width={picwidth}
              />

              <div className="card-body">
                <p className="card-text">Car Mechanic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
