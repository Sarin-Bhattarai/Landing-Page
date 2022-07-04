import React from "react";
import { Col, Row } from "antd";
import "../utils/css/about.css";

const About = () => {
  return (
    <>
      <h1 className="section-header">ABOUT US</h1>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </>
  );
};

export default About;
