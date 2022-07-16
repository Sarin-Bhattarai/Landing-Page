import React, { useState } from "react";
import "../utils/css/navbar.css";
import logo from "../utils/assets/zooki.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <>
      <nav className="nav">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul className={active}>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="home"
            >
              HOME
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="about"
            >
              ABOUT
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="services"
            >
              SERVICES
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="features"
            >
              FEATURES
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="pricing"
            >
              PRICING
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="clients"
            >
              CLIENTS
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="blog"
            >
              BLOG
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="active"
              smooth
              spy
              to="contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
