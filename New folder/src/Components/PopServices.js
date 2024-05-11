import React from 'react'
import Cards from './card'
import GigCard from './GigCard'
function PopServices() {
  return (
    <div style={{padding:"2%"}}>
      <h3>Popular Services</h3>
      <div className="row"style={{justifyContent:"space-between",margin:"2%"}}>
        <GigCard className="col" />
        <GigCard className="col" />
        <GigCard className="col" />
      </div>
    </div>
  );
}

export default PopServices