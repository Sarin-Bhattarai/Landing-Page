import React from "react";
import "../utils/css/navbar.css";
import { MenuOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="nav-container">
      {/* first part */}
      <a href="/">
        <h2 className="nav-logo">
          <span>A</span>pp
          <span>T</span>echnologies
        </h2>
      </a>

      {/* second part */}
      <ul className="list">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/services">SERVICES</a>
        </li>
        <li>
          <a href="/features">FEATURES</a>
        </li>
        <li>
          <a href="/pricing">PRICING</a>
        </li>
        <li>
          <a href="/clients">CLIENTS</a>
        </li>
        <li>
          <a href="/blog">BLOG</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>
      <button className="btn">
        <MenuOutlined />
      </button>
    </nav>
  );
};

export default Navbar;
