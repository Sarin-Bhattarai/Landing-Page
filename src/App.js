import React from "react";
import { Layout } from "antd";
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
  return (
    <>
      <Layout className="layout">
        <Header>
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
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          App Technologies ©2022 Created by App Tech
        </Footer>
      </Layout>
      ;
    </>
  );
};

export default App;
