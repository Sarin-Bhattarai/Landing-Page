import React, { useEffect, useState } from "react";
import "../utils/css/navbar.css";
import { MenuOutlined } from "@ant-design/icons"; //changes

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); //changes
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); //changes

  //changes
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

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

      {(toggleMenu || screenWidth > 830) && (
        <ul>
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
      )}
      {/* changes */}
      <span onClick={toggleNav} className="btn">
        <MenuOutlined />
      </span>
    </nav>
  );
};

export default Navbar;
