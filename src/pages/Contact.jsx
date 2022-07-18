import React from "react";
import "../utils/css/contact.css";
import { FiMapPin } from "react-icons/fi";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import Footer from "../components/contact-footer/footer";

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
      <Footer />
    </>
  );
};

export default Contact;
