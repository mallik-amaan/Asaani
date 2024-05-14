import React from "react";

function OngoingOrdersScreen() {
  var ongoingOrders = true;
  const orders = [{ id: 1, name: "Order 1" }, { id: 2, name: "Order 2"} ];
  return (
    ongoingOrders ? (
      <div className="container">
        {orders.map((order) => (
          // Render the desired output for each order here
          <div className="container-fluid" key={order.id} style={{backgroundColor:"#9748ff",height:"50px",margin:"2%"}}>
            Order id: {order.id}
            <br></br>
            {order.name}</div>
        ))}
      </div>
    ) : (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>There are no ongoing orders.</p>
      </div>
    )
  );
}

export default OngoingOrdersScreen;
