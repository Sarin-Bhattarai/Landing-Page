import React from "react";
import "../utils/css/navbar.css";
import logo from "../utils/assets/zooki.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
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
      </nav>
    </>
  );
};

export default Navbar;
