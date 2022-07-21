import React from "react";
import "../utils/css/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { IoColorPalette, IoGitNetworkOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { MdMobileScreenShare } from "react-icons/md";

const Services = () => {
  return (
    <>
      <section
        style={{
          marginTop: "10%",
        }}
      >
        <div className="container">
          <h3 className="service-header">OUR SERVICES</h3>
          <div className="row my-5">
            <div className="col-12 col-sm-6 col-md-4 m-auto" id="main-column">
              <div className="card border-0 my-3" id="main-card">
                <div className="card-body">
                  <FaLaptopCode className="service-icon" />
                  <h1 id="header-service">Web Design</h1>
                  <p id="para-service">
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

            <div className="col-12 col-sm-6 col-md-4 m-auto" id="main-column">
              <div className="card border-0  my-3" id="main-card">
                <div className="card-body">
                  <AiOutlineLineChart className="service-icon" />
                  <h1 id="header-service">Marketing</h1>
                  <p id="para-service">
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
              <div className="card border-0  my-3" id="main-card">
                <div className="card-body">
                  <IoColorPalette className="service-icon" />
                  <h1 id="header-service">Graphic Designing</h1>
                  <p id="para-service">
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
              <div className="card border-0  my-3" id="main-card">
                <div className="card-body">
                  <GiMoneyStack className="service-icon" />
                  <h1 id="header-service">Payroll</h1>
                  <p id="para-service">
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
              <div className="card border-0  my-3" id="main-card">
                <div className="card-body">
                  <IoGitNetworkOutline className="service-icon" />
                  <h1 id="header-service">Networking</h1>
                  <p id="para-service">
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
              <div className="card border-0  my-3" id="main-card">
                <div className="card-body">
                  <MdMobileScreenShare className="service-icon" />
                  <h1 id="header-service">App Development</h1>
                  <p id="para-service">
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
        </div>
        {/* container ends */}
      </section>
    </>
  );
};

export default Services;
