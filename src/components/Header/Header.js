import React, { useState } from "react";
import logo from "./logo/coaching-logo-header.webp";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Home from "../Home/Home";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  });

  return (
    <>
      <header className={header ? "header active" : "header"}>
        <nav>
          <div className="logo">
            <img src={logo} alt="Coacing-logo" />
          </div>
          <div className={`navbar ${open ? "show" : "close"}`}>
            <div className="logo2">
              <img src={logo} alt="Coacing-logo" />
            </div>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink to="javascript">Javascript</NavLink>
            <NavLink to="/react">React</NavLink>
            <NavLink to="/css">Css</NavLink>
            <NavLink to="/git">Git</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            {/* <NavLink to="/blog">Blog</NavLink> */}
            <div className="buy-now">
              <button href="/home" alt="buy">
                Buy Course Now
              </button>
              <span>$30</span>
            </div>
          </div>
          <div className="buyNow">
            <a href="/home" alt="buy">
              Buy Course Now
            </a>
            <span>$30</span>
          </div>
        </nav>
        <div className="icon" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
      </header>
      {/* <Home></Home> */}
    </>
  );
};

export default Header;
