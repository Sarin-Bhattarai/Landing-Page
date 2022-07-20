import React from "react";
import "../utils/css/about.css";
import { AiOutlineBulb } from "react-icons/ai";
import { BiShieldAlt2 } from "react-icons/bi";
import { IoOpenOutline } from "react-icons/io5";
import aboutImage from "../utils/assets/aboutImage.jpg";

const About = () => {
  return (
    <>
      <section
        style={{
          marginTop: "10%",
        }}
      >
        <div className="container">
          <h3 className="section-header">ABOUT US</h3>
          <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="border-0 my-3 text-center" id="main-class">
                <div className="card-body">
                  <AiOutlineBulb className="about-icon" />
                  <h1 className="text-dark" id="about-head">
                    Creative Design
                  </h1>
                  <p id="about-para">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="border-0 my-3 text-center" id="main-class">
                <div className="card-body">
                  <BiShieldAlt2 className="about-icon" />
                  <h1 className="text-dark" id="about-head">
                    Strategy Solutions
                  </h1>
                  <p id="about-para">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}

            <div className="col-12 col-sm-6 col-md-4 m-auto">
              <div className="border-0 my-3 text-center" id="main-class">
                <div className="card-body">
                  <IoOpenOutline className="about-icon" />
                  <h1 className="text-dark" id="about-head">
                    Dynamic Growth
                  </h1>
                  <p id="about-para">
                    Sed ut perspiciatis unde sit omnise iste natus voluptatem
                    site accusantium doloremque laudantium combined with a
                    handful totam.
                  </p>
                </div>
                {/* card body ends */}
              </div>
              {/* card ends */}
            </div>
            {/* col ends */}
          </div>
          {/* row ends */}

          <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-6 m-auto d-flex justify-content-center flex-column">
              <div className="border-0 my-3 text-center">
                <h1 className="text-dark" id="about-head-2">
                  Performancect Solution For Small
                  <br /> Businesses
                </h1>
                <p id="about-para">
                  Temporibus autem quibusdam a aut officiis debitis rerum
                  necessitatibus saepeeveniet ut et voluptates repudiandae sint
                  a molestiae recusandae itaque earum rerum hic tenetur a
                  sapiente delectus ut at aut reiciendis voluptatibus maiores
                  alias consequatur perferendis doloribus asperiores rerum
                  necessitat saepeeveniet.
                </p>
              </div>
            </div>
            {/* col ends */}
            <div className="col-12 col-sm-6 col-md-6 m-auto">
              <div className="my-3">
                <img
                  className="container"
                  id="about-img"
                  src={aboutImage}
                  alt="aboutImage"
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

export default About;
