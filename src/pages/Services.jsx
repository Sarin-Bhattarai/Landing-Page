import React from "react";
import { Col, Row } from "antd";
import "../utils/css/services.css";
import { IoServer, IoColorPalette, IoStatsChart } from "react-icons/io5";
import { CgIfDesign } from "react-icons/cg";
import { SiMaterialdesignicons } from "react-icons/si";
import { RiCheckboxMultipleFill } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <h3 className="service-header">OUR SERVICES</h3>
      <Row className="services-row">
        <Col className="container-service" span={8}>
          <div className="ss-1">
            <IoServer className="service-icon" />
          </div>
          <h1 className="section-headers">Awesome Support</h1>
          <div className="ss-2">
            <p className="service-desc">
              Sed ut perspiciatis unde sit omnise iste natus
              <br /> voluptatem site accusantium doloremque
              <br /> laudantium combined with a handful totam.
            </p>
          </div>
        </Col>
        <Col className="container-service" span={8}>
          <div>
            <IoColorPalette className="service-icon" />
          </div>
          <div>
            <h1 className="section-headers">Unlimited Colors</h1>
            <p className="service-desc">
              Sed ut perspiciatis unde sit omnise iste natus
              <br /> voluptatem site accusantium doloremque
              <br /> laudantium combined with a handful totam.
            </p>
          </div>
        </Col>
        <Col className="container-service" span={8}>
          <div>
            <IoStatsChart className="service-icon" />
          </div>
          <div>
            <h1 className="section-headers">Strategy Solutions</h1>
            <p className="service-desc">
              Sed ut perspiciatis unde sit omnise iste natus
              <br /> voluptatem site accusantium doloremque
              <br /> laudantium combined with a handful totam.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="services-second-row">
        <Col className="container-service" span={8}>
          <div>
            <CgIfDesign className="service-icon" />
          </div>
          <div>
            <h1 className="section-headers">Digital Design</h1>
            <p className="service-desc">
              Sed ut perspiciatis unde sit omnise iste natus
              <br /> voluptatem site accusantium doloremque
              <br /> laudantium combined with a handful totam.
            </p>
          </div>
        </Col>
        <Col className="container-service" span={8}>
          <div>
            <SiMaterialdesignicons className="service-icon" />
          </div>
          <div>
            <h1 className="section-headers">Easy to customize</h1>
            <p className="service-desc">
              Sed ut perspiciatis unde sit omnise iste natus
              <br /> voluptatem site accusantium doloremque
              <br /> laudantium combined with a handful totam.
            </p>
          </div>
        </Col>
        <Col className="container-service" span={8}>
          <div>
            <RiCheckboxMultipleFill className="service-icon" />
          </div>
          <div>
            <h1 className="section-headers">Truly Multipurpose</h1>
            <p className="service-desc">
              Sed ut perspiciatis unde sit omnise iste natus
              <br /> voluptatem site accusantium doloremque
              <br /> laudantium combined with a handful totam.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Services;
