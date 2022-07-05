import React from "react";
import { Col, Row } from "antd";
// import { BulbOutlined } from "@ant-design/icons";
import "../utils/css/about.css";
import { AiOutlineBulb } from "react-icons/ai";
import { BiShieldAlt2 } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      <h3 className="section-header">ABOUT US</h3>
      <Row className="about-row">
        <Col span={8}>
          <div className="icon-1">
            <AiOutlineBulb className="icon-img" />
          </div>
          <div>
            <h1 className="about-headers">Creative Design</h1>
            <p className="about-desc">
              Nemo enim ipsam voluptatem quia voluptas sit
              <br /> aspernatur at aut odit aut fugit sed quia
              <br /> consequuntur magni.
            </p>
          </div>
        </Col>
        <Col span={8}>
          <div className="icon-2">
            <BiShieldAlt2 className="icon-img" />
          </div>
          <div>
            <h1 className="about-headers">Strategy Solutions</h1>
            <p className="about-desc">
              Nemo enim ipsam voluptatem quia voluptas sit
              <br /> aspernatur at aut odit aut fugit sed quia
              <br /> consequuntur magni.
            </p>
          </div>
        </Col>
        <Col span={8}>
          <div className="icon-3">
            <IoOpenOutline className="icon-img" />
          </div>
          <div>
            <h1 className="about-headers">Dynamic Growth</h1>
            <p className="about-desc">
              Nemo enim ipsam voluptatem quia voluptas sit
              <br /> aspernatur at aut odit aut fugit sed quia
              <br /> consequuntur magni.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default About;
