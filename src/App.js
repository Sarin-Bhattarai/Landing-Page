import React, { useState } from "react";
import { Layout, BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Client from "./pages/Client";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  const { Header, Content, Footer } = Layout;
  //scroll logic
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  //scroll logic ends here

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#0000ff",
    color: "white",
    textAlign: "center",
    fontSize: 15,
  };
  return (
    <>
      <Layout className="layout">
        <Header
          className={navbar ? "nav-container active" : "nav-container"}
          style={{
            height: "10vh",
            position: "fixed",
            width: "100%",
            zIndex: 100,
          }}
        >
          <Navbar />
        </Header>
        <Content>
          <Home />
          <About />
          <Services />
          <Features />
          <Pricing />
          <Client />
          <Blog />
          <Contact />
        </Content>
        <br />
        <br />
        <Footer
          style={{
            textAlign: "center",
            color: "white",
            background: "#212529",
          }}
        >
          App Technologies ©2022 Created by App Tech
        </Footer>
      </Layout>
      <BackTop>
        <div style={style}>
          <UpOutlined />
        </div>
      </BackTop>
    </>
  );
};

export default App;
