import React from "react";
import logo from "./logo/coaching-logo-header.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Coacing-logo" />
        </div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
        </div>
        <div className="buyNow"></div>
      </nav>
    </header>
  );
};

export default Header;
