import React from "react";
import img1 from "./images/coaching-service-left.webp";
import img2 from "./images/coaching-service-center.webp";
import img3 from "./images/coaching-service-right.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h3>POWERFULL SERVICES</h3>
      <div className="main-area">
        <div className="container">
          <img src={img1} alt="" />
          <p>Well Documented</p>
        </div>
        <div className="container">
          <img src={img2} alt="" />
          <p>Great Support Services</p>
        </div>
        <div className="container">
          <img src={img3} alt="" />
          <p>Live Support</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
