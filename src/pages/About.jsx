import React from "react";
import { Col, Row } from "antd";
import "../utils/css/about.css";
import { AiOutlineBulb } from "react-icons/ai";
import { BiShieldAlt2 } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";
import aboutImage from "../utils/assets/aboutImage.jpg";

const About = () => {
  return (
    <>
      <h3 className="section-header">ABOUT US</h3>
      <Row className="about-row">
        <Col className="about-about-col" span={8}>
          <div className="icon-1">
            <AiOutlineBulb className="icon-img" />
          </div>
          <h1 className="about-headers">Creative Design</h1>
          <div className="p-about-desc">
            <p className="about-desc">
              Nemo enim ipsam voluptatem quia voluptas sit
              <br /> aspernatur at aut odit aut fugit sed quia
              <br /> consequuntur magni.
            </p>
          </div>
        </Col>
        <Col className="about-about-col" span={8}>
          <div className="icon-2">
            <BiShieldAlt2 className="icon-img" />
          </div>
          <h1 className="about-headers">Strategy Solutions</h1>
          <div className="p-about-desc">
            <p className="about-desc">
              Nemo enim ipsam voluptatem quia voluptas sit
              <br /> aspernatur at aut odit aut fugit sed quia
              <br /> consequuntur magni.
            </p>
          </div>
        </Col>
        <Col className="about-about-col" span={8}>
          <div className="icon-3">
            <IoOpenOutline className="icon-img" />
          </div>
          <h1 className="about-headers">Dynamic Growth</h1>
          <div className="p-about-desc">
            <p className="about-desc">
              Nemo enim ipsam voluptatem quia voluptas sit
              <br /> aspernatur at aut odit aut fugit sed quia
              <br /> consequuntur magni.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="about-row-second">
        <Col span={12}>
          <div className="b-business-header">
            <h1 className="business-header">
              Performancect Solution For Small
              <br /> Businesses
            </h1>
          </div>
          <div className="p-second-desc">
            <p className="about-second-desc">
              Temporibus autem quibusdam a aut officiis debitis rerum
              necessitatibus
              <br /> saepeeveniet ut et voluptates repudiandae sint a molestiae
              recusandae itaque
              <br /> earum rerum hic tenetur a sapiente delectus ut at aut
              reiciendis voluptatibus
              <br /> maiores alias consequatur perferendis doloribus asperiores
              rerum necessitat
              <br /> saepeeveniet.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className="i-about-image">
            <img className="about-image" src={aboutImage} alt="aboutImage" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default About;
