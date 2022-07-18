import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer
        className="text-dark pt-5 pb-4"
        style={{
          marginTop: "5%",
        }}
      >
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold text-dark">
                ABOUT US
              </h3>
              <p className="footer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aliquam cupiditate, soluta consequatur similique ea dolores et
                inventore placeat reiciendis beatae, porro laudantium officiis
                delectus vel at ducimus.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold text-dark">
                Company
              </h3>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Monitoring Grader
                </a>
              </p>

              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Job Opening
                </a>
              </p>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Customers
                </a>
              </p>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Privacy
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold text-dark">
                SUPPORT
              </h3>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Get Started
                </a>
              </p>

              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Blog
                </a>
              </p>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Knowledge Base
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold text-dark">
                LEGAL
              </h3>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Terms & Conditions
                </a>
              </p>

              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </p>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Customers
                </a>
              </p>
              <p className="link-desc">
                <a
                  href="/#"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  Pricing
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
