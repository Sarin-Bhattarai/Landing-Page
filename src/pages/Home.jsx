import React from "react";
import { Col, Row } from "antd";
import "../utils/css/home.css";
import Launch from "../utils/assets/zookilaunch.png";

const Home = () => {
  return (
    <Row className="home-row">
      <Col className="home-col-1" span={12}>
        <div className="home-first-row">
          <h1 className="heading-home">
            Make Your
            <br />
            Marketing Real.
          </h1>
          <p className="home-desc">
            Ut enim ad minima veniam quis nostrum exercitationem ullam
            <br /> corporis at suscipit laboriosam nisi ut aliquid a commodi
            <br />
            consequatur Quis autem.
          </p>
          <div className="home-first-row-second-item">
            <a href="/about">Learn More</a>
          </div>
        </div>
      </Col>
      <Col span={12}>
        <div className="home-second-row">
          <img className="home-second-row-pic" src={Launch} alt="launch" />
        </div>
      </Col>
    </Row>
  );
};
export default Home;
