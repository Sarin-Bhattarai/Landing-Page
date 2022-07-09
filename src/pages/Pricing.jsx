import React from "react";
import { Col, Row } from "antd";
import "../utils/css/pricing.css";

const Pricing = () => {
  return (
    <>
      <h1 className="pricing_header">OUR PRICING</h1>
      <Row className="pricing-row">
        <Col className="col-price-1" span={6}>
          <section className="first-section">
            <div className="card-header">
              <h3 className="header-text">Basic</h3>
              <h1 className="header-price">
                <sup>$</sup>19.00
              </h1>
            </div>
            <hr />
            <div>
              <p className="card-desc">Bandwidth: 1GB</p>
              <p className="card-desc">Onlinespace: 100MB</p>
              <p className="card-desc">Support: NO</p>
              <p className="card-desc">Domain: 05</p>
              <p className="card-desc">Hidden Fees: No</p>
              <br />
              <a className="pricing_link" href="/#">
                BUY NOW
              </a>
            </div>
          </section>
        </Col>
        <Col className="col-price-1" span={6}>
          <section className="first-section">
            <div className="card-header">
              <h3 className="header-text">Popular</h3>
              <h1 className="header-price">
                <sup>$</sup>29.00
              </h1>
            </div>
            <hr />
            <div>
              <p className="card-desc">Bandwidth: 2GB</p>
              <p className="card-desc">Onlinespace: 500MB</p>
              <p className="card-desc">Support: YES</p>
              <p className="card-desc">Domain: 10</p>
              <p className="card-desc">Hidden Fees: No</p>
              <br />
              <a className="pricing_link" href="/#">
                BUY NOW
              </a>
            </div>
          </section>
        </Col>
        <Col className="col-price-1" span={6}>
          <section className="first-section">
            <div className="card-header">
              <h3 className="header-text">Advance</h3>
              <h1 className="header-price">
                <sup>$</sup>59.00
              </h1>
            </div>
            <hr />
            <div>
              <p className="card-desc">Bandwidth: 3GB</p>
              <p className="card-desc">Onlinespace: 1GB</p>
              <p className="card-desc">Support: YES</p>
              <p className="card-desc">Domain: 15</p>
              <p className="card-desc">Hidden Fees: No</p>
              <br />
              <a className="pricing_link" href="/#">
                BUY NOW
              </a>
            </div>
          </section>
        </Col>
        <Col className="col-price-1" span={6}>
          <section className="first-section">
            <div className="card-header">
              <h3 className="header-text">Premium</h3>
              <h1 className="header-price">
                <sup>$</sup>19.00
              </h1>
            </div>
            <hr />
            <div>
              <p className="card-desc">Bandwidth: 2GB</p>
              <p className="card-desc">Onlinespace: 1GB</p>
              <p className="card-desc">Support: YES</p>
              <p className="card-desc">Domain: 20</p>
              <p className="card-desc">Hidden Fees: Yes</p>
              <br />
              <a className="pricing_link" href="/#">
                BUY NOW
              </a>
            </div>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default Pricing;
