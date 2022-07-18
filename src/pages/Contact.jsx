import React from "react";
import "../utils/css/contact.css";
import { FiMapPin } from "react-icons/fi";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { Col, Divider, Row } from "antd";

const Contact = () => {
  return (
    <>
      <h3 className="contact-header">GET IN TOUCH</h3>
      <br />
      <section className="contact">
        <div className="contact-container">
          <div className="contactInfo">
            <div className="box">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-text">
                <h3>Address</h3>
                <p>
                  4671 Sugar Camp Road, <br /> Owatonna, Minnesota, <br />
                  55060
                </p>
              </div>
            </div>
            <div className="box">
              <div className="contact-icon">
                <MdPhone />
              </div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p>507-475-6094</p>
              </div>
            </div>
            <div className="box">
              <div className="contact-icon">
                <MdOutlineEmail />
              </div>
              <div className="contact-text">
                <h3>Email</h3>
                <p>youremailid@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required />
                <span>Full name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea />
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div className="contact-col">
            <h2>ABOUT US</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              that is doloremque totam that was.
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="contact-col">
            <h2>COMPANY</h2>
            <ul className="ul-contact">
              <li>
                <a href="/#"> Monitoring Grader</a>
              </li>
              <li>
                <a href="/#"> Job Opening</a>
              </li>
              <li>
                <a href="/#"> Customers</a>
              </li>
              <li>
                <a href="/#"> Privacy</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="contact-col">
            <div className="contact-col">
              <h2>SUPPORT</h2>
              <ul className="ul-contact">
                <li>
                  <a href="/#">Get Started</a>
                </li>
                <li>
                  <a href="/#">Blog</a>
                </li>
                <li>
                  <a href="/#"> Knowledge Base</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="contact-col">
            <div className="contact-col">
              <h2>LEGAL</h2>
              <ul className="ul-contact">
                <li>
                  <a href="/#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/#">Privacy Policy</a>
                </li>
                <li>
                  <a href="/#">Customers</a>
                </li>
                <li>
                  <a href="/#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
