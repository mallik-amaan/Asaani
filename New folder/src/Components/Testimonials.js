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
      <h3 style={{ fontFamily: "Roboto ", marginTop: "3%" }}>Testimonials</h3>

      <div className="row">
        {items.map((item) => (
          <div className="col-6">
          <div className="container-fluid rev-card" style={{borderWidth: "15px",}}>
            <img style={{borderRadius: "50px", marginBottom:"15px"}} src={item.img} alt="" height={100} width={100} />
            <h5>{item.name}</h5>
            <p>{item.review}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
