import React from "react";
import Logo from "../utils/assets/App.png";
import "../utils/css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="nav-container">
        <a href="/">
          <img className="logo" src={Logo} alt="" />
        </a>
        <ul>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
