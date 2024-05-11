import React from 'react'
import GigCard from './GigCard'
function PopServices() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h3 className="my-4 mx-4">Popular Services</h3>
        <a href="/" style={{"text-decoration": "none", color: "black"}}><h5 className="mx-5">See all</h5></a>
      </div>
      <div className="row"style={{justifyContent:"space-between",margin:"2%"}}>
        <GigCard className="col" />
        <GigCard className="col" />
        <GigCard className="col" />
      </div>
    </div>
  );
}

export default PopServices