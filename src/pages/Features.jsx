import React from "react";
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
      <section className="d-flex align-items-center" id="section-feature">
        <div className="container">
          <h1 className="feature-header">OUR FEATURES</h1>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 pt-5 order-1 order-lg-1"
                  id="feature-res"
                >
                  <FaReact className="feature-icon" />
                  <h3
                    className="text-dark fw-normal home-2-title display-6 mb-0"
                    id="feature-header"
                  >
                    Marketing Performance
                  </h3>
                  <p className="my-5 text-dark" id="feature-para">
                    Itaque earum rerum hic tenetur sapiente delectut reiciendis
                    voluptatibus perspiciatis unde omnis iste natus error sit
                    maiores alias consequatur perferendisthat doloribus
                    asperiores repellat.
                    <br />
                    <br />
                    Nam libero tempore cum soluta nobis eligendi optio cumque
                    nihil impedit minusidquod maxime placeat facere possimus.
                  </p>
                </div>
                <div
                  className="col-lg-6 order-2 order-lg-2 header-img"
                  id="pic-div"
                >
                  <img
                    src={featureImage}
                    className="hover-image"
                    alt="feature-pic"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 ">
                  <MdMoving className="feature-icon" />
                  <h3
                    className="text-dark fw-normal home-2-title display-6 mb-0"
                    id="feature-header"
                  >
                    Strategy Solutions
                  </h3>
                  <p className="my-5 text-dark" id="feature-para">
                    Itaque earum rerum hic tenetur sapiente delectut reiciendis
                    voluptatibus perspiciatis unde omnis iste natus error sit
                    maiores alias consequatur perferendisthat doloribus
                    asperiores repellat.
                    <br />
                    <br />
                    Nam libero tempore cum soluta nobis eligendi optio cumque
                    nihil impedit minusidquod maxime placeat facere possimus.
                  </p>
                </div>
                <div
                  className="col-lg-6 order-2 order-lg-2 header-img"
                  id="pic-div"
                >
                  <img
                    src={featureSecImage}
                    className="hover-image"
                    alt="feature-pic"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 ">
                  <BsClipboardData className="feature-icon" />
                  <h3
                    className="text-dark fw-normal home-2-title display-6 mb-0"
                    id="feature-header"
                  >
                    Marketing business
                  </h3>
                  <p className="my-5 text-dark" id="feature-para">
                    Itaque earum rerum hic tenetur sapiente delectut reiciendis
                    voluptatibus perspiciatis unde omnis iste natus error sit
                    maiores alias consequatur perferendisthat doloribus
                    asperiores repellat.
                    <br />
                    <br />
                    Nam libero tempore cum soluta nobis eligendi optio cumque
                    nihil impedit minusidquod maxime placeat facere possimus.
                  </p>
                </div>
                <div
                  className="col-lg-6 order-2 order-lg-2 header-img"
                  id="pic-div"
                >
                  <img
                    src={featureThirdImage}
                    className="hover-image"
                    alt="feature-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
