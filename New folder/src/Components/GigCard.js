import React from "react";
import styled from "styled-components";

const GigCard = ({ title, description, price, imageUrl }) => {
  return (
    <StyledGigCard>
      <img src={imageUrl} alt={title} className="gig-image" />
      <div className="gig-details">
        <h2 className="gig-title">Title</h2>
        <p className="gig-description">Description</p>
        <p className="gig-price">$Price</p>
        <button className="order-button">Order Now</button>
      </div>
    </StyledGigCard>
  );
};

const StyledGigCard = styled.div`
  width: 30%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;

  .gig-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .gig-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .gig-description {
    margin-bottom: 10px;
  }

  .gig-price {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .order-button {
    background-color: #3f80ff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
  }

  .order-button:hover {
    background-color: #305fad;
  }
`;

export default GigCard;
