import React from "react";
import { Col, Row, Card, Badge } from "antd";
import "../utils/css/blog.css";
import blog1 from "../utils/assets/blog-1.jpg";
import blog2 from "../utils/assets/blog-2.jpg";
import blog3 from "../utils/assets/blog-3.jpg";

const Blog = () => {
  return (
    <>
      <h1 className="blog-header">THE BLOG</h1>
      <Row className="blog-row">
        <Col className="row-col-1" span={8}>
          <Badge.Ribbon text="1 Jan 2019" placement="start">
            <Card
              style={{
                width: 300,
              }}
              cover={<img src={blog1} alt="card-pic" />}
            />
          </Badge.Ribbon>
          <Card
            className="second-card"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <h4 className="second-card-header">UI/UX Designer</h4>
            <h1>Quis autem reprehenderit</h1>
            <p>
              At vero eos et accusamus et iusto odio
              <br /> dignissimos ducimus qui blanditiis
              <br /> deleniti corrupti.
            </p>
          </Card>
        </Col>

        <Col className="row-col-1" span={8}>
          <Badge.Ribbon text="2 Jan 2019" placement="start">
            <Card
              style={{
                width: 300,
              }}
              cover={<img src={blog2} alt="card-pic" />}
            />
          </Badge.Ribbon>
          <Card
            className="second-card"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <h4 className="second-card-header">Web Developer</h4>
            <h1>Quis autem reprehenderit</h1>
            <p>
              At vero eos et accusamus et iusto odio
              <br /> dignissimos ducimus qui blanditiis
              <br /> deleniti corrupti.
            </p>
          </Card>
        </Col>

        <Col className="row-col-1" span={8}>
          <Badge.Ribbon text="3 Jan 2019" placement="start">
            <Card
              style={{
                width: 300,
              }}
              cover={<img src={blog3} alt="card-pic" />}
            />
          </Badge.Ribbon>
          <Card
            className="second-card"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <h4 className="second-card-header">Web Designer</h4>
            <h1>Quis autem reprehenderit</h1>
            <p>
              At vero eos et accusamus et iusto odio
              <br /> dignissimos ducimus qui blanditiis
              <br /> deleniti corrupti.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Blog;
