import React from "react";

function Intro() {
  return (
    <>
      <h3
        className="text-center"
        style={{ fontFamily: "Roboto ", marginTop: "3%" }}
      >
        Who are we?
      </h3>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#2c9070a6",
          height: "0%",
          marginTop: "5%",
          padding: "3%",
        }}
      >
        <div className="row">
          <div className="col-6">
            <p style={{ fontFamily: "Briem Hand, cursive", fontSize: "25px" }}>
              Asaani is a beautiful platform that connects you with the best
              professionals in your area. They provide you with the best
              services at the best prices. They have a team of professionals who
              are experts in their fields. They provide services like plumbing,
              electrician, carpenter, painter, and many more.
            </p>
          </div>
          <div className="col-6">
            <img
              src="https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_1280.jpg"
              alt=""
              height="80%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
