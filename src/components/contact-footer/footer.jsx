import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase mb-4">ABOUT US</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase mb-4">COMPANY</h6>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Monitoring Grader
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Job Opening
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Customers
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Privacy
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase mb-4">SUPPORT</h6>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Get Started
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Knowledge Base
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase mb-4">LEGAL</h6>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Customers
                  </a>
                </p>
                <p id="para-p">
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
