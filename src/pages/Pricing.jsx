import React from "react";
import "../utils/css/pricing.css";

const Pricing = () => {
  return (
    <>
      <h1 className="pricing_header">OUR PRICING</h1>
      <br />
      <div className="wrapper">
        <div className="table basic">
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
                <span className="text">$</span>
                <span className="price">29</span>
              </div>
            </div>
          </div>
          <div className="package-name"></div>
          <ul className="features">
            <li>
              <span className="list-name">Bandwidth</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Online Space</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Support</span>
              <span className="icon cross">
                <i className="fas fa-times"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Hidden Fees</span>
              <span className="icon cross">
                <i className="fas fa-times"></i>
              </span>
            </li>
          </ul>
          <div className="btn">
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="table premium">
          <div className="ribbon">
            <span>Recommend</span>
          </div>
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
                <span className="text">$</span>
                <span className="price">32</span>
              </div>
            </div>
          </div>
          <div className="package-name"></div>
          <ul className="features">
            <li>
              <span className="list-name">Bandwidth</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Online Space</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Support</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Hidden Fees</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
          </ul>
          <div className="btn">
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="table ultimate">
          <div className="price-section">
            <div className="price-area">
              <div className="inner-area">
                <span className="text">$</span>
                <span className="price">59</span>
              </div>
            </div>
          </div>
          <div className="package-name"></div>
          <ul className="features">
            <li>
              <span className="list-name">BandWidth</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Online Space</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Support</span>
              <span className="icon check">
                <i className="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span className="list-name">Hidden Fees</span>
              <span className="icon cross">
                <i className="fas fa-times"></i>
              </span>
            </li>
          </ul>
          <div className="btn">
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
