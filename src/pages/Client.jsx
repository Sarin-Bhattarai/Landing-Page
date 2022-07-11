import React from "react";
import { Carousel, Avatar, Image } from "antd";
import "../utils/css/client.css";
import avatar1 from "../utils/assets/avatar1.jpg";
import avatar2 from "../utils/assets/avatar2.jpg";
import avatar3 from "../utils/assets/avatar3.jpg";

const Client = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel
        autoplay
        effect="fade"
        className="client-slider"
        afterChange={onChange}
      >
        <div>
          <h3>
            <h1 className="client-header">OUR CLIENTS</h1>
            <div className="client-card">
              <h1 className="client-card-header">"Web Development"</h1>
              <p className="client-desc">
                At vero eos et accusamus et iusto odio dignissimos that site
                ducimus
                <br /> qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos
                <br /> dolores quas molestias excepturi cupiditate non.
              </p>
            </div>
            <div className="client-avatar">
              <h3 className="avatar-header">Jonas Davis</h3>
              <h4 className="avatar-header-2">Web Designer</h4>
            </div>
            <Avatar
              className="client-figure"
              style={{
                marginLeft: "63%",
                marginTop: "-5%",
              }}
              src={
                <Image
                  src={avatar1}
                  style={{
                    width: 48,
                  }}
                />
              }
            />
          </h3>
        </div>
        <div>
          <h3>
            <h1 className="client-header">OUR CLIENTS</h1>
            <div className="client-card">
              <h1 className="client-card-header">"Senior Management"</h1>
              <p className="client-desc">
                At vero eos et accusamus et iusto odio dignissimos that site
                ducimus
                <br /> qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos
                <br /> dolores quas molestias excepturi cupiditate non.
              </p>
            </div>
            <div className="client-avatar">
              <h3 className="avatar-header">Shera Barza</h3>
              <h4 className="avatar-header-2-2">UI/UX Designer</h4>
            </div>
            <Avatar
              className="client-figure"
              style={{
                marginLeft: "63%",
                marginTop: "-5%",
              }}
              src={
                <Image
                  src={avatar2}
                  style={{
                    width: 48,
                  }}
                />
              }
            />
          </h3>
        </div>
        <div>
          <h3>
            <h1 className="client-header">OUR CLIENTS</h1>
            <div className="client-card">
              <h1 className="client-card-header">"Graphic Developer"</h1>
              <p className="client-desc">
                At vero eos et accusamus et iusto odio dignissimos that site
                ducimus
                <br /> qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos
                <br /> dolores quas molestias excepturi cupiditate non.
              </p>
            </div>
            <div className="client-avatar">
              <h3 className="avatar-header">Mary Cantu</h3>
              <h4 className="avatar-header-2-2">PHP Developer</h4>
            </div>
            <Avatar
              className="client-figure"
              style={{
                marginLeft: "63%",
                marginTop: "-5%",
              }}
              src={
                <Image
                  src={avatar3}
                  style={{
                    width: 48,
                  }}
                />
              }
            />
          </h3>
        </div>
        <div>
          <h3>
            <h1 className="client-header">OUR CLIENTS</h1>
            <div className="client-card">
              <h1 className="client-card-header">"Best Designer"</h1>
              <p className="client-desc">
                At vero eos et accusamus et iusto odio dignissimos that site
                ducimus
                <br /> qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos
                <br /> dolores quas molestias excepturi cupiditate non.
              </p>
            </div>
            <div className="client-avatar">
              <h3 className="avatar-header">Gray Jones</h3>
              <h4 className="avatar-header-2-2">Graphic Designer</h4>
            </div>
            <Avatar
              className="client-figure"
              style={{
                marginLeft: "63%",
                marginTop: "-5%",
              }}
              src={
                <Image
                  src={avatar1}
                  style={{
                    width: 48,
                  }}
                />
              }
            />
          </h3>
        </div>
      </Carousel>
    </>
  );
};

export default Client;
