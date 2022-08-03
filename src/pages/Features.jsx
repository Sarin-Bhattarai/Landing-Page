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
      <section>
        <div className="container">
          <h3 className="feature-header">OUR FEATURES</h3>
          <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-6 m-auto" id="feature-res">
              <div className="border-0 my-3 order-1 order-lg-1">
                <FaReact className="feature-icon" />
                <h1 id="feature-header" className="text-dark">
                  Marketing Performance
                </h1>
                <p id="feature-para">
                  Itaque earum rerum hic tenetur sapiente delectut reiciendis
                  voluptatibus perspiciatis unde omnis iste natus error sit
                  maiores alias consequatur perferendisthat doloribus asperiores
                  repellat.
                  <br />
                  <br />
                  Nam libero tempore com soluta nobis eligendi optio cumque
                  nihil impedit minusidquod maxime placeat facere possimus.
                </p>
              </div>
            </div>
            {/* col ends */}
            <div className="col-12 col-sm-6 col-md-6 m-auto">
              <div
                className="my-3 order-2 order-lg-2"
                id="pic-div"
                style={{
                  marginLeft: "22%",
                }}
              >
                <img
                  className="hover-image"
                  src={featureImage}
                  alt="feature FirstImage"
                />
              </div>
            </div>
            {/* col ends */}
          </div>
          {/* row ends */}
          <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-6 m-auto">
              <div className="my-3 order-2 order-lg-2" id="pic-div">
                <img
                  className="hover-image"
                  src={featureSecImage}
                  alt="feature secondImage"
                />
              </div>
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-6 m-auto" id="feature-res">
              <div className="border-0 my-3 order-1 order-lg-1">
                <MdMoving className="feature-icon" />
                <h1 id="feature-header" className="text-dark">
                  Marketing business
                </h1>
                <p id="feature-para">
                  Itaque earum rerum hic tenetur sapiente delectut reiciendis
                  voluptatibus perspiciatis unde omnis iste natus error sit
                  maiores alias consequatur perferendisthat doloribus asperiores
                  repellat.
                  <br />
                  <br />
                  Nam libero tempore com soluta nobis eligendi optio cumque
                  nihil impedit minusidquod maxime placeat facere possimus.
                </p>
              </div>
            </div>
            {/* col ends */}
          </div>
          {/* row ends */}

          <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-6 m-auto" id="feature-res">
              <div className="border-0 my-3 order-1 order-lg-1">
                <BsClipboardData className="feature-icon" />
                <h1 id="feature-header" className="text-dark">
                  Strategy Solutions
                </h1>
                <p id="feature-para">
                  Itaque earum rerum hic tenetur sapiente delectut reiciendis
                  voluptatibus perspiciatis unde omnis iste natus error sit
                  maiores alias consequatur perferendisthat doloribus asperiores
                  repellat.
                  <br />
                  <br />
                  Nam libero tempore com soluta nobis eligendi optio cumque
                  nihil impedit minusidquod maxime placeat facere possimus.
                </p>
              </div>
            </div>
            {/* col ends */}
            <div className="col-12 col-sm-6 col-md-6 m-auto">
              <div
                className="my-3 order-2 order-lg-2"
                id="pic-div"
                style={{
                  marginLeft: "22%",
                }}
              >
                <img
                  className="hover-image"
                  src={featureThirdImage}
                  alt="feature ThirdImage"
                />
              </div>
            </div>
            {/* col ends */}
          </div>
          {/* row ends */}
        </div>
        {/* container ends */}
      </section>
    </>
  );
};

export default Features;
