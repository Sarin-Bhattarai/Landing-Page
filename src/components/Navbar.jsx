import React from "react";
import "../utils/css/navbar.css";
import logo from "../utils/assets/zooki.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="ul-id">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="home"
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="about"
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="services"
                >
                  SERVICES
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="features"
                >
                  FEATURES
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="pricing"
                >
                  PRICING
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="clients"
                >
                  CLIENTS
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="blog"
                >
                  BLOG
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  activeClass="active"
                  smooth
                  spy
                  to="contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
