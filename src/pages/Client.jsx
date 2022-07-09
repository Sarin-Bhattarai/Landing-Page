import React from "react";
import { Carousel } from "antd";
import "../utils/css/client.css";

const Client = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    height: "160px",
    color: "#fff",
  };
  return (
    <>
      <Carousel className="client-slider" afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <h1 className="client-header">OUR CLIENTS</h1>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <h1 className="client-header">OUR CLIENTS</h1>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <h1 className="client-header">OUR CLIENTS</h1>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <h1 className="client-header">OUR CLIENTS</h1>
          </h3>
        </div>
      </Carousel>
    </>
  );
};

export default Client;
