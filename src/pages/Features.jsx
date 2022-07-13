import React from "react";
import { Col, Row } from "antd";
import "../utils/css/feature.css";
import { FaReact } from "react-icons/fa";
import { MdMoving } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import featureImage from "../utils/assets/featureimg.png";
import featureSecImage from "../utils/assets/featuresecimg.png";
import featureThirdImage from "../utils/assets/featurethirdimg.png";

const Features = () => {
  return (
    <>
      <h1 className="feature-header">OUR FEATURES</h1>
      <Row className="feature-first-row">
        <Col span={12}>
          <div>
            <FaReact className="feature-icon" />
          </div>
          <h1 className="feature__header">Marketing Performance</h1>
          <div className="f-feature-desc">
            <p className="feature-desc">
              Itaque earum rerum hic tenetur sapiente delectut reiciendis
              voluptatibus
              <br /> perspiciatis unde omnis iste natus error sit maiores alias
              consequatur
              <br /> perferendisthat doloribus asperiores repellat.
              <br />
              <br />
              Nam libero tempore cum soluta nobis eligendi optio cumque nihil
              impedit
              <br /> minusidquod maxime placeat facere possimus.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className="border-image">
            <img
              className="feature-firstImage"
              src={featureImage}
              alt="computer-with-apps"
            />
          </div>
        </Col>
      </Row>

      <Row className="feature-first-row">
        <Col span={12}>
          <div>
            <MdMoving className="feature-icon" />
          </div>
          <h1 className="feature__header">Strategy Solutions</h1>
          <div className="f-feature-desc">
            <p className="feature-desc">
              Itaque earum rerum hic tenetur sapiente delectut reiciendis
              voluptatibus
              <br /> perspiciatis unde omnis iste natus error sit maiores alias
              consequatur
              <br /> perferendisthat doloribus asperiores repellat.
              <br />
              <br />
              Nam libero tempore cum soluta nobis eligendi optio cumque nihil
              impedit
              <br /> minusidquod maxime placeat facere possimus.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className="border-image">
            <img
              className="feature-firstImage"
              src={featureSecImage}
              alt="computer-with-apps"
            />
          </div>
        </Col>
      </Row>

      <Row className="feature-first-row">
        <Col span={12}>
          <div>
            <BsClipboardData className="feature-icon" />
          </div>
          <h1 className="feature__header">Marketing Performance</h1>
          <div className="f-feature-desc">
            <p className="feature-desc">
              Itaque earum rerum hic tenetur sapiente delectut reiciendis
              voluptatibus
              <br /> perspiciatis unde omnis iste natus error sit maiores alias
              consequatur
              <br /> perferendisthat doloribus asperiores repellat.
              <br />
              <br />
              Nam libero tempore cum soluta nobis eligendi optio cumque nihil
              impedit
              <br /> minusidquod maxime placeat facere possimus.
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className="border-image">
            <img
              className="feature-firstImage"
              src={featureThirdImage}
              alt="computer-with-mic"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Features;
