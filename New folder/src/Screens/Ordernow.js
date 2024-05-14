import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderNow() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div>
      <h1>All Available Services</h1>
      <table>
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.service_id}>
              <td>{service.service_id}</td>
              <td>{service.service_name}</td>
              <td>{service.description}</td>
              <td>${service.price}</td>
              <td>{service.duration} mins</td>
              <td>{service.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderNow;
