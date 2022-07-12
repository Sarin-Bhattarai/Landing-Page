import React from "react";
import { Col, Row, Button, Form, Input } from "antd";
import "../utils/css/contact.css";
import {
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const { TextArea } = Input;
  return (
    <>
      <h3 className="contact-header">GET IN TOUCH</h3>
      <Row className="contact-row">
        <Col className="span-right-1" span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            <div className="contact-form">
              <Form.Item
                name="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input
                  className="input-contact"
                  placeholder="Name"
                  style={{
                    width: "130%",
                    marginRight: "20px",
                    height: 45,
                  }}
                />
              </Form.Item>

              <Form.Item
                name="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  className="input-contact"
                  placeholder="Email"
                  style={{
                    width: "130%",
                    marginRight: "65px",
                    height: 45,
                  }}
                />
              </Form.Item>
            </div>
            <Form.Item
              labelCol={{
                span: 3,
              }}
              name="Subject"
            >
              <Input
                placeholder="Subject"
                style={{
                  width: "100%",
                  height: 45,
                }}
              />
            </Form.Item>

            <Form.Item
              labelCol={{
                span: 3,
              }}
              name="Message"
            >
              <TextArea placeholder="Message" rows={4} />
            </Form.Item>
          </Form>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Col>
        <Col className="span-right-2" span={12}>
          <div className="contact-first-contact">
            <PhoneOutlined
              style={{
                fontSize: 25,
                border: "2px solid #999999",
                borderRadius: 20,
                padding: "5px 5px",
                color: "black",
              }}
            />
            <p className="p-p-p">Call: 012-345-6789</p>
          </div>
          <div className="contact-first-contact">
            <MailOutlined
              style={{
                fontSize: 25,
                border: "2px solid #999999",
                borderRadius: 20,
                padding: "6px 6px",
                color: "black",
              }}
            />

            <p className="p-p-p"> Email: youremailid@gmail.com</p>
          </div>
          <div className="contact-first-contact">
            <HomeOutlined
              style={{
                fontSize: 25,
                border: "2px solid #999999",
                borderRadius: 20,
                padding: "6px 6px",
                color: "black",
              }}
            />

            <p className="p-p-p">
              Location: 3179 Raccoon Run Seattle, WA 98109
            </p>
          </div>
          <h1>Follow</h1>
          <div className="icon-footer">
            <div className="icon-hover">
              <FacebookOutlined
                style={{
                  fontSize: 18,
                }}
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="icon-hover">
              <TwitterOutlined
                style={{
                  fontSize: 18,
                }}
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="icon-hover">
              <GooglePlusOutlined
                style={{
                  fontSize: 18,
                }}
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="icon-hover">
              <LinkedinOutlined
                style={{
                  fontSize: 18,
                }}
              />
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="icon-hover">
              <WhatsAppOutlined
                style={{
                  fontSize: 18,
                }}
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row className="contact-row-second">
        <Col className="res-col-2" span={6}>
          <h2 className="footer-header-row">ABOUT US</h2>
          <p className="f-h-r-desc">
            Sed ut perspiciatis unde omnis iste
            <br /> natus error sit voluptatem that is
            <br /> doloremque totam that was.
          </p>
        </Col>
        <Col className="res-col-2" span={6}>
          <h2 className="footer-header-row">COMPANY</h2>
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
        </Col>
        <Col className="res-col-2" span={6}>
          <h2 className="footer-header-row">SUPPORT</h2>
          <ul className="ul-contact">
            <li>
              <a href="/#"> Get Started </a>
            </li>
            <li>
              <a href="/#"> Blog </a>
            </li>
            <li>
              <a href="/#"> Knowledge Base</a>
            </li>
          </ul>
        </Col>
        <Col className="res-col-2" span={6}>
          <h2 className="footer-header-row">LEGAL</h2>
          <ul className="ul-contact">
            <li>
              <a href="/#"> Terms & Conditions</a>
            </li>
            <li>
              <a href="/#"> Privacy Policy </a>
            </li>
            <li>
              <a href="/#"> Customers</a>
            </li>
            <li>
              <a href="/#"> Pricing</a>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Contact;
