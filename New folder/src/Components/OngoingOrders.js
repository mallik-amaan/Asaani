import React from 'react'
import ProgressBar from './ProgressBar'
function OngoingOrders() {
  return (
<div className='container-fluid dashboard-card' style={{width:"30%"}}>
    <h3>Ongoing Orders</h3>
    <h5>Cleaning</h5>
<ProgressBar/>
<h5>Gardening</h5>
<ProgressBar/>
</div>    
  )
}


export default OngoingOrders

