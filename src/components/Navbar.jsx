import React, { useRef } from "react";
import "../utils/css/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavBbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      {/* change */}
      <nav ref={navRef}>
        {/* first part */}
        <a href="/">
          <h2 className="nav-logo">
            <span>A</span>pp
            <span>T</span>echnologies
          </h2>
        </a>
        {/* second part */}
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
        <button className="nav-btn nav-close-btn" onClick={showNavBbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavBbar}>
        <FaBars />
      </button>
    </>
  );
};

export default Navbar;
