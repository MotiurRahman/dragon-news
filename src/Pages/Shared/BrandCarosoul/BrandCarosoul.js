import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../../assets/brands/Brand1.png";
import brand2 from "../../../assets/brands/Brand2.png";

const BrandCarosoul = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={brand1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={brand2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarosoul;
