import React, { useRef } from "react";
import "../utils/css/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../utils/assets/logo.png";
import { Link } from "react-scroll";

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
          <img className="logo-img" src={logo} alt="logo" />
        </a>
        {/* second part */}
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="home">
              HOME
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="services">
              SERVICES
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="features">
              FEATURES
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="pricing">
              PRICING
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="clients">
              CLIENTS
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="blog">
              BLOG
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contact">
              CONTACT
            </Link>
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
