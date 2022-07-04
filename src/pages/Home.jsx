import React from "react";
import { Col, Row } from "antd";
import "../utils/css/home.css";
import Launch from "../utils/assets/Launch.png";

const Home = () => {
  return (
    <Row
      style={{
        backgroundColor: "#001529",
        height: "75vh",
        marginTop: "4%",
      }}
    >
      <Col span={12}>
        <div className="home-first-row">
          <h1
            style={{
              fontSize: "52px",
              color: "white",
            }}
          >
            <strong>M</strong>ake Your
            <br />
            Marketing <strong>R</strong>eal.
          </h1>
          <p>
            Ut enim ad minima veniam quis nostrum exercitationem ullam
            <br /> corporis at suscipit laboriosam nisi ut aliquid a commodi
            <br />
            consequatur Quis autem.
          </p>
        </div>
        <div className="home-first-row-second-item">
          <a href="/about">Learn More</a>
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
