import React from "react";
function Testimonials() {
  const items = [
    {
      img: "./assets/nigga.jpg",
      name: "John Doe",
      review:
        "loremThe moon cast a soft glow over the tranquil lake, illuminating the gentle ripples that danced upon its surface. A cool breeze whispered through the trees, carrying with it the sweet scent of jasmine and pine, creating a serene atmosphere of peace and tranquility",
    },
    {
      img: "./assets/nigga.jpg",
      name: "John Doe",
      review: "Good App",
    },
  ];
  return (
    <div
      className="container-fluid text-center"
      style={{
        width: "90%",
        height: "70vh",
        padding: "10px",
      }}
    >
      <div className="h5">
        Testimonials
      </div>
      <div className="row">
        {items.map((item) => (
          <div className="container-fluid rev-card">
            <img src={item.img} alt="" height={100} width={100} />
            <h5>{item.name}</h5>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
